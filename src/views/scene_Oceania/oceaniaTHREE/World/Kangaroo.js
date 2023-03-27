import Experience from "../Experience"
export default class Kangaroo{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['kangarooModel']
        this.model.scene.rotation.y =- Math.PI / 5
        this.model.scene.position.x = 1
        this.model.scene.children[0].position.y = -0.5
        this.model.scene.scale.set(1.2,1.2,1.2)
        this.scene.add(this.model.scene)
    }
}