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
        this.model.scene.scale.set(0.15, 0.15, 0.15)
        this.model.scene.rotation.x = Math.PI / 4
        this.model.scene.position.x = 0.5
        
        this.scene.add(this.model.scene)
    }
}