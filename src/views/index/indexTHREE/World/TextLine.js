import * as THREE from 'three'
import gsap from 'gsap'
import Experience from '../Experience'


export default class TextLine {
    constructor() {
        this.experience = new Experience
        this.resources = this.experience.resources
        const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3( -0.09674361423596324, 0.6455437531745175
                , 0.7787219633098905),
            new THREE.Vector3( 1, 1, 1.5),
            new THREE.Vector3( 0.5051029395319471, -0.21456403128865117, 0.8530534229008089 )
        );
        const geometry = new THREE.TubeGeometry(curve, 100, 0.1, 2, false);
        
        this.flyLineTexture  = this.resources.items['flyLineTexture']
        this.flyLineTexture.wrapS = THREE.RepeatWrapping;
        this.flyLineTexture.wrapT = THREE.MirroredRepeatWrapping
        this.flyLineTexture.repeat.set(1,2)
        const material = new THREE.MeshBasicMaterial({
            map:  this.flyLineTexture,
            transparent:true
        })
        
        
        // Create the final object to add to the scene
        const curveObject = new THREE.Mesh(geometry, material);
        this.scene = this.experience.scene.add(curveObject)
        
        gsap.to(this.flyLineTexture.offset, {
            x: 1,
            duration: 10,
            repeat: 999,
            ease:'none'
        })
    }
}