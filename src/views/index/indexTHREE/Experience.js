import * as THREE from 'three'
import Debug from '@/utils/threejs/Debug'
import Sizes from '@/utils/threejs/Sizes'
import Time from '@/utils/threejs/Time'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
// import Stats from '@/utils/threejs/Stats'
import Sign from '@/utils/threejs/Sign'
import Tween from '@/utils/threejs/Tween'
import Process from '@/utils/threejs/PostProcess.js'
import sources from './sources.js'
import Resources from '@/utils/threejs/Resources.js'
let instance = null

export default class Experience
{
    constructor(_canvas,labelDOMS)
    {
        // Singleton9
        if(instance)
        {         
            return instance
        }
        instance = this

        // Options
        this.canvas = _canvas
        this.labelDOMS = labelDOMS

        
        // Setup
        // this.stats = new Stats(this.canvas)

        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        // this.sign = new Sign()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        // this.allResources = allResources
        this.camera = new Camera()
        this.tween = new Tween(this.camera.instance, this.camera.controls)

        this.renderer = new Renderer()
        this.process = new Process(this.scene,this.camera.instance,this.renderer.instance)
        this.world = new World()
        
        // ***监听事件注意点：要设置on监听过后，被监听者再发出声音才能被捕获。如果发出声音在设置on监听之前，则不行
        // 被监听数据最好是异步或者可重复出现的，即在设置监听之后再发出声音
        // Resize event 
        this.sizes.on('resize', () =>
        {
            
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })
    }

    resize()
    {
        this.camera.resize()
        this.renderer.resize()
    }

    update()
    {
        this.camera.update()
        this.renderer.update()
        this.tween.update()
       
        // this.stats.update()
        this.process.composer.render()
        if (this.world.galaxy) {
            this.world.galaxy.update()
        }
        if (this.world.labelRaycaster) {
            this.world.labelRaycaster.update()
        }
      

        
        // this.world.earth.update()
        // this.world.line.update()
    }
    destroy()
    {
         // 清空实例
        instance = null
        
        // 关闭监听
        this.sizes.off('resize')
        this.time.off('tick')
        this.resources.off('sourceReady')
        this.resources.off('sourceOnReady')
        this.world.raycaster.off('rayClick')
        this.world.raycaster.off('sceneClick')
        // this.sign.off('signChange')
        // 删除射线检测
        this.world.raycaster.destroye()
        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    
    }

}