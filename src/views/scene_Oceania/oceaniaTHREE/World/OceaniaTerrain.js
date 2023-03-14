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
        this.model.scene.rotation.x = Math.PI / 5
        this.model.scene.position.x = -4
        this.model.scene.scale.set(2,2,2)
        this.scene.add(this.model.scene)
    }
}