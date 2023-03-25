import Experience from "../Experience"
export default class Ginkgo{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['ginkgoModel']
        this.model.scene.rotation.x = Math.PI/5
        this.model.scene.scale.set(0.7, 0.7, 0.7)
        this.model.scene.position.x = 0.6
        this.scene.add(this.model.scene)
    }
}