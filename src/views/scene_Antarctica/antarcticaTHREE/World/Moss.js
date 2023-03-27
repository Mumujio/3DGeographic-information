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
        this.model.scene.scale.set(4, 4, 4)
        this.model.scene.rotation.x = Math.PI / 6
        this.model.scene.children[1].position.x = 0.3
        this.model.scene.children[1].position.y = -0.1
        this.scene.add(this.model.scene)
    }
}