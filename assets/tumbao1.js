import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

var fig01 =new THREE.BoxGeometry (18,2,6,3,5); 
var mat01 = new THREE.MeshBasicMaterial({
    color:0xB5B5B5, side: THREE.DoubleSide
}); 
var mesh01 = new THREE.Mesh(fig01,mat01); 
//scene.add(mesh01); 
mesh01.position.set(0,1,0); 

var fig02 =new THREE.SphereGeometry (20,20,20,20,6.7,1.5); 
var mesh02 = new THREE.Mesh(fig02,mat01); 
//scene.add(mesh02); 
mesh02.position.set(0,3,0);
mesh02.scale.set(.4,.7,.1)
mesh02.rotation.set (3.14159,0,0); 

var fig02 =new THREE.BoxGeometry (2,8,.5,3,5); 
var mat02 = new THREE.MeshBasicMaterial({
    color:0x000000, side: THREE.DoubleSide
}); 
var mesh03 = new THREE.Mesh(fig02,mat02); 
//scene.add(mesh03); 
mesh03.position.set(0,9,2); 

var mesh04 = new THREE.Mesh(fig02,mat02); 
//scene.add(mesh04); 
mesh04.position.set(0,10,2); 
mesh04.rotation.set (0,0,1.5708);

const tum01 = new THREE.Group(); 
tum01.add(mesh01,mesh02,mesh03,mesh04); 
tum01.position.set(x,y,z); 

return tum01; 

}