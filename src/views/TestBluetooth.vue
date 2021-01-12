<template>
  <div @click="testBluetooth">Click me</div>
</template>

<script>
import { defineComponent, ref, computed, watch } from "vue";
import anime from "animejs/lib/anime.es.js";

export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    return {};
  },
  methods: {
    async testBluetooth() {
      let filters = [];

      let filterService = document.querySelector("#service").value;
      if (filterService.startsWith("0x")) {
        filterService = parseInt(filterService);
      }
      if (filterService) {
        filters.push({ services: [filterService] });
      }

      let filterName = document.querySelector("#name").value;
      if (filterName) {
        filters.push({ name: filterName });
      }

      let filterNamePrefix = document.querySelector("#namePrefix").value;
      if (filterNamePrefix) {
        filters.push({ namePrefix: filterNamePrefix });
      }

      let options = {
        acceptAllDevices: true,
      };
      if (document.querySelector("#allDevices").checked) {
        options.acceptAllDevices = true;
      } else {
        options.filters = filters;
      }

      try {
        log("Requesting Bluetooth Device...");
        log("with " + JSON.stringify(options));
        const device = await navigator.bluetooth.requestDevice(options);
        log("> Name:             " + device.name);
        log("> Id:               " + device.id);
        log("> Connected:        " + device.gatt.connected);
      } catch (error) {
        log("Argh! " + error);
      }
    },
  },
});
</script>

<style scoped></style>
