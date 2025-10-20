import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{
 //taza 
 
 var taz01 = new THREE.CylinderGeometry(1.5, 1.5, 9, 32 ); 
 var mattaz = new THREE.MeshBasicMaterial({
    color: 0xECE5CB, side :THREE.DoubleSide
 })
 var mesh02 =new THREE.Mesh(taz01,mattaz); 
 //scene.add(mesh02);
 mesh02.position.set(10,4,0);
 


var fig7 = new THREE.CircleGeometry(1,15);
var mat06 = new THREE.MeshBasicMaterial({
    color: 0xECE5CB, side :THREE.DoubleSide
 }) 
var mesh07 = new THREE.Mesh(fig7,mat06);
//scene.add(mesh07);  
mesh07.position.set(10,8.55,0);
mesh07.rotation.set(-1.57,0,0);

var fig4 =new THREE.TorusKnotGeometry (1.8,0.8,40,40);
var mat03= new THREE.MeshLambertMaterial(
    {
        color:0xF4320B, side:THREE.DoubleSide
    }
); 
var fig4 =new THREE.TorusKnotGeometry (1.8,0.8,40,40);
var mesh4= new THREE.Mesh(fig4, mat03); 
//scene.add(mesh4); 
mesh4.position.set(10,9,0); 
mesh4.scale.set(.2,.2,.2)

const vela02 = new THREE.Group(); 
vela02.add(mesh02,mesh4,mesh07); 
vela02.position.set(x,y,z); 

return vela02; 

}