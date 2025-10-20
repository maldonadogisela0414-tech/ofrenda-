import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

 //taza 
 
 var taz01 = new THREE.CylinderGeometry(3, 1.5, 7, 32 ); 
 var mattaz = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF, side :THREE.DoubleSide
 })
 var mesh02 =new THREE.Mesh(taz01,mattaz); 
 //scene.add(mesh02);
 mesh02.position.set(10,5,0);
 


var fig7 = new THREE.CircleGeometry(2.9,15);
var mat06 = new THREE.MeshBasicMaterial({
    color: 0x9ED9DB, side :THREE.DoubleSide
 }) 
var mesh07 = new THREE.Mesh(fig7,mat06);
//scene.add(mesh07);  
mesh07.position.set(10,8.55,0);
mesh07.rotation.set(-1.57,0,0);

const vaso01 = new THREE.Group(); 
vaso01.add(mesh02,mesh07); 
vaso01.position.set(x,y,z); 

return vaso01; 

}