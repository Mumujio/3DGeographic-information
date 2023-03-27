import Experience from "../Experience"
export default class OceaniaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['OceaniaTerrainModel']
        this.model.scene.rotation.x = Math.PI / 4
        this.model.scene.children[0].position.x = -1.7
        this.model.scene.children[0].position.y = 0.3
        this.model.scene.scale.set(2.5,2.5,2.5)
        this.scene.add(this.model.scene)
    }
}