import * as THREE from 'three'

import Debug from '@/utils/threejs/Debug'
import Sizes from '@/utils/threejs/Sizes'
import Time from '@/utils/threejs/Time'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Scroll from '@/utils/threejs/Scroll'
import MouseMove from '@/utils/threejs/MouseMove.js'
import Resources from '@/utils/threejs/Resources.js'
import sources from './sources'
let instance = null

export default class Experience
{    
    constructor(_canvas,allResources)
    {
        // Singleton
        if(instance)
        {
            return instance
        }
        instance = this
        
        // Global access
        window.experience = this

        // Options
        this.canvas = _canvas

        // Setup
        this.sizes = new Sizes()
        this.scroll = new Scroll()
        this.debug = new Debug()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer() 
        this.resources = new Resources(sources)
        this.mouseMove = new MouseMove(this.camera.instance,this.scene,this.time)
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
        // this.camera.update()
        this.renderer.update()
    }
    destroy()
    {   
        // 清空实例（清空实例的创建标志）
        instance =null
        
        this.sizes.off('resize')
        this.time.off('tick')
        this.scroll.off('scroll')
        this.resources.off('sourceReady')
        this.resources.off('sourceOnReady')
        // this.sign.off('signChange')
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
        
        // this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}