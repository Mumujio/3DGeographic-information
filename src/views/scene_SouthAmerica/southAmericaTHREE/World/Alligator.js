import Experience from "../Experience"
export default class AlligatorModel{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        console.log( this.resources);
        
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['alligatorModel']
        this.model.scene.rotation.x = Math.PI / 5
        // this.model.scene.scale.set(0.2, 0.2, 0.2)
        this.model.scene.position.x =1
        this.scene.add(this.model.scene)
    }
}