import Experience from "../Experience"
export default class AfricaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AfricaTerrainModel']
       this.model.scene.rotation.x  = Math.PI/5
        this.scene.add(this.model.scene)
    }
}