import Experience from "../Experience"
export default class Penguin{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['penguinModel']
        this.scene.add(this.model.scene)
        // this.model.scene.scale.set(2.5, 2.5, 2.5)
    }
}