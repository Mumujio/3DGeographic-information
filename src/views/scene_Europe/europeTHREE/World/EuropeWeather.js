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
        this.model.scene.rotation.x = Math.PI / 5
        this.model.scene.scale.set(0.4,0.4,0.4)

        this.scene.add(this.model.scene)
    }
}