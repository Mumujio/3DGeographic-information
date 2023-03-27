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
        this.model.scene.rotation.x = Math.PI / 4
        this.model.scene.children[0].scale.set(1.3, 1.3, 1.3)
        this.model.scene.children[0].position.y = 1.6
        this.model.scene.children[0].position.x= 0.8
        this.scene.add(this.model.scene)
    }
}