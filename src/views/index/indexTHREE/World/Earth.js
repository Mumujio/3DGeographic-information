import Experience from '../Experience.js'
import * as THREE from 'three'

import { CSS2DRenderer,CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer';
export default class Earth{
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.setModel()
    }
    setModel()
    {
       
        
        this.model = this.resources.items.earthModel   
        this.scene.add(this.model.scene)
        
        
    }

    update() {
        // this.model.scene.rotation.y += -this.time.delta * 0.0001
    }
}