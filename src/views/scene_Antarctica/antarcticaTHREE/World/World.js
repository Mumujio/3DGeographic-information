import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Penguin from "./Penguin.js";
import Moss from "./Moss.js";
import AntarcticaTerrain from "./AntarcticaTerrain.js";
import AntarcticaWeather from "./AntarcticaWeather.js";

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
      this.penguin = new Penguin();
      this.moss = new Moss();
      this.antarcticaTerrain = new AntarcticaTerrain();
      this.antarcticaWeather = new AntarcticaWeather();
      this.useScroll();
    });
  }
  useScroll() {
    // 间距
    this.objectsDistance = 4;
    // 模型设置距离
    this.antarcticaTerrain.model.scene.position.y = -this.objectsDistance * 0;
    this.antarcticaWeather.model.scene.position.y = -this.objectsDistance * 1;
    this.penguin.model.scene.position.y = -this.objectsDistance * 2;
    this.moss.model.scene.position.y = -this.objectsDistance * 3;

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
