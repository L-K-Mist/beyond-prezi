<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    :viewBox="viewBox"
    version="1.1"
    id="svg8"
    ref="graphic"
    inkscape:version="0.92.3 (2405546, 2018-03-11)"
    sodipodi:docname="outside-the-box.svg"
  >
    <defs id="defs2" />
    <sodipodi:namedview
      id="base"
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1.0"
      inkscape:pageopacity="0.0"
      inkscape:pageshadow="2"
      inkscape:zoom="0.7"
      inkscape:cx="506.69564"
      inkscape:cy="406.54941"
      inkscape:document-units="px"
      inkscape:current-layer="layer3"
      showgrid="false"
      units="px"
      inkscape:window-width="1920"
      inkscape:window-height="1055"
      inkscape:window-x="1280"
      inkscape:window-y="0"
      inkscape:window-maximized="1"
      fit-margin-right="-0.1"
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
    <g
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      id="layer1"
      style="display:inline"
    />
    <g
      inkscape:groupmode="layer"
      id="layer2"
      inkscape:label="zoomed out"
      style="display:inline"
    >
      <g style="display:inline" id="g874">
        <rect
          y="0"
          x="4.3596542e-06"
          height="702.85712"
          width="1000"
          id="zoomed-out"
          style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:6, 6;stroke-dashoffset:10;stroke-opacity:1"
        />
        <text
          id="text865"
          y="86.25972"
          x="52.240498"
          style="font-style:normal;font-weight:normal;font-size:56.23898697px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2.10896206"
          xml:space="preserve"
        >
          <tspan
            style="stroke-width:2.10896206"
            id="tspan867"
            y="86.25972"
            x="52.240498"
            sodipodi:role="line"
          >
            I'm the fully zoomed out view
          </tspan>
        </text>
      </g>
    </g>
    <g inkscape:groupmode="layer" id="layer3" inkscape:label="deep zoom">
      <g id="g897">
        <rect
          y="259.32675"
          x="489.9491"
          height="139.13455"
          width="249.72928"
          ref="firstBox"
          id="deep-zoom"
          style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.50655109;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:3.03930657, 3.03930657;stroke-dashoffset:0;stroke-opacity:1"
        />
        <text
          xml:space="preserve"
          style="font-style:normal;font-weight:normal;font-size:8.45002556px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.31687596"
          x="595.39764"
          y="263.8891"
          id="text836"
          transform="scale(0.91108292,1.0975949)"
        >
          <tspan
            sodipodi:role="line"
            id="tspan834"
            x="595.39764"
            y="263.8891"
            style="stroke-width:0.31687596"
          >
            Don't click this button if you want to
          </tspan>
          <tspan
            sodipodi:role="line"
            x="595.39764"
            y="274.45163"
            id="tspan838"
            style="stroke-width:0.31687596"
          >
            stay thinking inside the box.
          </tspan>
        </text>
      </g>
    </g>
  </svg>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const amt1 = 7;
    const amt2 = 140;
    const firstBox = ref(null);
    const graphic = ref(null);
    // TODO Measure screen and set that as width and height.
    const frame = ref({
      x: 0,
      y: 0,
      width: 10000,
      height: 7000
    });
    const viewBox = computed(
      () =>
        `${frame.value.x} ${frame.value.y} ${frame.value.width} ${frame.value.height}`
    );

    onMounted(() => {
      const svgDimensions = graphic.value.getBBox();
      frame.value = svgDimensions;
      console.log("setup -> frame.value", frame.value);
      setTimeout(() => {
        const { x, y, width, height } = firstBox.value.getBBox();
        // frame.value = {
        //   x: x - amt1,
        //   y: y - amt1,
        //   width: width + amt1 * 2,
        //   height: height + amt1 * 2
        // };
        frame.value = { x, y, width, height };
        console.log("setup -> frame.value", frame.value);
      }, 2000);
    });
    return {
      firstBox,
      graphic,
      viewBox
    };
  }
});
</script>

<style scoped>
svg {
  width: 80vw;
  height: 80vh;
  border: 1px dotted blue;
}
</style>
