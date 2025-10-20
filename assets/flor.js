import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

// copo1 
 var geometry02 =new THREE.BoxGeometry (10,10,10,10); 
var material02 = new THREE.MeshBasicMaterial({
    color:0xF08730, side: THREE.DoubleSide
}); 
var mesh02 = new THREE.Mesh(geometry02,material02);  
mesh02.scale.set(.05,.6,.1)
 mesh02.position.set(0,0,0);
// scene.add(mesh02); 

 var mesh03 = new THREE. Mesh (geometry02, material02);
mesh03.position.set(0,0,0);
mesh03.rotation.set(0,0,0.785)
//scene.add(mesh03);

var mesh04 = new THREE.Mesh (geometry02, material02);
mesh04.position.set(0,0,0);
mesh04.rotation.set (0,0, 1.57)
//scene.add(mesh04);

var mesh05 = new THREE.Mesh (geometry02, material02); 
mesh05.position.set(0,0,0); 
mesh05.rotation.set (0,0,2.355) 
//scene.add(mesh05);



var copo1 =new  THREE.Group();
    copo1.add(mesh02,mesh03,mesh04,mesh05)

var copo2 = copo1.clone(); 
//copo2. position.set(0,5,0); 
copo2.rotation.set(0,0.785,0)
//scene.add(copo2); 

var copo3 = copo1.clone(); 
//copo3. position.set(0,5,0); 
copo3.rotation.set(0,1.57,0)
//scene.add(copo3); 

var copo4 = copo1.clone(); 
//copo4. position.set(0,5,0); 
copo4.rotation.set(0,2.355,0)



//Hacer un grupo para copogrande1 
 var cop1 = new THREE.Group()
 cop1.add(copo1,copo2,copo3,copo4);
 cop1.position.set(-15,5,0);
 //scene.add(cop1); 

 //palo
  var fig04 =new THREE.CylinderGeometry (3,3,10,10,true,5,3.5); 
var mat03 = new THREE.MeshBasicMaterial({
    color:0x2D733A, side: THREE.DoubleSide
}); 
var mesh13 = new THREE.Mesh(fig04,mat03); 
//scene.add(mesh13); 
mesh13.scale.set(.1,.5,.1)
mesh13.position.set(-15,2.5,0);

 const FLor01 = new THREE.Group(); 
FLor01.add(cop1,mesh13); 
FLor01.position.set(x,y,z); 

return FLor01; 

}