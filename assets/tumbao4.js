import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

// Espacio para colocar los objetos
//tumba 

var fig01 =new THREE.BoxGeometry (18,4,6,3,5); 
var mat01 = new THREE.MeshBasicMaterial({
    color:0xB5B5B5, side: THREE.DoubleSide
}); 
var mesh01 = new THREE.Mesh(fig01,mat01); 
//scene.add(mesh01); 
mesh01.position.set(0,17,0); 

var fig02 =new THREE.BoxGeometry (2,8,.5,3,5); 
var mat02 = new THREE.MeshBasicMaterial({
    color:0x000000, side: THREE.DoubleSide
}); 
var mesh02 = new THREE.Mesh(fig02,mat02); 
//scene.add(mesh02); 
mesh02.position.set(0,9,2); 

//cruz 
var mesh03 = new THREE.Mesh(fig02,mat02); 
//scene.add(mesh03); 
mesh03.position.set(0,10,2); 
mesh03.rotation.set (0,0,1.5708);

var fig03 =new THREE.BoxGeometry (16,13,3,3,5); 
var mesh04 = new THREE.Mesh(fig03,mat01); 
//scene.add(mesh04); 
mesh04.position.set(0,8.5,0); 

var fig04 =new THREE.BoxGeometry (20,6,6,3,5); 
var mesh05 = new THREE.Mesh(fig04,mat01); 
//scene.add(mesh05); 
mesh05.position.set(0,0,0); 

const tum04 = new THREE.Group(); 
tum04.add(mesh01,mesh02,mesh03,mesh04,mesh05); 
tum04.position.set(x,y,z); 

return tum04; 

}