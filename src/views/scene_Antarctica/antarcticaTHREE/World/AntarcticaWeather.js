import Experience from "../Experience"
export default class AntarcticaWeather{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AntarcticaWeatherModel']
        this.model.scene.scale.set(0.35, 0.35, 0.35)
        this.model.scene.rotation.x = Math.PI / 3.5
        this.model.scene.position.x=0.4
        this.scene.add(this.model.scene)
    }
}