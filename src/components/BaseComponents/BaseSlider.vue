<template>
    <vue-slider
        :value="value"
        :process="process"
        :data="data"
        :style="cssVars"
        width="100%"
        :absorb="true"
        :lazy="lazy"
        :tooltip="tooltip"
        :disabled="disabled"
        :dot-size="dotSize"
        :interval="interval"
        :max="max"
        :min="min"
        :marks="marks"
        :hide-label="true"
        @change="updateValue($event)"
        @drag-start="dragging(true)"
        @drag-end="dragging(false)"
    >
        <template v-slot:dot>
            <div id="container">
                <div class="circle" :class="animationClass" style="animation-delay: 0s"></div>
                <div class="circle" :class="animationClass" style="animation-delay: 1s"></div>
                <div class="circle" :class="animationClass" style="animation-delay: 2s"></div>
                <div
                    v-if="animationClass === 'pulse'"
                    class="circle"
                    :class="animationClass"
                    style="animation-delay: 4s"
                ></div>
                <img v-if="lightDot" src="~/assets/sliders/slider_disc_light.svg" class="slider-dot" />
                <img v-else src="~/assets/sliders/slider_disc_dark.svg" class="slider-dot" />
            </div>
        </template>
        <template v-slot:tooltip>
            <div class="speech-bubble" :class="{ 'animate__animated animate__fadeOut': animated }">
                <PromptBubble />
            </div>
        </template>
    </vue-slider>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import PromptBubble from '@/components/SvgComponents/PromptBubble'
export default {
    components: {
        VueSlider,
        PromptBubble,
    },
    props: {
        value: {
            type: [Number, String, Object],
            required: true,
        },
        data: {
            type: Array,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        lazy: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 10,
        },
        max: {
            type: Number,
            default: 100,
        },
        min: {
            type: Number,
            default: 0,
        },
        marks: {
            type: [Boolean, Array, Function],
            default: false,
        },
        lightDot: {
            type: Boolean,
            default: false,
        },
        process: {
            type: Boolean,
            default: false,
        },
        dotSize: {
            type: Number,
            default: 55,
        },
        processColor: {
            type: String,
            default: '#3498db',
        },
        railColor: {
            type: String,
            default: '#525252',
        },
        prompt: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            animationClass: 'pulse',
            tooltip: 'always',
            animated: false,
        }
    },
    computed: {
        cssVars() {
            // this is where the css var() is set, so bg-color = this gradient above\
            return {
                '--bg-process': this.processColor,
                '--bg-rail': this.railColor,
                '--animation-circles': 'scaleIn 3s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32)',
            }
        },
    },
    mounted() {
        if (!this.prompt) {
            this.animationClass = null
            this.tooltip = 'none'
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value)
        },
        dragging(isDragging) {
            this.animationClass = this.animationClass === 'pulse' ? 'finish-pulsing' : null
            this.animated = true
            setTimeout(() => {
                this.animationClass = 'fade'
                this.animated = false
                this.tooltip = 'none'
            }, 1000)
            // where we dispatch the action if user has dragged slider
            if (this.$route.path !== '/expenses/explore-inflation/intro') {
                this.$store.dispatch('ui/hasDraggedSliderOnce')
            }
            this.$emit('dragging', isDragging)
        },
    },
}
</script>

<style scoped>
.slider-dot {
    cursor: pointer;
    width: 100%;
    height: 100%;
    z-index: 8;
}
.speech-bubble {
    margin-left: -100px;
    width: 300px;
}
#container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.circle {
    border-radius: 50%;
    border: 4px solid orange;
    /* 190% means that the circles are created just underneath the dot so that they more appear like they're coming out of it. */
    width: 190%;
    height: 190%;
    position: absolute;
    opacity: 0;
}

.pulse {
    animation: scaleIn 3s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
}
.finish-pulsing {
    animation: scaleOut 1s cubic-bezier(0.36, 0.11, 0.89, 0.32) reverse;
}
.fade {
    transition: 1s opacity ease-in-out;
    opacity: 0;
}

@keyframes scaleIn {
    from {
        transform: scale(0.5, 0.5);
        opacity: 1;
        border-width: 8px;
    }
    40% {
        opacity: 0.9;
    }
    to {
        transform: scale(1.4, 1.4);
        opacity: 0;
        border-width: 3px;
    }
}
@keyframes scaleOut {
    from {
        transform: scale(0.4, 0.4);
        opacity: 0;
        border-width: 8px;
    }
    40% {
        opacity: 0.9;
    }
    to {
        transform: scale(0.8, 0.8);
        opacity: 0.7;
        border-width: 3px;
    }
}
</style>
<style>
.vue-slider-process {
    background-color: var(--bg-process);
}
.vue-slider-rail {
    background-color: var(--bg-rail);
}
</style>
