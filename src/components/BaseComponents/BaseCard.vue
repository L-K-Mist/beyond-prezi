<template>
    <div class="card">
        <slot>
            <p>I'm a BaseCard If you put text/elements inside me, then this text is replaced with yours.</p>
            <p>
                I have some default CSS for padding and margin etc. Although feel free to override in your components
                using the myClass.card syntax to over-ride any css.
            </p>
            <p>If there's settings that need to change for all raised cards, then this is the place to do it.</p>
        </slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    background: white;
    padding: 30px;
    height: 100%;
}
</style>
