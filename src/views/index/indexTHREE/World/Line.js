import Experience from "../Experience.js";
import * as THREE from "three";
export default class Line {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setLine();
  }
  setLine() {
    // let curve = new THREE.CatmullRomCurve3([
    //   new THREE.Vector3(0, 0, 10),
    //   new THREE.Vector3(10, 0, 10),
    //   new THREE.Vector3(10, 0, 0),
    //   new THREE.Vector3(20, 0, -10),
    // ]);
    //   let tubeGeometry = new THREE.TubeGeometry(curve, 80, 0.2);

     let textureLoader = new THREE.TextureLoader()
    let planeGeometry = new THREE.PlaneGeometry(4, 1);
    let PlaneMaterial = new THREE.MeshLambertMaterial({
        // color: "#000011",
        
    });
     this.planeTexture =  textureLoader.load('./static/textures/liudong.png', (texture) => {
          PlaneMaterial.map = texture
          PlaneMaterial.transparent = true
          PlaneMaterial.side = THREE.DoubleSide
      })
      this.planeTexture.wrapS = THREE.RepeatWrapping;
      this.planeTexture.wrapT = THREE.RepeatWrapping;
    const mesh = new THREE.Mesh(planeGeometry, PlaneMaterial);
    this.scene.add(mesh);



    const axesHelper = new THREE.AxesHelper(5);
    this.scene.add(axesHelper);
  }

  update() {
    this.planeTexture.offset.x += 0.001; //更新流动线纹理偏移量
  }
}
