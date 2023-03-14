import Experience from "../Experience"
export default class Lion{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['lionModel']
        this.scene.add(this.model.scene)
    }
}