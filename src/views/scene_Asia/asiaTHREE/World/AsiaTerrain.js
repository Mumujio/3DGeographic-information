import Experience from "../Experience"
export default class AsiaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AsiaTerrainModel']
        this.model.scene.rotation.x = Math.PI / 4
        this.model.scene.scale.set(1.5,1.5,1.5)
        this.model.scene.position.x = -1.5
        this.scene.add(this.model.scene)
    }
}