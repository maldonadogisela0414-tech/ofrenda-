import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

//PLato

var fig1 =new THREE.CylinderGeometry (8,3,10,10,true,3,3); 
var mat1 = new THREE.MeshBasicMaterial({
    color:0xFCC6BB, side: THREE.DoubleSide
}); 
var mesh1 = new THREE.Mesh(fig1,mat1); 
//scene.add(mesh1); 
mesh1.position.set(0,0,0);


var fig02 = new THREE.CircleGeometry(7.6,10); 
var mat02 = new THREE.MeshBasicMaterial({
    color:0xEB5C14 ,  side:THREE.DoubleSide, 
});
var mesh02 = new THREE.Mesh(fig02,mat02);
//scene.add(mesh02);  
mesh02.position.set(0,4.6,0)
mesh02.rotation.set (1.5708,0,-1.4); 

//granos 
var fig03 =new THREE.SphereGeometry (15,15,15,15); 
var mat03 = new THREE.MeshBasicMaterial({
    color:0xFCF6BB, side: THREE.DoubleSide
}); 
var mesh03 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh03); 
mesh03.position.set(0,4.6,5.2); 
mesh03.rotation.set (0,0.5,0); 
mesh03.scale.set(0.03,0.02,0.04)

var mesh04 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh04); 
mesh04.position.set(1,4.6,4.5); 
mesh04.rotation.set (0,0.5,0); 
mesh04.scale.set(0.03,0.02,0.04)

var mesh05 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh05); 
mesh05.position.set(2,4.6,4.2); 
mesh05.rotation.set (0,0.5,0); 
mesh05.scale.set(0.03,0.02,0.04)

var mesh06 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh06); 
mesh06.position.set(3,4.6,3.7); 
mesh06.rotation.set (0,0.5,0); 
mesh06.scale.set(0.03,0.02,0.04)

var mesh07 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh07); 
mesh07.position.set(4,4.6,2.8); 
mesh07.rotation.set (0,0.5,0); 
mesh07.scale.set(0.03,0.02,0.04)

var mesh08 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh08); 
mesh08.position.set(5,4.6,1); 
mesh08.rotation.set (0,0.5,0); 
mesh08.scale.set(0.03,0.02,0.04)

var granos =new  THREE.Group();
granos.add(mesh05,mesh04,mesh06,mesh07,mesh08,mesh03); 
//scene.add(granos); 

var granos2 = granos.clone(); 
granos2.position.set(0,0,0); 
granos2.rotation.set(0,1.785,0)
//scene.add(granos2); 

var granos3 = granos.clone(); 
granos3.position.set(0,0,0); 
granos3.rotation.set(0,-1.62,0)
//scene.add(granos3); 

var granos4 = granos.clone(); 
granos4.position.set(0,0,0); 
granos4.rotation.set(0,-2.9,0)
//scene.add(granos4); 

var granos5 = granos.clone(); 
granos5.position.set(.2,0,-1); 
granos5.scale.set(1,1,1)
//scene.add(granos5); 

var granos6 = granos.clone(); 
granos6.position.set(-1,.5,-1); 
granos6.scale.set(.9,.9,.9)
//scene.add(granos6); 

var granos7 = granos.clone(); 
granos7.position.set(-1.5,.5,-1.5); 
granos7.scale.set(.9,.9,.9)
//scene.add(granos7); 

var granos8 = granos.clone(); 
granos8.position.set(-2.5,0,-2.5); 
granos8.scale.set(1,1,1)
//scene.add(granos8);  

var granos9 = granos.clone(); 
granos9.position.set(-3.5,0,-3.7); 
granos9.scale.set(1,1,1)
//scene.add(granos9); 

var granos10 = granos.clone(); 
granos10.position.set(-4.5,0,-5.5); 
granos10.scale.set(1,1,1)
//scene.add(granos10); 

const plat02 = new THREE.Group(); 
plat02.add(mesh02,mesh1,granos,granos2,granos3,granos4,granos5,granos6,granos7,granos8,granos9,granos10); 
plat02.position.set(x,y,z); 

return plat02; 

}