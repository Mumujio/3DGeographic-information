import Experience from "../Experience"
export default class AsiaTerrain{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setModel()
    }
    setModel() {
        this.model = this.resources.items['AsiaTerrainModel']
        this.model.scene.rotation.x = Math.PI / 6
        // this.model.scene.
        // this.model.scene.rotateY( Math.PI / 3)
        this.model.scene.rotation.y =7* Math.PI/6
        this.model.scene.scale.set(1.5,1.5,1.5)
        this.model.scene.children[0].position.x =-0.6

        this.scene.add(this.model.scene)
    }
}