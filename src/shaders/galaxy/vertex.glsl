void main(){
            vec4 modelPositon = modelMatrix * vec4(position,1.0);
            vec4 viewPosition = modelViewMatrix * modelPositon;
            vec4 projectedPosition = projectionMatrix * viewPosition;
            gl_Position = projectedPosition;
            gl_PointSize = 2.0;
        }
      `