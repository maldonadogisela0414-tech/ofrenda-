import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{

// Espacio para colocar los objetos
//tumba 

var mat01 = new THREE.MeshBasicMaterial({
    color:0xFFE79E
, side: THREE.DoubleSide
}); 


var fig02 =new THREE.SphereGeometry (8,8,8,8,6.7,1.5); 
var mesh02 = new THREE.Mesh(fig02,mat01); 
scene.add(mesh02); 
//mesh02.position.set(0,1,0);
mesh02.scale.set(.8,.4,.8)
mesh02.rotation.set (3.14159,0,0); 

var fig02 =new THREE.BoxGeometry (2,8,.5,3,5); 
var mat03 = new THREE.MeshBasicMaterial({
    color:0x9E7C33, side: THREE.DoubleSide
}); 
var mesh03 = new THREE.Mesh(fig02,mat03); 
//scene.add(mesh03); 
mesh03.position.set(0,7,0); 

var mesh04 = new THREE.Mesh(fig02,mat03); 
//scene.add(mesh04); 
mesh04.position.set(0,8,0); 
mesh04.rotation.set (0,0,1.5708);
mesh04.scale.set(1,.7,1)

//Flor 
var mat02 = new THREE.MeshBasicMaterial({
    color:0xC752BF, side: THREE.DoubleSide
}); 
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
Flor.position.set(-2.5,5.5,.5);
Flor.scale.set(.5,.5,.5)
Flor.rotation.set(0,0,0)
//scene.add(Flor); 



 var geometry02 =new THREE.BoxGeometry (10,10,10,10); 
var material02 = new THREE.MeshBasicMaterial({
    color:0xF08730, side: THREE.DoubleSide
}); 
var mesh26 = new THREE.Mesh(geometry02,material02);  
mesh26.scale.set(.05,.6,.1)
 mesh26.position.set(0,0,0); 
// scene.add(mesh02); 

 var mesh27 = new THREE. Mesh (geometry02, material02);
mesh27.position.set(0,0,0);
mesh27.rotation.set(0,0,0.785)
//scene.add(mesh03);

var mesh28 = new THREE.Mesh (geometry02, material02);
mesh28.position.set(0,0,0);
mesh28.rotation.set (0,0, 1.57)
//scene.add(mesh04);

var mesh29 = new THREE.Mesh (geometry02, material02); 
mesh29.position.set(0,0,0); 
mesh29.rotation.set (0,0,2.355) 
//scene.add(mesh05);



var copo1 =new  THREE.Group();
    copo1.add(mesh26,mesh27,mesh28,mesh29)

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
 cop1.position.set(-.5,11,0);
 cop1.scale.set(.1,.1,.1)
 //scene.add(cop1); 

 var cop2 = cop1.clone(); 
cop2.position.set(.5,11,0); 
//scene.add(cop2);

 var cop3 = cop1.clone(); 
cop3.position.set(1,10,0); 
//scene.add(cop3);
 
 var cop04 = cop1.clone(); 
cop04.position.set(-1,10,0); 
//scene.add(cop04);

 var cop05 = cop1.clone(); 
cop05.position.set(1.5,7,0); 
//scene.add(cop05);

 var cop06 = cop1.clone(); 
cop06.position.set(-1.5,7,0); 
//scene.add(cop06);

var cop07 = cop1.clone(); 
cop07.position.set(1,5.5,0); 
//scene.add(cop07);

var cop08 = cop1.clone(); 
cop08.position.set(-1,5.5,0); 
//scene.add(cop08);

var cop09 = cop1.clone(); 
cop09.position.set(-1,4,0); 
//scene.add(cop09);

var cop10 = cop1.clone(); 
cop10.position.set(1,4,0); 
//scene.add(cop10);


const Cruz01 = new THREE.Group(); 
Cruz01.add(cop04,cop05,cop06,cop07,cop08,cop09,cop1,cop10,cop2,cop3,Volane,VOlane02,VOlane03,Flor,mesh02,mesh03,mesh04); 
Cruz01.position.set(x,y,z); 

return Cruz01; 

}