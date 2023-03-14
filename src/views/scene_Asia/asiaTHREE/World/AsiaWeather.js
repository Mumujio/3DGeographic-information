import Experience from "../Experience"
export default class AsiaWeather{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AsiaWeatherModel']
        this.model.scene.scale.set(0.2, 0.2, 0.2)
        this.model.scene.rotation.x = Math.PI / 8
        
        this.scene.add(this.model.scene)
    }
}