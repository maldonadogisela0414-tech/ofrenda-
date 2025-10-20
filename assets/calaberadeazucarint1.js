import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{
//BOCA
var fig01 =new THREE.BoxGeometry (5,5,5,14,3); 
var mat01 = new THREE.MeshBasicMaterial({
    color:0xFCF0BB, side: THREE.DoubleSide
}); 
var mesh01 = new THREE.Mesh(fig01,mat01); 
//scene.add(mesh01); 
mesh01.position.set(0,5.5,0); 
mesh01.rotation.set(-.2,0,0)

//Cabeza 
var fig02 =new THREE.SphereGeometry (10,10,5,5);

var mesh02 = new THREE.Mesh(fig02,mat01); 
//scene.add(mesh02); 
mesh02.position.set(0,9,0); 
mesh02.scale.set(.5,.5,.5); 

//boca

var fig03 = new THREE.RingGeometry(6,8,10,10,10,3.14159); 
var mat02 = new THREE.MeshBasicMaterial({
    color:0x9EC5FF, side: THREE.DoubleSide
}); 
var mesh06= new THREE.Mesh(fig03,mat02)
//scene.add(mesh06);  
mesh06.position.set(-1.6,4.3,3);
mesh06.rotation.set(0,0,-.58); 
mesh06.scale.set(.1,.1,.1); 

var mesh03 = new THREE.Mesh(fig03,mat02)
//scene.add(mesh03);  
mesh03.position.set(0,4.4,3);
mesh03.rotation.set(0,0,-.58); 
mesh03.scale.set(.1,.1,.1); 

var mesh04 = new THREE.Mesh(fig03,mat02)
//scene.add(mesh04);  
mesh04.position.set(1.5,4.3,3);
mesh04.rotation.set(0,0,-.58); 
mesh04.scale.set(.1,.1,.1); 

//ojos
var fig04 =new THREE.SphereGeometry (10,10,10,10);
var mesh05 = new THREE.Mesh(fig04, mat02);
//scene.add(mesh05);
mesh05.scale.set(0.05,.025,.01);
mesh05.position.set(1.5,8,4.5);
mesh05.rotation.set(0,0,.65);


var mesh07 = new THREE.Mesh(fig04,mat02);
mesh07.scale.set(0.05,.025,.01);
mesh07.position.set(1.5,8,4.5);
mesh07.rotation.set(0,0,-.65);
//scene.add (mesh07);

var mesh08 = new THREE.Mesh(fig04, mat02);
//scene.add(mesh08);
mesh08.scale.set(0.05,.025,.01);
mesh08.position.set(-1.5,8,4.5);
mesh08.rotation.set(0,0,.65);


var mesh09 = new THREE.Mesh(fig04,mat02);
mesh09.scale.set(0.05,.025,.01);
mesh09.position.set(-1.5,8,4.5);
mesh09.rotation.set(0,0,-.65);
//scene.add (mesh09);

var mesh10 = new THREE.Mesh(fig04,mat02);
mesh10.scale.set(0.05,.025,.01);
mesh10.position.set(.4,6.5,4.5);
mesh10.rotation.set(0,0,-.65);
//scene.add (mesh10);

var mesh11 = new THREE.Mesh(fig04, mat02);
//scene.add(mesh11);
mesh11.scale.set(0.05,.025,.01);
mesh11.position.set(-.4,6.5,4.5);
mesh11.rotation.set(0,0,.65);

var Volane =new  THREE.Group();
Volane.add(mesh06,mesh03,mesh04,); 
//scene.add(Volane); 

var VOlane02 = Volane.clone(); 
VOlane02.position.set(-1.7,5,0);
VOlane02.rotation.set(0,-1.5708,0);
//scene.add(VOlane02); 

var VOlane03 = Volane.clone(); 
VOlane03.position.set(1.7,5,0);
VOlane03.rotation.set(0,1.5708,0);
//scene.add(VOlane03); 


//Flor 
var fig04 =new THREE.SphereGeometry(10,10,10,10); 
var mesh13 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh13); 
mesh13.scale.set(0.025,.025,.01);
mesh13.position.set(5,5,0);

var mesh14 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh14); 
mesh14.scale.set(0.05,.025,.01);
mesh14.position.set(4,4,0);
mesh14.rotation.set(0,0,.65);

var mesh15 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh15); 
mesh15.scale.set(0.05,.025,.01);
mesh15.position.set(6,6,0);
mesh15.rotation.set(0,0,.65);

var petalo =new  THREE.Group();
petalo.add(mesh14,mesh15,mesh13); 
//scene.add(petalo); 

var petalo02 = petalo.clone(); 
petalo02.position.set(5.15,-2,0);
petalo02.rotation.set(0,0,0.8);
//scene.add(petalo02); 

var petalo03 = petalo.clone(); 
petalo03.position.set(10.15,.2,0);
petalo03.rotation.set(0,0,1.6);
//scene.add(petalo03);

var petalo04 = petalo.clone(); 
petalo04.position.set(12,5.25,0);
petalo04.rotation.set(0,0,2.4);
//scene.add(petalo04);

//puntos

var mesh18 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh18); 
mesh18.scale.set(0.025,.025,.01);
mesh18.position.set(3,6,0);

var mesh19 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh19); 
mesh19.scale.set(0.025,.025,.01);
mesh19.position.set(7,6,0);

var mesh20 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh20); 
mesh20.scale.set(0.025,.025,.01);
mesh20.position.set(6,3,0);

var mesh21 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh21); 
mesh21.scale.set(0.025,.025,.01);
mesh21.position.set(6,7,0);

var mesh22 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh22); 
mesh22.scale.set(0.025,.025,.01);
mesh22.position.set(4,7,0);

var mesh23 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh23); 
mesh23.scale.set(0.025,.025,.01);
mesh23.position.set(3,4,0);

var mesh24 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh24); 
mesh24.scale.set(0.025,.025,.01);
mesh24.position.set(4.2,3,0);

var mesh25 = new THREE.Mesh(fig04,mat02); 
//scene.add(mesh25); 
mesh25.scale.set(0.025,.025,.01);
mesh25.position.set(7,4.2,0);

var Flor =new  THREE.Group();
Flor.add(petalo,petalo02,petalo03,petalo04,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25); 
Flor.position.set(-5,14,-5);
Flor.rotation.set(1.5708,0,0)
//scene.add(Flor); 


const Cla01 = new THREE.Group(); 
Cla01.add(mesh02,mesh01,mesh05,mesh07,mesh08,mesh09,mesh10,mesh11,Volane,VOlane02,VOlane03,Flor); 
Cla01.position.set(x,y,z); 

return Cla01; 

}