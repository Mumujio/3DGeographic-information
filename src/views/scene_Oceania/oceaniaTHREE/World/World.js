import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Kangaroo from "./Kangaroo.js";
import Koala from "./Koala.js";
import OceaniaTerrain from "./OceaniaTerrain.js";
import OceaniaWeather from "./OceaniaWeather.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera.instance;

    this.initWorld()
  }

  initWorld() {
    this.experience.resources.on('sourceReady', () => {
      this.environment = new Environment();
      this.oceaniaWeather = new OceaniaWeather()
      this.oceaniaTerrain = new OceaniaTerrain()
      this.kangaroo = new Kangaroo()
      this.koala = new Koala()
      this.useScroll();
    })

  }
  useScroll() {
    // 间距
    this.objectsDistance = 4
    
    // 模型位置
    
    this.oceaniaTerrain.model.scene.position.y = -this.objectsDistance * 0
    this.oceaniaWeather.model.scene.position.y = -this.objectsDistance * 1
    this.kangaroo.model.scene.position.y = -this.objectsDistance * 2.2
    this.koala.model.scene.position.y = -this.objectsDistance * 3.1



    this.experience.time.on("tick", () => {
      this.scrollY = this.experience.scroll.scrollContent.scrollY;
      this.camera.position.y =
        (-this.scrollY / this.sizes.height) * this.objectsDistance;
      this.experience.scroll.newSection = Math.round(
        this.scrollY / this.sizes.height
      );
    });

 
  }
}
