import * as THREE from "../js/three.module.js"; 

export default function EX01({x,y,z})
{



 //porta retratos 
 
var geo1 = new THREE.BoxGeometry(5,5,.5,10); 
var texture = new THREE.TextureLoader().load("./assets/PR04.jpg")
var material01 =new THREE.MeshLambertMaterial(
    {
        map:texture
    }
 ); 

var mesh02 = new THREE.Mesh (geo1,material01); 
//scene.add(mesh02); 
mesh02.position.set(4.55,5,0);

//marco

var geo02 = new THREE.BoxGeometry(1,7,1,1,2)
var txt01 = new THREE.MeshBasicMaterial({
    color: 0x000000 , side:THREE.DoubleSide

})
var mesh03 = new THREE.Mesh (geo02,txt01); 
//scene.add(mesh03); 
mesh03.position.set(2,5,0);

var geo03 = new THREE.BoxGeometry(1,7,1,1,2)
var mesh04 = new THREE.Mesh (geo03,txt01); 
//scene.add(mesh04); 
mesh04.position.set(7,5,0);

var geo04 = new THREE.BoxGeometry(1,5,1,1,2)
var mesh05 = new THREE.Mesh (geo04,txt01); 
//scene.add(mesh05); 
mesh05.position.set(4.5,2,0);
mesh05.rotation.set(0,0,-1.57);

var geo05 = new THREE.BoxGeometry(1,5,1,1,2)
var mesh06 = new THREE.Mesh (geo05,txt01); 
//scene.add(mesh06); 
mesh06.position.set(4.5,8,0);
mesh06.rotation.set(0,0,-1.57);

var geo06 = new THREE.BoxGeometry(.5,5,.5,1,2)
var mesh07 = new THREE.Mesh (geo06,txt01); 
//scene.add(mesh07); 
mesh07.position.set(4.5,3.5,-2);
mesh07.rotation.set(.8,0,0);

const RPedro04 = new THREE.Group(); 
RPedro04.add(mesh03,mesh04,mesh02,mesh05,mesh06,mesh07); 
RPedro04.position.set(x,y,z); 

return RPedro04; 

}