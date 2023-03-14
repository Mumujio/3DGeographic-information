import Experience from "../Experience.js";
import AsiaTerrain from "./AsiaTerrain.js";
import AsiaWeather from "./AsiaWeather.js";
import Environment from "./Environment.js";
import Ginkgo from "./Ginkgo.js";
import Panda from "./Panda.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera.instance;

    this.environment = new Environment();

    this.initWorld();
  }
  initWorld() {
    this.experience.resources.on("sourceReady", () => {
      this.asiaWeather = new AsiaWeather();
      this.ginkgo = new Ginkgo();
      this.panda = new Panda();
      this.asiaTerrain = new AsiaTerrain()
     
      
      this.useScroll();
    });
  }
  useScroll() {
    // 间距
    this.objectsDistance = 4;
    this.asiaTerrain.model.scene.position.y = -this.objectsDistance * 0
    this.asiaWeather.model.scene.position.y = -this.objectsDistance * 1;
    this.panda.model.scene.position.y = -this.objectsDistance * 2;
    this.ginkgo.model.scene.position.y = -this.objectsDistance * 3;

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
