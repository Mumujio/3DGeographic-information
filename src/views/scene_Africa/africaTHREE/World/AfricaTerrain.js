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
        this.model.scene.rotation.x = Math.PI / 3
        this.model.scene.children[0].y = 0.5
       this.model.scene.scale.set(3.5,3.5,3.5)
        this.scene.add(this.model.scene)
    }
}