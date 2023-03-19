import Experience from "../Experience"
export default class AntarcticaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AntarcticaTerrainModel']
        this.model.scene.scale.set(2.5, 2.5, 2.5)
        this.model.scene.rotation.x = Math.PI / 3.5
        this.model.scene.position.x = 0.6
        this.scene.add(this.model.scene)
    }
}