<template>
  <svg
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:svg="http://www.w3.org/2000/svg"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    class="svg-window"
    :viewBox="viewBox"
    version="1.1"
    id="svg8"
    ref="graphic"
    inkscape:version="0.92.3 (2405546, 2018-03-11)"
    sodipodi:docname="three-box-zoom.svg"
  >
    <defs id="defs2" />
    <sodipodi:namedview
      id="base"
      pagecolor="#ffffff"
      bordercolor="#666666"
      borderopacity="1.0"
      inkscape:pageopacity="0.0"
      inkscape:pageshadow="2"
      inkscape:zoom="2.8"
      inkscape:cx="208.75373"
      inkscape:cy="589.5271"
      inkscape:document-units="px"
      inkscape:current-layer="first-box"
      showgrid="false"
      units="px"
      viewbox-width="1000"
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
    <g
      inkscape:label="Layer 1"
      inkscape:groupmode="layer"
      id="layer1"
      transform="translate(0,-111.7917)"
    >
      <g id="first-box" ref="firstBox" inkscape:label="#g932">
        <rect
          onmouseover='console.log("I&apos;m the first-box")'
          inkscape:label="#rect815"
          y="143.22028"
          x="31.428572"
          height="157.14285"
          width="308.57144"
          id="a-box"
          style="opacity:0.30700001;fill:#666666;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:0.5, 1.5;stroke-dashoffset:0;stroke-opacity:1"
        />
        <text
          xml:space="preserve"
          style="font-style:normal;font-weight:normal;font-size:53.92895508px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:10.11167812"
          x="50.944893"
          y="208.71298"
          id="text833"
        >
          <tspan
            sodipodi:role="line"
            id="tspan831"
            x="50.944893"
            y="208.71298"
            style="stroke-width:10.11167812"
          >
            First Box
          </tspan>
        </text>
      </g>
      <g id="g939">
        <rect
          y="537.59534"
          x="462.8125"
          height="194.28572"
          width="397.14285"
          id="rect817"
          style="opacity:0.30700001;fill:#666666;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:0.5, 1.5;stroke-dashoffset:0;stroke-opacity:1"
        />
        <flowRoot
          transform="matrix(1.3341518,0,0,1.3341518,414.61007,493.56259)"
          style="font-style:normal;font-weight:normal;font-size:40px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none"
          id="flowRoot821-3"
          xml:space="preserve"
        >
          <flowRegion id="flowRegion823-6">
            <rect
              y="45.714287"
              x="50"
              height="71.428566"
              width="326.42856"
              id="rect825-7"
            />
          </flowRegion>
          <flowPara id="flowPara827-5">Second box</flowPara>
        </flowRoot>
      </g>
      <g id="g868" transform="translate(-1.875,33.169643)">
        <rect
          y="545.59686"
          x="741.37201"
          height="16.496929"
          width="11.139788"
          id="rect819"
          style="opacity:0.30700001;fill:#666666;fill-opacity:1;stroke:#000000;stroke-width:0.07450048;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:0.07450048, 0.22350144;stroke-dashoffset:0;stroke-opacity:1"
        />
        <text
          id="text859"
          y="547.91217"
          x="742.83966"
          style="font-style:normal;font-weight:normal;font-size:1.87231493px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.35105905"
          xml:space="preserve"
        >
          <tspan
            style="stroke-width:0.35105905"
            id="tspan861"
            y="547.91217"
            x="742.83966"
            sodipodi:role="line"
          >
            Mini box
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
    const amt1 = 70;
    const amt2 = 140;
    const firstBox = ref(null);
    const graphic = ref(null);
    // TODO Measure screen and set that as width and height.
    const frame = ref({
      x: 0,
      y: 0,
      width: 1000,
      height: 700
    });
    const viewBox = computed(
      () =>
        `${frame.value.x} ${frame.value.y} ${frame.value.width} ${frame.value.height}`
    );

    onMounted(() => {
      console.log("setup -> firstBox", firstBox.value.getBBox());
      const svgDimensions = graphic.value.getBBox();
      console.log("setup -> svgDimensions", svgDimensions);
      // graphic.value.setAttribute("viewBox");
      // frame.value.y = 400;
      frame.value = svgDimensions;
      setTimeout(() => {
        const { x, y, width, height } = firstBox.value.getBBox();
        frame.value = {
          x: x - amt1,
          y: y - amt2,
          width: width + amt1 * 2,
          height: height + amt2 * 2
        };
        console.log("setup -> viewBox", viewBox.value);
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
.svg-window {
  width: 80vw;
  height: 80vh;
  border: 1px dotted blue;
}
</style>
