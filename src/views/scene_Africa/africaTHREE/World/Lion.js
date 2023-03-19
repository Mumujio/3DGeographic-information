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
        this.model.scene.scale.set(0.7, 0.7, 0.7)
        this.model.scene.position.set(0.5, 1, 0)
       

        this.scene.add(this.model.scene)
    }
}