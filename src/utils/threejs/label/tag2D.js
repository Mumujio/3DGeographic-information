// 创建css2d三维标签
import { CSS2DRenderer,CSS2DObject  } from 'three/addons/renderers/CSS2DRenderer.js';

export function tag(name) {
    // 创建div元素(作为标签)
    let div = document.createElement('div');
    div.innerHTML = name;
    div.classList.add('tag');
    // div.style.zIndex = 999
    //div元素包装为`CSS2`模型对象CSS2DObject
   
    div.style.color = 'red'
    let label = new CSS2DObject(div);

    label.position.set(0,0,0)
    // 设置HTML元素标签在three.js世界坐标中位置
    label.layers.set(0)
    return label;//返回CSS2模型标签      
}

export function labelRenderer(container) {
    let labelRenderer = new CSS2DRenderer();
    console.log(container);
    labelRenderer.setSize(window.innerWidth, container.scrollHeight);
    labelRenderer.domElement.style.position = 'absolute';
    // 相对标签原位置位置偏移大小
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.left = '0px';
    // //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    // labelRenderer.domElement.style.pointerEvents = 'none';
    // document.body.appendChild(labelRenderer.domElement);
    container.appendChild(labelRenderer.domElement);
    return labelRenderer;
}

export function tagtest(dom) {

    let label = new CSS2DObject(dom);

    label.position.set(0,0,0)
    // 设置HTML元素标签在three.js世界坐标中位置
    label.layers.set(0)
    return label;//返回CSS2模型标签      
}
  
