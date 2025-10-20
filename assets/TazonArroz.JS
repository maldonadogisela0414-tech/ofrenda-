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
    color:0x440E03 ,  side:THREE.DoubleSide, 
});
var mesh02 = new THREE.Mesh(fig02,mat02);
//scene.add(mesh02);  
mesh02.position.set(0,4.6,0)
mesh02.rotation.set (1.5708,0,-1.4); 

//Carne 
var fig03 =new THREE.SphereGeometry (15,15,15,15); 
var mat03 = new THREE.MeshBasicMaterial({
    color:0xFCF6BB, side: THREE.DoubleSide
}); 
var mesh03 = new THREE.Mesh(fig03,mat03); 
//scene.add(mesh03); 
mesh03.position.set(-1.5,5,-3); 
mesh03.rotation.set (0,0.5,0); 
mesh03.scale.set(0.09,0.05,0.15)

 var fig04 = new THREE.BoxGeometry(2,8,3,3,1); 
 var mat04 =new THREE.MeshLambertMaterial(
    {
        color:0xFCF2BB, side:THREE.DoubleSide
    }
 ); 
 var mesh04 = new THREE.Mesh(fig04, mat04); 
 //scene.add(mesh04); 
 mesh04.position.set(0,4.5,-1);
 mesh04.rotation.set(1.5708,0,-0.7);
 mesh04.scale.set(.5,1,.5);

var fig05 =new THREE.SphereGeometry (15,15,15,15); 
var mat05 = new THREE.MeshBasicMaterial({
    color:0xFCF6BB, side: THREE.DoubleSide
}); 
var mesh05 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh05); 
mesh05.position.set(0,4.6,5); 
mesh05.rotation.set (0,0.5,0); 
mesh05.scale.set(0.01,0.01,0.02)

var mesh06 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh06); 
mesh06.position.set(0.5,4.6,6); 
mesh06.rotation.set (0,-0.5,0); 
mesh06.scale.set(0.01,0.01,0.02)

var mesh07 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh07); 
mesh07.position.set(1,4.6,5); 
mesh07.rotation.set (0,0.5,0); 
mesh07.scale.set(0.01,0.01,0.02)

var mesh08 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh08); 
mesh08.position.set(1.5,4.6,6); 
mesh08.rotation.set (0,0.5,0); 
mesh08.scale.set(0.01,0.01,0.02)

var mesh09 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh09); 
mesh09.position.set(2,4.6,5); 
mesh09.rotation.set (0,-0.5,0); 
mesh09.scale.set(0.01,0.01,0.02)

var mesh10 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh10); 
mesh10.position.set(2.5,4.6,6); 
mesh10.rotation.set (0,0.5,0); 
mesh10.scale.set(0.01,0.01,0.02)

var mesh11 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh11); 
mesh11.position.set(3,4.6,5); 
mesh11.rotation.set (0,0.5,0); 
mesh11.scale.set(0.01,0.01,0.02)

var mesh12 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh12); 
mesh12.position.set(3,4.6,6); 
mesh12.rotation.set (0,-0.5,0); 
mesh12.scale.set(0.01,0.01,0.02)

var mesh13 = new THREE.Mesh(fig05,mat05); 
//scene.add(mesh13); 
mesh13.position.set(4,4.6,5); 
mesh13.rotation.set (0,-0.5,0); 
mesh13.scale.set(0.01,0.01,0.02)

var Arroz =new  THREE.Group();
Arroz.add(mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13); 
//scene.add(Arroz); 

var Arroz2 = Arroz.clone(); 
Arroz2.position.set(0,0,0); 
Arroz2.rotation.set(0,0.785,0)
//scene.add(Arroz2); 

var Arroz3 = Arroz.clone(); 
Arroz3.position.set(0,0,0); 
Arroz3.rotation.set(0,-0.785,0)
//scene.add(Arroz3); 

var Arroz4 = Arroz.clone(); 
Arroz4.position.set(0,0,0);
Arroz4.rotation.set(0,-0.5,0);
//scene.add(Arroz4); 


var Arroz5 = Arroz.clone(); 
Arroz5.position.set(0,0,0);
Arroz5.rotation.set(0,-1.5,0); 
//scene.add(Arroz5);

const poll01 = new THREE.Group(); 
poll01.add(mesh1,mat02,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh10,mesh09,mesh11,mesh12,mesh13,Arroz,Arroz2,Arroz3,Arroz4,Arroz5); 
poll01.position.set(x,y,z); 

return poll01; 

}