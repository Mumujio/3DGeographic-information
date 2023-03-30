import Experience from "../Experience"
export default class AlligatorModel{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
     
        
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['alligatorModel']
        this.model.scene.rotation.x = Math.PI / 6
        this.model.scene.rotation.y = Math.PI / 6
        // this.model.scene.scale.set(0.2, 0.2, 0.2)
        this.model.scene.position.x = 0.8
        this.model.scene.position.z =0
        
        this.scene.add(this.model.scene)
    }
}