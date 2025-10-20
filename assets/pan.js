import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

var mat01 = new THREE.MeshBasicMaterial({
    color:0xFFE79E
, side: THREE.DoubleSide
}); 


var fig02 =new THREE.SphereGeometry (8,8,8,8,6.7,1.5); 
var mesh02 = new THREE.Mesh(fig02,mat01); 
//scene.add(mesh02); 
mesh02.position.set(0,1,10);
mesh02.scale.set(.8,.4,.8)
mesh02.rotation.set (3.14159,0,0); 

//centro pan 
var geometria05=new THREE.SphereGeometry(1.2,20,3);
var material05=new THREE.MeshLambertMaterial({
        color:0xB3600B,side:THREE.DoubleSide});
    var mesh05= new THREE.Mesh (geometria05,material05);
    //scene.add(mesh05);
mesh05.position.set(0,4,10); 
 
//huesos bajos
var geometry06 = new THREE.BoxGeometry (1.5,1,2,10,2);
var material06 = new THREE.MeshLambertMaterial({
    color:0xB3600B, side: THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(0,3.4,6);
mesh06.rotation.set(-0.2,0,0);

var mesh07 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh07);
mesh07.position.set(0,3.5,14);
mesh07.rotation.set(0.3,0,0);

var mesh08 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh08);
mesh08.position.set(4,3.1,10);
mesh08.rotation.set(1.5,.8,1.8);

var mesh09 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh09);
mesh09.position.set(-4,3.1,10);
mesh09.rotation.set(-1.5,.8,1.8);

//huesos largos
var geometry07 = new THREE.BoxGeometry (1,5,1.5,8,2);
var material07 = new THREE.MeshLambertMaterial({
    color:0xB3600B, side: THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh10);
mesh10.position.set(0.2,3.5,8);
mesh10.rotation.set(1.3,.5,0);

var mesh11 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh11);
mesh11.position.set(.2,3.5,12);
mesh11.rotation.set(-1.3,-.5,0);
 
 var mesh12 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh12);
mesh12.position.set(-2,3.5,10);
mesh12.rotation.set(-1.5,-0.3,-1.6);

var mesh13 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh13);
mesh13.position.set(2,3.5,10);
mesh13.rotation.set(1.7,-0.3,-1.5);

 const pan01 = new THREE.Group(); 
pan01.add(mesh02,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13); 
pan01.position.set(x,y,z); 

return pan01; 

}