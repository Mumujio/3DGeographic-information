import Experience from "../Experience"
export default class Moss{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['mossModel']
        // this.model.scene.position.y = 1
        this.scene.add(this.model.scene)
    }
}