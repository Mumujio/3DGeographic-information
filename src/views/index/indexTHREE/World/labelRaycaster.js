import Experience from "../Experience";
import * as THREE from "three";

export default class LabelRaycaster {
  constructor(labelDOMS) {
    this.experience = new Experience();
    this.labelRaycaster = new THREE.Raycaster();
    this.camera = this.experience.camera.instance;
    this.scene = this.experience.scene;
    this.earth = this.experience.world.earth;
    this.controls = this.experience.camera.controls
    this.points = [
      { position: new THREE.Vector3(0.6, -0.2, 0.8), element: null },
      {
        position: new THREE.Vector3(0, 1.1, 0.4),
        element: null,
      },
      {
        position: new THREE.Vector3(-0.2,1.1,-0.4),
        element: null,
      },
    ];
    this.labelDOMS = labelDOMS;
    this.sizes = this.experience.sizes;
    this.setLableRaycaster();
  }
  setLableRaycaster() {
    for (let i = 0; i < this.points.length; i++) {
      this.points[i]["element"] = this.labelDOMS[i];
    }
  }
  update() {
  
      for (const point of this.points) {
        const screenPosition = point.position.clone();
        screenPosition.project(this.camera);
  
        this.labelRaycaster.setFromCamera(screenPosition, this.camera);
        const intersects = this.labelRaycaster.intersectObjects(
          this.earth.model.scene.children,
          true
        );
  
        if (intersects.length === 0) {
          // 没有交叉,可见
          point.element.classList.add("visible");
        } else {
          const intersectionDistance = intersects[0].distance;
          const pointDistance = point.position.distanceTo(this.camera.position);
          if (intersectionDistance < pointDistance) {
            // 不可见
            point.element.classList.remove("visible");
            // console.log(point);
            
          } else {
          
            point.element.classList.add("visible");
          }
        }
        const translateX = screenPosition.x * this.sizes.width * 0.5;
        const translateY = -screenPosition.y * this.sizes.height * 0.5;
        point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }


  }
}
