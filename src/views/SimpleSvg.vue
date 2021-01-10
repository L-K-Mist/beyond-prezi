<template>
  <div style="width: 98vw; height:89vh">
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
      width="100vw"
      height="100vh"
      viewBox="0 0 400 300"
      version="1.1"
      id="svg8"
      @click="open"
      inkscape:version="0.92.3 (2405546, 2018-03-11)"
      sodipodi:docname="circle to button.svg"
    >
      <defs id="defs2" />
      <sodipodi:namedview
        id="base"
        pagecolor="#ffffff"
        bordercolor="#666666"
        borderopacity="1.0"
        inkscape:pageopacity="0.0"
        inkscape:pageshadow="2"
        inkscape:zoom="0.69999999"
        inkscape:cx="643.84073"
        inkscape:cy="170.14438"
        inkscape:document-units="px"
        inkscape:current-layer="layer1"
        showgrid="false"
        units="px"
        inkscape:window-width="1920"
        inkscape:window-height="1055"
        inkscape:window-x="1280"
        inkscape:window-y="0"
        inkscape:window-maximized="1"
      />
      <metadata id="metadata5">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1">
        <path
          style="opacity:0.56499999;fill:#ffffce;fill-opacity:1;stroke:#000000;stroke-width:0.31069943;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
          d="M 90.350396,174.56824 C 135.87386,174.56824 167.48637,137.66464 167.48637,92.141213 167.48638,46.617773 135.87387,9.7135629 90.350396,9.7135629 H 86.716063 C 41.192629,9.7135629 4.2884229,46.617773 4.2884198,92.141213 4.2884167,137.66464 41.192622,174.56824 86.716063,174.56824 Z"
          inkscape:connector-curvature="0"
          id="path837"
          sodipodi:nodetypes="csccssc"
        />
      </g>
    </svg>
  </div>
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
    open() {
      anime({
        targets: "#svg8",
        viewBox: {
          value: "0 0 264.58334 185.20833"
        }
      });
      anime({
        targets: "#path837",
        d: [
          {
            value:
              "M 90.350396,174.56824 C 135.87386,174.56824 167.48637,137.66464 167.48637,92.141213 167.48638,46.617773 135.87387,9.7135629 90.350396,9.7135629 H 86.716063 C 41.192629,9.7135629 4.2884229,46.617773 4.2884198,92.141213 4.2884167,137.66464 41.192622,174.56824 86.716063,174.56824 Z"
          },
          {
            value:
              "M 180.30873,174.56824 C 225.83219,174.56824 257.4447,137.66464 257.4447,92.141213 257.44471,46.617773 225.8322,9.7135629 180.30873,9.7135629 H 86.716063 C 41.192629,9.7135629 4.2884229,46.617773 4.2884198,92.141213 4.2884167,137.66464 41.192622,174.56824 86.716063,174.56824 Z"
          }
        ],
        easing: "easeOutQuad",
        duration: 2000
      });
    }
  }
});
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
  border: 3px dotted blue;
}
</style>
