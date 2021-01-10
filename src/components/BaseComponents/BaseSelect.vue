<template>
    <div class="select">
        <template v-if="label">
            <label>{{ label }}</label>
            <div class="spacer"></div>
        </template>
        <vue-select
            class="style-chooser"
            :style="{ width: width }"
            :placeholder="placeholder"
            :value="value"
            :options="options"
            :searchable="searchable"
            @input="handleInput"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSelect from 'vue-select'

import 'vue-select/dist/vue-select.css'

export default Vue.extend({
    components: {
        VueSelect,
    },
    props: {
        label: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: null,
        },
        width: {
            default: null,
            type: String,
        },
        options: {
            required: true,
            type: Array,
        },
        value: {
            type: [String, Number],
            default: null,
        },
        searchable: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        handleInput(selection: Number | String) {
            this.$emit('input', selection)
        },
    },
})
</script>

<style scoped></style>

<style>
.select .spacer {
    height: 10px;
}
.style-chooser .vs__search {
    padding: 0;
}
.style-chooser .vs__search::placeholder {
    font-size: 18px;
    color: #a2a2a2;
}
.style-chooser .vs__selected {
    font-size: 18px;
    color: #000;
}
.style-chooser .vs__border {
    border-bottom: 2px solid green;
}
.style-chooser .vs__dropdown-toggle {
    border: none;
    border-radius: 0px;
    border-bottom: 1px solid #000;
    color: #000;
    text-transform: lowercase;
    font-variant: small-caps;
}
</style>
