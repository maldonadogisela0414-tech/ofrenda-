import * as THREE from "../js/three.module.js"; 

export default function EX02({x,y,z})
{
 //taza 
 
 var taz01 = new THREE.CylinderGeometry(3, 3, 10, 32 ); 
 var mattaz = new THREE.MeshBasicMaterial({
    color: 0x9C6507, side :THREE.DoubleSide
 })
 var mesh02 =new THREE.Mesh(taz01,mattaz); 
 //scene.add(mesh02);
 mesh02.position.set(10,5,0);
 
var hasa01 = new THREE.TorusGeometry(4,.5,5,12,4); 
var mesh04 = new THREE.Mesh(hasa01,mattaz);
//scene.add(mesh04); 
mesh04.position.set(13,5,0);
mesh04.rotation.set(0,0,-1.7);

var fig7 = new THREE.CircleGeometry(2.9,15);
var mat06 = new THREE.MeshBasicMaterial({
    color: 0x9C6579, side :THREE.DoubleSide
 }) 
var mesh07 = new THREE.Mesh(fig7,mat06);
//scene.add(mesh07);  
mesh07.position.set(10,10.05,0);
mesh07.rotation.set(-1.57,0,0);

const bc01 = new THREE.Group(); 
bc01.add(mesh02,mesh04,mesh07); 
bc01.position.set(x,y,z); 

return bc01; 

}