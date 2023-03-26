import Experience from "../Experience";
export default class NorthAmericaWeather {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.setModel();
  }
  setModel() {
    this.model = this.resources.items["NorthAmericaWeatherModedl"];
    
    this.model.scene.scale.set(0.2,0.2,0.2)
    this.model.scene.rotation.x = Math.PI / 5;
    this.model.scene.position.x = 0.5
    // this.model.scene.children[0].position.x= 2
    


     
  
    this.scene.add(this.model.scene);
  }
}
