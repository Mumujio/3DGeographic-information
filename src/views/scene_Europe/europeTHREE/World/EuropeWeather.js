import Experience from "../Experience"
export default class EuropeWeather{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        console.log( this.resources);
        
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['EuropeWeatherModel']
        this.model.scene.rotation.x = Math.PI / 4
        this.model.scene.scale.set(0.38, 0.38, 0.38)
        this.model.scene.position.x = 1.1

        this.scene.add(this.model.scene)
    }
}