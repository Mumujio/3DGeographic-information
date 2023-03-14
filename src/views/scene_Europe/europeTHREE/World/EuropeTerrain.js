import Experience from "../Experience"
export default class EuropeTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['EuropeTerrainModel']
        this.model.scene.rotation.x = Math.PI / 5
        this.model.scene.scale.set(4,4,4)
        this.scene.add(this.model.scene)
    }
}