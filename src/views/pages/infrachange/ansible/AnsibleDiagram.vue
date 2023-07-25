<template>
  <div class="control-section">
    <div id="networkDiagram" style="width: 100%; height: 600px">
      <div class="sb-mobile-palette-bar">
        <div id="palette-icon" role="button"  class="e-ddb-icons1 e-toggle-palette"></div>
      </div>
      <div id="palette-space" v-show="false" class="sb-mobile-palette">
        <ejs-symbolpalette ref="paletteObj" id="symbolpalette" :expandMode='expandMode' :palettes='palettes' :width='palettewidth' :height='paletteheight'
                           :getNodeDefaults='palettegetNodeDefaults' :getSymbolInfo='getSymbolInfo'
                           :symbolWidth='symbolWidth' :symbolHeight='symbolHeight'>
        </ejs-symbolpalette>
        <div id="dropArea" style="display:none;">
          <ejs-button id="browse" class="e-outline" :isPrimary="true" v-on:click.native="btnClick"></ejs-button>
          <div class="uploadclass">
            <ejs-uploader ref='uploadObj' id='uploadFiles' name="UploadFiles" :asyncSettings='path'
                          :dropArea='dropElement' :success='onUploadSuccess' :removing='onFileRemove'>
            </ejs-uploader>
          </div>
        </div>
      </div>

      <div id="diagram-space" class="sb-mobile-diagram">
        <ejs-diagram style='display:block' ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors' :getNodeDefaults='getNodeDefaults' :getConnectorDefaults='getConnectorDefaults'
                     :snapSettings='snapSettings' :click='click' @drop='onDrop'>
        </ejs-diagram>
      </div>
    </div>
  </div>

</template>
<style scoped>
#networkDiagram .sb-mobile-palette-bar {
  display: none;
}

#networkDiagram .sb-mobile-palette {
  width:215px;
  height:559px;
  float:left;
}

#networkDiagram .sb-mobile-diagram {
  width:calc(100% - 217px);
  height: 559px;
  float: left;
  border: 1px solid rgba(206, 131, 131, 0.12);
  border-left: none;
}
.uploadclass { height: 0px; width: 0px; display: none !important; border: none !important; }
#networkDiagram .container-fluid{
  padding-bottom: 15px;
}
#networkDiagram .e-upload {
  height: 0px;
  width: 0px;
  display: none !important;
  border: none !important;
}
#dropArea {
  height: 50px;
  padding: 7px;
  text-align: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-top: none;
}
@media (max-width: 550px) {

  #networkDiagram .sb-mobile-palette {
    z-index: 19;
    position: absolute;
    display: none;
    transition: transform 300ms linear, visibility 0s linear 300ms;
    width:39%;
    height:100%;
  }

  #networkDiagram .sb-mobile-diagram {
    width: 100%;
    height: 100%;
    float: left;
    left: 0px;
  }

  #networkDiagram .sb-mobile-palette-bar {
    display: block;
    width: 100%;
    background: #fafafa;
    padding: 10px 10px;
    border: 0.5px solid #e0e0e0;
    min-height: 40px;
  }

  #palette-icon {
    font-size: 20px;
  }
}

#networkDiagram .sb-mobile-palette-open {
  position: absolute;
  display: block;
  right: 15px;
}

.e-file-select-wrap {
  display: none;
}

.material #networkDiagram #palette-space .e-accordion {
  border: none;
}

.material #networkDiagram #palette-space {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.material #dropArea {
  border-width: 1px 0px 0px 0px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.12);
}
.fabric #networkDiagram .sb-mobile-diagram {
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
.bootstrap #networkDiagram .sb-mobile-diagram {
  height: 554px;
  margin-top: 5px;
  border-radius: 4px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);
}
</style>

<script>
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmdCdkx3WmFZfV1gdVdMZVxbR3VPMyBoS35RdUVkW3pecHFVRWNbUUF1');

import {
  SnapConstraints,
  PortVisibility
} from "@syncfusion/ej2-vue-diagrams";
import {
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
  template10,
  template11,
  template12,
  template13,
  template14,
  template15,
  template16,
  template17,
  template18,
  arrow
} from "@/views/pages/terraform//network-shapes-templates";

import { isNullOrUndefined } from "@syncfusion/ej2-base";

let isMobile;
let diagramInstance;
let uploadObjInstance;
let paletteInstance;
let id = 0;
//Initializes the ports for the nodes.
let port = [
  { id: "port1", offset: { x: 0, y: 0.5 } },
  { id: "port2", offset: { x: 1, y: 0.5 } },
  { id: "port3", offset: { x: 0.5, y: 0 } },
  { id: "port4", offset: { x: 0.5, y: 1 } }
];

//Initializes the nodes for the diagram.
let nodes = [
  {
    id: "internet1",
    offsetX: 80,
    offsetY: 50,
    shape: { type: "Native", content: template6 },
    annotations: [{ content: "Internet", offset: { x: 0.5, y: 1.3 } }],
    ports: port
  },
  {
    id: "gateway1",
    offsetX: 220,
    offsetY: 50,
    shape: { type: "Native", content: template3 },
    annotations: [{ content: "Internet gateway", offset: { x: 0.5, y: 1.1 } }],
    ports: port
  },
  {
    id: "vpc1",
    offsetX: 370,
    offsetY: 50,
    shape: { type: "Native", content: template5 },
    annotations: [{ content: "VPC", offset: { x: 1.4, y: 0.5 } }],
    ports: port
  },
  {
    id: "publicSubnet1",
    offsetX: 220,
    offsetY: 205,
    shape: { type: "Native", content: template7 },
    annotations: [{ content: "Public subnet", offset: { x: 1.9, y: 0.5 } }],
    ports: port
  },
  {
    id: "privateSubnet1",
    offsetX: 370,
    offsetY: 205,
    shape: { type: "Native", content: template8 },
    annotations: [{ content: "Private subnet", offset: { x: 1.9, y: 0.5 } }],
    ports: port
  },
  {
    id: "privateSubnet2",
    offsetX: 510,
    offsetY: 205,
    shape: { type: "Native", content: template8 },
    annotations: [{ content: "DB subnet", offset: { x: 1.7, y: 0.5 } }],
    ports: port
  },
  {
    id: "LoadBalancer1",
    offsetX: 220,
    offsetY: 320,
    shape: { type: "Native", content: template10 },
    annotations: [{ content: "Load Balancer", offset: { x: 1.8, y: 0.5 } }],
    ports: port
  },
  {
    id: "WebServer1",
    offsetX: 160,
    offsetY: 450,
    shape: { type: "Native", content: template1 },
    annotations: [{ content: "WEB-SERVER-1", offset: { x: 0.5, y: 1.3 } }],
    ports: port
  },
  {
    id: "WebServer2",
    offsetX: 270,
    offsetY: 450,
    shape: { type: "Native", content: template1 },
    annotations: [{ content: "WEB-SERVER-2", offset: { x: 0.5, y: 1.3 } }],
    ports: port
  },
  {
    id: "WasServer1",
    offsetX: 370,
    offsetY: 450,
    shape: { type: "Native", content: template1 },
    annotations: [{ content: "WAS-SERVER", offset: { x: 0.5, y: 1.3 } }],
    ports: port
  },
  {
    id: "DbServer1",
    offsetX: 510,
    offsetY: 450,
    shape: { type: "Native", content: template2 },
    annotations: [{ content: "DB-SERVER", offset: { x: 0.5, y: 1.3 } }],
    ports: port
  }
];

//Initializes the connectors for the diagram.
let connectors = [
  {
    id: "connectora",
    sourceID: "internet1",
    targetID: "gateway1",
    targetPortID: "port1"
  },
  {
    id: "connectorawork",
    sourceID: "gateway1",
    targetID: "vpc1",
    sourcePortID: "port2",
    targetPortID: "port1"
  },
  {
    id: "connectoraworkm",
    sourceID: "vpc1",
    targetID: "publicSubnet1",
    type: "Orthogonal",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectorws1m3",
    sourceID: "vpc1",
    targetID: "privateSubnet1",
    type: "Orthogonal",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectorws2m3",
    sourceID: "vpc1",
    targetID: "privateSubnet2",
    type: "Orthogonal",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectordh2d2",
    sourceID: "publicSubnet1",
    type: "Orthogonal",
    targetID: "LoadBalancer1",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectordh2d1",
    sourceID: "LoadBalancer1",
    type: "Orthogonal",
    targetID: "WebServer1",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectordh1d3",
    sourceID: "LoadBalancer1",
    type: "Orthogonal",
    targetID: "WebServer2",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectordh2d3",
    sourceID: "privateSubnet1",
    type: "Orthogonal",
    targetID: "WasServer1",
    sourcePortID: "port4",
    targetPortID: "port3"
  },
  {
    id: "connectordh3d3",
    sourceID: "privateSubnet2",
    type: "Orthogonal",
    targetID: "DbServer1",
    sourcePortID: "port4",
    targetPortID: "port3"
  }
];

// initializes the network symbols to the UML Shapes in the symbol palette.
let symbols = [
  { id: "internet", shape: { type: "Native", content: template6 } },
  { id: "gateway", shape: { type: "Native", content: template3 } },
  { id: "vpc", shape: { type: "Native", content: template5 } },
  { id: "publicSubnet", shape: { type: "Native", content: template7 } },
  { id: "privateSubnet", shape: { type: "Native", content: template8 } },
  { id: "applicationLoadBalancer", shape: { type: "Native", content: template10 } },
  { id: "ec2", shape: { type: "Native", content: template1 } },
  { id: "rds", shape: { type: "Native", content: template2 } }
];
let sourcePoint = { x: 0, y: 0 };
let targetPoint = { x: 40, y: 40 };
let targetDecorator = { shape: "Arrow", style: { fill: "#757575", strokeColor: "#757575" } };
let style = { strokeWidth: 2, strokeColor: "#757575" };

// initializes the connector symbols to the UML Shapes in the symbol palette.
let connectorSymbols = [
  {
    id: "link11",
    type: "Straight",
    sourcePoint: sourcePoint,
    targetPoint: targetPoint,
    targetDecorator: targetDecorator,
    style: style
  },
  {
    id: "link12",
    type: "Orthogonal",
    sourcePoint: sourcePoint,
    targetPoint: targetPoint,
    targetDecorator: targetDecorator,
    style: style
  }
];
// Initializes the palettes to be displayed in the symbol palette.
let palettes = [
  { id: "network", expanded: true, symbols: symbols, title: "Network Shapes" },
  {
    id: "connectors",
    expanded: true,
    symbols: connectorSymbols,
    title: "Connectors"
  }
];

export default {
  data: function() {
    return {
      width: "100%",
      height: "100%",
      nodes: nodes,
      connectors: connectors,
      snapSettings: {
        constraints: SnapConstraints.None
      },
      expandMode: "Multiple",
      palettes: palettes,
      palettewidth: "100%",
      paletteheight: "calc(100% - 50px)",
      symbolHeight: 48,
      symbolWidth: 48,
      path: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        removeUrl:
            "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove"
      },
      //Sets the default values of a node
      getNodeDefaults: (node) => {
        if (node.style) {
          node.style.strokeColor = "#5C90DF";
          node.style.fill = "transparent";
        }
        if (node.annotations && node.annotations.length !== 0) {
          if (node.annotations[0]) {
            let annotation = node.annotations[0];
            if (annotation && annotation.style) {
              annotation.style.color = "black";
              annotation.style.fontSize = 12;
              annotation.style = {
                textWrapping: "NoWrap"
              };
            }
          }
        }
        if (node.ports && node.ports.length !== 0) {
          for (let i = 0; i < node.ports.length; i++) {
            node.ports[i].visibility = PortVisibility.Hidden;
          }
        }
        if (node.shape) {
          if (node.shape.type === "Native") {
            if(node.id.indexOf("internet")>-1){
              node.width = 50;
              node.height = 35;
            }else{
              node.width = 50;
              node.height = 50;
            }
          }

          if (node.shape.type === "Text") {
            node.width = 127;
            node.height = 40;
            node.style = { bold: true, fontSize: 16 };
          }
        }
        return node;
      },
      //Sets the default values of a connector
      getConnectorDefaults: (connector) => {
        connector.targetDecorator = {
          shape: "Arrow",
          width: 8,
          height: 8,
          style: { fill: "#5C90DF", strokeColor: "#5C90DF" }
        };
        connector.style.strokeColor = "#5C90DF";
        if (connector.annotations && connector.annotations.length !== 0) {
          let annotation = connector.annotations[0];
          if (annotation && annotation.style) {
            annotation.style.fill = "white";
          }
        }
        return connector;
      },
      palettegetNodeDefaults: (symbol) => {
        if (symbol.id === "arrow1") {
          symbol.width = 75;
          symbol.height = 60;
          symbol.offsetX = 160;
          symbol.offsetY = 135;
          if (symbol.style) {
            symbol.style.strokeColor = "#757575";
            symbol.style.fill = "white";
          }
        } else {
          if (symbol.id === "remoteController") {
            symbol.width = 25;
          } else {
            symbol.width = 40;
          }
          symbol.height = 40;
          symbol.offsetX = 20;
          symbol.offsetY = 20;
          if (symbol.style) {
            symbol.style.strokeColor = "";
          }
          (symbol.shape).scale = "Stretch";
        }
      },
      getSymbolInfo: (symbol) => {
        return { fit: true };
      },
      dropElement: ".control-fluid"
    };
  },
  mounted: function() {
    diagramInstance = this.$refs.diagramObj.ej2Instances;
    addEvents();
    diagramInstance.fitToPage();
    paletteInstance = this.$refs.paletteObj.ej2Instances;
    uploadObjInstance = this.$refs.uploadObj.ej2Instances;

  },
  methods: {
    btnClick: () => {
      if (
          !isNullOrUndefined(
              document.getElementsByClassName("e-file-select-wrap")
          )
      ) {
        let obj = document.getElementsByClassName("e-file-select-wrap")[0];
        obj.querySelector("button").click();
      }
      return false;
    },
    onUploadSuccess: (arg) => {
      let file1 = arg.file;
      let file = file1.rawFile;
      let reader = new FileReader();
      reader.addEventListener(
          "load",
          (event) => {
            let shape;
            let shapeContent = event.target.result;
            shape = {
              id: "newshape" + id.toString(),
              shape: { type: "Native", content: shapeContent }
            };
            paletteInstance.addPaletteItem("network", shape);
          }
      );
      id++;
      reader.readAsText(file);
      uploadObjInstance.clearAll();
    },
    onFileRemove: (args) => {
      args.postRawFile = false;
    }
  }
};

function addEvents() {
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    let paletteIcon = document.getElementById(
        "palette-icon"
    );
    if (paletteIcon) {
      paletteIcon.addEventListener("click", openPalette, false);
    }
  }
}

function openPalette() {
  let paletteSpace = document.getElementById(
      "palette-space"
  );
  isMobile = window.matchMedia("(max-width:550px)").matches;
  if (isMobile) {
    if (!paletteSpace.classList.contains("sb-mobile-palette-open")) {
      paletteSpace.classList.add("sb-mobile-palette-open");
    } else {
      paletteSpace.classList.remove("sb-mobile-palette-open");
    }
  }
}
</script>
<script setup>
</script>