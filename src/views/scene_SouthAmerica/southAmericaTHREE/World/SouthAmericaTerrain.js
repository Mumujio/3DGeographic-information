import Experience from "../Experience"
export default class SouthAmericaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['SouthAmericaTerrainModel']
        this.model.scene.rotation.x = Math.PI /4
        this.model.scene.scale.set(2.5, 2.5, 2.5)
        this.model.scene.position.x = 2.5
    
        // this.model.scene.position.y = 20
        this.scene.add(this.model.scene)
    }
}