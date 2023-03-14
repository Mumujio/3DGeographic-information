import Experience from "../Experience";
export default class OceaniaWeather {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.setModel();
  }
  setModel() {
    this.model = this.resources.items["OceaniaWeatherModel"];
    this.model.scene.scale.set(0.8,0.8,0.8)
    this.model.scene.rotation.x = Math.PI / 5;
    this.scene.add(this.model.scene);
  }
}
