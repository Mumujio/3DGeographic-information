import Experience from "../Experience"
export default class NorthAmericaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['NorthAmericaTerrainModel']
        this.model.scene.rotation.x = Math.PI / 3
        // this.model.scene.position.x = 2.5
        this.model.scene.children[0].position.y = -3
        this.model.scene.children[0].position.x =4.5
        this.model.scene.children[0].scale.set(2.5,2.5,2.5)
        // this.model.scene.position.y = -2
        // this.model.scene.scale.set(3,3,3)
        this.scene.add(this.model.scene)
    }
}