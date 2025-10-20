import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

 //Cubo 
var fig3=new THREE.BoxGeometry(4.5,6,4.5,1);
var mat04= new THREE.MeshLambertMaterial(
    {
        color:0xFEEBE7, side:THREE.DoubleSide
    }
); 
var mesh3= new THREE.Mesh(fig3, mat04); 
//scene.add(mesh3); 
mesh3.position.set(0,5,0); 

//fuego
var fig4 =new THREE.TorusKnotGeometry (1.8,0.8,40,40);
var mat03= new THREE.MeshLambertMaterial(
    {
        color:0xF4320B, side:THREE.DoubleSide
    }
); 
var fig4 =new THREE.TorusKnotGeometry (1.8,0.8,40,40);
var mesh4= new THREE.Mesh(fig4, mat03); 
//scene.add(mesh4); 
mesh4.position.set(0,9.5,0); 
mesh4.scale.set(.17,.3,.17);

var fig5 =new THREE.CylinderGeometry (4,4,4,7,true,5,5); 
var mesh12 = new THREE.Mesh(fig5,mat03); 
//scene.add(mesh12); 
mesh12.position.set(0,3,0); 

const vela01 = new THREE.Group(); 
vela01.add(mesh3,mesh4,mesh12); 
vela01.position.set(x,y,z); 

return vela01; 

}