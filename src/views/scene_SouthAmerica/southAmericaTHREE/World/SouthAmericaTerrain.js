import Experience from "../Experience"
export default class SouthAmericaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['SouthAmericaTerrainModel']
        this.model.scene.rotation.x = Math.PI /3
        this.model.scene.children[0].scale.set(1.3, 1.3, 1.3)
        this.model.scene.children[0].position.x = 1
        this.model.scene.children[0].position.y = 0.4
        // this.model.scene.position.y = 20
        this.scene.add(this.model.scene)
    }
}