import Experience from "../Experience.js";
import AfricaTerrain from "./AfricaTerrain.js";
import AfricaWeather from "./AfricaWeather.js";
import Environment from "./Environment.js";
import Lion from "./Lion.js";


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
      this.africaTerrain = new AfricaTerrain();
      this.africaWeather = new AfricaWeather()
      this.lion = new Lion()
      this.useScroll();
    })

  }
  useScroll() {
    // 间距
    this.objectsDistance = 4
    this.africaTerrain.model.scene.position.y = -this.objectsDistance * 0
    this.africaWeather.model.scene.position.y = -this.objectsDistance * 1
    this.lion.model.scene.position.y = -this.objectsDistance * 2
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
