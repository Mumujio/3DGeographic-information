import Experience from "../Experience.js";
import EuropeTerrain from "././EuropeTerrain.js";
import Environment from "./Environment"
import EuropeWeather from "./EuropeWeather.js";


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
      this.europeTerrain = new EuropeTerrain()
      this.europeWeather = new EuropeWeather()
      this.useScroll();
    })

  }
  useScroll() {
    // 间距
    this.objectsDistance = 4
    this.europeTerrain.model.scene.position.y = -this.objectsDistance * 0.5
    this.europeWeather.model.scene.position.y = -this.objectsDistance * 1
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
