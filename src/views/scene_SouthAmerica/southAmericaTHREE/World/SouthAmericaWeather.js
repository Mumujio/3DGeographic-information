import Experience from "../Experience"
export default class SouthAmericaWeather{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        console.log( this.resources);
        
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['SouthAmericaWeatherModel']
        this.model.scene.rotation.x = Math.PI / 3
        this.model.scene.scale.set(0.2, 0.2, 0.2)
        this.model.scene.position.x = 0.4
        this.model.scene.position.y = 0.4
        this.scene.add(this.model.scene)
    }
}