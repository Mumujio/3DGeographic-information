import * as THREE from "three";
import Experience from "./Experience.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
export default class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      // alpha: true,
    });
    this.instance.physicallyCorrectLights = true;
    // this.instance.outputEncoding = THREE.sRGBEncoding;
    // this.instance.toneMapping = THREE.CineonToneMapping;
    // this.instance.toneMappingExposure = 1.75;
    // this.instance.shadowMap.enabled = true;
    // this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));

    // CSS2D标签部分
    // this.labelRenderer = new CSS2DRenderer();
    // this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
    // this.labelRenderer.domElement.style.position = "absolute";
    // this.labelRenderer.domElement.style.top = "0px";
    // this.labelRenderer.domElement.style.pointerEvents = 'none'
    // this.labelRenderer.domElement.style.zIndex = '1'
    // this.experience.canvas.parentNode.appendChild(this.labelRenderer.domElement);
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));

    // this.labelRenderer.setSize(this.sizes.width, this.sizes.height)
    // this.labelRenderer.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }

  update() {
    
   
    this.instance.render(this.scene, this.camera.instance);

    // this.labelRenderer.render(this.scene, this.camera.instance)
  }
}
