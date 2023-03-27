import Experience from "../Experience"
export default class Koala{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['koalaModel']
        this.model.scene.rotation.y =Math.PI / 10
        this.model.scene.position.x = 1
        this.model.scene.scale.set(2, 2, 2)
        this.model.scene.children[0].position.y = -0.2
        this.scene.add(this.model.scene)
    }
}