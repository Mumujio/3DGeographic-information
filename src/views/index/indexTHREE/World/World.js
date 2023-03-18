import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Earth from "./Earth.js";
import Raycaster from "./Raycaster";
import Galaxy from "./Galaxy.js";
import * as THREE from "three";
import LabelRaycaster from './labelRaycaster.js'
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import TextLine from "./TextLine.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    // const help = new THREE.AxesHelper(5);
    // this.scene.add(help);

    // Wait for resources
    this.experience.resources.on("sourceReady", () => {
      this.earth = new Earth();
      this.galaxy = new Galaxy();
      this.environment = new Environment();
      this.raycaster = new Raycaster();
      // this.flyLine = new TextLine()
      // label标签
      // this.labelRaycaster = new LabelRaycaster(this.experience.labelDOMS);

      // CSS2D标签

      // let div = document.createElement('div');
      // div.style.width = '50px';
      // div.style.height = '50px';
      // div.style.background = 'rgba(10,18,51,0.8)';
      // div.style.color = '#fff'
      // div.textContent = 'hahaha'
      // div.className = 'label'
      // const label = new CSS2DObject(div)
      // label.position.set(0.6, -0.2, 0.8)
      
      // this.scene.add(label)

      
    });
  }
}
