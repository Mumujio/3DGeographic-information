import Experience from "../Experience.js";
import AlligatorModel from "./Alligator.js";
import Environment from './Environment'
import SouthAmericaTerrain from "./SouthAmericaTerrain.js";
import SouthAmericaWeather from "./SouthAmericaWeather.js";


export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera.instance;

    this.environment = new Environment();

   
    this.initWorld()
  }
  initWorld() {
    this.experience.resources.on('sourceReady', () => {
      this.southAmericaWeather = new SouthAmericaWeather()
      this.southAmericaTerrain = new SouthAmericaTerrain()
      this.alligator = new AlligatorModel()
      this.useScroll();
    })

  }
  useScroll() {
    // 间距
    this.objectsDistance = 4
    this.southAmericaTerrain.model.scene.position.y = -this.objectsDistance * 0
    this.southAmericaWeather.model.scene.position.y = -this.objectsDistance * 1
    this.alligator.model.scene.position.y = -this.objectsDistance * 2
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
