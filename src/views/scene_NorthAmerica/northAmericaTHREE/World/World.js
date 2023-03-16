import Experience from "../Experience.js";
import Environment from "./Environment.js";
import NorthAmericaTerrain from "./NorthAmericaTerrain.js";
import NorthAmericaWeather from "./NorthAmericaWeather.js";


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
      this.northAmericaWeather = new NorthAmericaWeather()
      this.northAmericaTerrain = new NorthAmericaTerrain()
      
      this.useScroll();
    })

  }
  useScroll() {
    // 间距
    this.objectsDistance = 4
    
    // 模型位置
    console.log( this.northAmericaTerrain.model.scene);
    
    this.northAmericaTerrain.model.scene.position.y = -this.objectsDistance * 0
    this.northAmericaWeather.model.scene.position.y = -this.objectsDistance * 1


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
