import Experience from "../Experience"
export default class Panda{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['pandaModel']
        this.model.scene.scale.set(0.3, 0.3, 0.3)
        this.model.scene.position.x = 0.8
        this.scene.add(this.model.scene)
    }
}