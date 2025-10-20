import * as THREE from "../js/three.module.js"; 
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function EX01({x,y,z})
{

//materiales
var material = new THREE.MeshLambertMaterial (
    {color:0x101710, side: THREE.DoubleSide});//color cabeza 
var material1 = new THREE.MeshLambertMaterial (
    {color:0xFFFFFF, side: THREE.DoubleSide});//color blanco
var material2 = new THREE.MeshLambertMaterial (
    {color:0xD60909, side: THREE.DoubleSide});//color rojo
var material3 = new THREE.MeshLambertMaterial (
    {color:0x000000, side: THREE.DoubleSide});//color negro   
var material4 = new THREE.MeshLambertMaterial (
    {color:0x4EE329, side: THREE.DoubleSide});//color verde fosfo     
var material5 = new THREE.MeshLambertMaterial (
    {color:0x210336, side: THREE.DoubleSide});//color morado
var material6 = new THREE.MeshLambertMaterial (
    {color:0x35B5B5, side: THREE.DoubleSide});//color verdecito



// cabeza🫥
var geo = new RoundedBoxGeometry(4.4,8,4,15,.8);
var mesh = new THREE.Mesh(geo,material);
//scene.add (mesh);
mesh.position.set(0,37,0);
//mesh.rotation.set(0,0,0.785);
  //ojos👀
var geo1 = new RoundedBoxGeometry(1,2,1,15,.8);
var mesh1 = new THREE.Mesh(geo1,material4);
//scene.add (mesh1);
mesh1.position.set(0.7,37,1.9);
var geo2 = new RoundedBoxGeometry(1,2,1,15,.8);
var mesh2 = new THREE.Mesh(geo2,material4);
//scene.add (mesh2);
mesh2.position.set(-0.7,37,1.9);

//iris ojo
var geo3 = new THREE.SphereGeometry (5,15,10);
var mesh3 = new THREE.Mesh(geo3,material2);
//scene.add (mesh3);
mesh3.position.set(0,16,0);
var geo4 = new THREE.ConeGeometry (2,7.5,7.5,4,5,3.14);
var mesh4 = new THREE.Mesh(geo4,material2);
//scene.add (mesh4);
mesh4.rotation.set(0,0,3.14);
mesh4.position.set(1.6,9,1.4);
var mesh5 = new THREE.Mesh(geo4,material2);
//scene.add (mesh5);
mesh5.rotation.set(0,0,3.14);
mesh5.position.set(0,9.5,2);
var mesh6 = new THREE.Mesh(geo4,material2);
//scene.add (mesh6);
mesh6.rotation.set(0,0,3.14);
mesh6.position.set(-1.6,9,1.4);
var geo7 = new THREE.SphereGeometry (2,15,10);
var mesh7 = new THREE.Mesh(geo7,material3);
//scene.add (mesh7);
mesh7.position.set(-2,16,4);
var mesh8 = new THREE.Mesh(geo7,material3);
//scene.add (mesh8);
mesh8.position.set(2,16,4);

var fig1= new THREE.Group();
fig1.add(mesh3,mesh4,mesh5,mesh6,mesh7,mesh8);
//scene.add(fig1);
fig1.position.set(0.7,36,2.3);
fig1.scale.set(0.06,0.06,0.06);
var fig2 = fig1.clone();
//scene.add(fig2);
fig2.position.set(-0.7,36,2.3);

var geo8 = new THREE.ConeGeometry (0.5,1.5,10);
var mesh8 = new THREE.Mesh(geo8,material4);
//scene.add (mesh8);
mesh8.position.set(0,36,2);

var geo9 = new RoundedBoxGeometry(1,1,1,15,.8);
var mesh9 = new THREE.Mesh(geo1,material);
//scene.add (mesh9);
mesh9.position.set(0.7,37.6,2);
mesh9.rotation.set(0,0,0.785);
var geo10 = new RoundedBoxGeometry(1,2,1,15,.8);
var mesh10 = new THREE.Mesh(geo2,material);
//scene.add (mesh10);
mesh10.position.set(-0.7,37.6,2);
mesh10.rotation.set(0,0,2.355);

var geo11 = new RoundedBoxGeometry(0.5,1.1,0.5,15,.8);
var mesh11 = new THREE.Mesh(geo11,material4);
//scene.add (mesh11);
mesh11.position.set(0,34.2,1.9);
var mesh12 = new THREE.Mesh(geo11,material4);
//scene.add (mesh12);
mesh12.position.set(0.9,34.4,1.9);
mesh12.rotation.set(0,0,0.710);
var mesh13 = new THREE.Mesh(geo11,material4);
//scene.add (mesh13);
mesh13.position.set(-0.9,34.4,1.9);
mesh13.rotation.set(0,0,2.3);
var geo12= new THREE.TorusGeometry (1.5,0.3,5,7,3.14);
var mesh14 = new THREE.Mesh(geo12,material4);
//scene.add (mesh14);
mesh14.position.set(0,35.5,1.9);
mesh14.rotation.set(0,0,3.14);

//cuello
var geo13 = new RoundedBoxGeometry(3,4,3,15,.8);
var mesh15 = new THREE.Mesh(geo13,material4);
//scene.add (mesh15);
mesh15.position.set(0,33,0);

//torso
var geo14 = new THREE.ConeGeometry (4,8,20);
var mesh16 = new THREE.Mesh(geo14,material);
//scene.add (mesh16);
mesh16.position.set(0,27.5,0);
mesh16.rotation.set(0,0,3.14);
//cintura
var mesh17 = new THREE.Mesh(geo13,material);
//scene.add (mesh17);
mesh17.position.set(0,25.5,0);
//falda
var geo15 = new THREE.ConeGeometry (6,15,20);
var mesh18 = new THREE.Mesh(geo15,material);
//scene.add (mesh18);
mesh18.position.set(0,20,0);
var geo16 = new THREE.ConeGeometry (7,15,20);
var mesh19 = new THREE.Mesh(geo16,material);
//scene.add (mesh19);
mesh19.position.set(0,14,0);
var geo17 = new THREE.ConeGeometry (9,15,20);
var mesh20 = new THREE.Mesh(geo17,material);
//scene.add (mesh20);
mesh20.position.set(0,8,0);
var geo18 = new THREE.ConeGeometry (3,4,20);
var mesh21 = new THREE.Mesh(geo18,material5);
//scene.add (mesh21);
mesh21.position.set(0,24,0);

//hombreras
var geo19= new THREE.TorusGeometry (2,2,8,7,3.14);
var mesh22 = new THREE.Mesh(geo19,material);
//scene.add (mesh22);
mesh22.position.set(-3,28.5,0);
var mesh23 = new THREE.Mesh(geo19,material);
//scene.add (mesh23);
mesh23.position.set(3,28.5,0);

//mangas
var geo20 = new THREE.ConeGeometry (1,2,20);
var mesh24 = new THREE.Mesh(geo20,material6);
//scene.add (mesh24);
mesh24.position.set(0,1,0);
mesh24.rotation.set(0,0,3.14);
var geo21 = new THREE.ConeGeometry (1,2,20);
var mesh25 = new THREE.Mesh(geo21,material6);
//scene.add (mesh25);
mesh25.position.set(0,1.5,0);
mesh25.rotation.set(0,0,3.14);
var fig3= new THREE.Group();
fig3.add(mesh24,mesh25);
//scene.add(fig3);
fig3.position.set(6,20,0);
fig3.scale.set(1.5,2,1.5);
var fig4 = fig3.clone();
//scene.add(fig4);
fig4.position.set(-6,20,0);

//huesos
var geo22 = new THREE.SphereGeometry (1,30,20);
var mesh26 = new THREE.Mesh(geo22,material6);
//scene.add (mesh26);
mesh26.position.set(-3,1,-1);
var mesh27 = new THREE.Mesh(geo22,material6);
//scene.add (mesh27);
mesh27.position.set(-3,1,1);
var mesh28 = new THREE.Mesh(geo22,material6);
//scene.add (mesh28);
mesh28.position.set(3,1,1);
var mesh29 = new THREE.Mesh(geo22,material6);
//scene.add (mesh29);
mesh29.position.set(3,1,-1);
var geo23 = new THREE.CylinderGeometry (0.7,0.7,5.8,20,true,0);
var mesh30 = new THREE.Mesh(geo23,material6);
//scene.add (mesh30);
mesh30.position.set(0,1,0);
mesh30.rotation.set(0,0,1.57);
var fig4= new THREE.Group();
fig4.add(mesh26,mesh27,mesh28,mesh29,mesh30);
//scene.add(fig4);
fig4.position.set(4,28.8,1);
fig4.rotation.set(1.57,0,0);
fig4.scale.set(0.2,0.5,0.2);
var fig5 = fig4.clone();
//scene.add(fig5);
fig5.position.set(-4,28.8,1);
var fig6 = fig4.clone();
//scene.add(fig6);
fig6.position.set(5.7,28.8,1);
var fig7 = fig4.clone();
//scene.add(fig7);
fig7.position.set(-5.7,28.8,1);
var fig8 = fig4.clone();
//scene.add(fig8);
fig8.position.set(4,28.8,-2);
var fig9 = fig4.clone();
//scene.add(fig9);
fig9.position.set(-4,28.8,-2);
var fig10 = fig4.clone();
//scene.add(fig10);
fig10.position.set(5.7,28.8,-2);
var fig11 = fig4.clone();
//scene.add(fig11);
fig11.position.set(-5.7,28.8,-2);
var fig12 = fig4.clone();
//scene.add(fig12);
fig12.position.set(-6.2,28.8,0);
fig12.rotation.set(1.57,0,1.57);
var fig13 = fig4.clone();
//scene.add(fig13);
fig13.position.set(7.2,28.8,0);
fig13.rotation.set(1.57,0,1.57);
var fig14 = fig4.clone();
//scene.add(fig14);
fig14.position.set(1,29.8,2.5);
var fig15 = fig4.clone();
//scene.add(fig15);
fig15.position.set(1,28.8,2.1);
var fig16 = fig4.clone();
//scene.add(fig16);
fig16.position.set(1,27.8,1.80);
var fig17 = fig4.clone();
//scene.add(fig17);
fig17.position.set(-1,29.8,2.5);
var fig18 = fig4.clone();
//scene.add(fig18);
fig18.position.set(-1,28.8,2.1);
var fig19 = fig4.clone();
//scene.add(fig19);
fig19.position.set(-1,27.8,1.80);
//manos
var geo24 = new THREE.SphereGeometry (1,30,20);
var mesh31 = new THREE.Mesh(geo24,material);
//scene.add (mesh31);
mesh31.position.set(-6,21,0);
var mesh32 = new THREE.Mesh(geo24,material);
//scene.add (mesh32);
mesh32.position.set(6,21,0);
var geo25 = new THREE.CylinderGeometry (0.3,0.2,4);
var mesh33 = new THREE.Mesh(geo25,material);
//scene.add (mesh33);
mesh33.position.set(6,19,0);
var mesh34 = new THREE.Mesh(geo25,material);
//scene.add (mesh34);
mesh34.position.set(6,19.5,-0.9);
mesh34.rotation.set(0.7,0,0);
var mesh35 = new THREE.Mesh(geo25,material);
//scene.add (mesh35);
mesh35.position.set(6,19.5,0.9);
mesh35.rotation.set(-0.7,0,0);
var fig20= new THREE.Group();
fig20.add(mesh33,mesh34,mesh35);
//scene.add(fig20);
fig20.position.set(0,0,0);
var fig21 = fig20.clone();
//scene.add(fig21);
fig21.position.set(-12,0,0);
//brazo
var geo26 = new THREE.CylinderGeometry (0.5,0.5,5);
var mesh36 = new THREE.Mesh(geo26,material);
//scene.add (mesh36);
mesh36.position.set(5.8,27.5,0);
var mesh37 = new THREE.Mesh(geo26,material);
//scene.add (mesh37);
mesh37.position.set(-5.8,27.5,0);

var geo27 = new THREE.SphereGeometry (0.9,30,20);
var mesh38 = new THREE.Mesh(geo27,material);
//scene.add (mesh38);
mesh38.position.set(5.8,27,0);
var mesh39 = new THREE.Mesh(geo27,material);
//scene.add (mesh39);
mesh39.position.set(-5.8,27,0);

//adorno hombrera
var geo28 = new THREE.SphereGeometry (10,30,20);
var mesh40 = new THREE.Mesh(geo28,material6);
//scene.add (mesh40);
mesh40.position.set(0,10,0);
var geo29 = new THREE.SphereGeometry (4.5,30,20);
var mesh41 = new THREE.Mesh(geo29,material6);
//scene.add (mesh41);
mesh41.position.set(0,10,7);
var mesh42 = new THREE.Mesh(geo29,material3);
//scene.add (mesh42);
mesh42.position.set(0,10.5,6.9);
var mesh43 = new THREE.Mesh(geo29,material6);
//scene.add (mesh43);
mesh43.position.set(0,10,-7);
var mesh44 = new THREE.Mesh(geo29,material3);
//scene.add (mesh44);
mesh44.position.set(0,10.5,-6.9);
var geo30 = new THREE.CylinderGeometry (5,7,25,30);
var mesh45 = new THREE.Mesh(geo30,material6);
//scene.add (mesh45);
mesh45.position.set(-10,8,0);
mesh45.rotation.set(0,0,1.57);
var geo31 = new THREE.ConeGeometry (3,9,20);
var mesh46 = new THREE.Mesh(geo31,material6);
//scene.add (mesh46);
mesh46.rotation.set(0,0,3.14);
mesh46.position.set(-10,2,2);
var mesh47 = new THREE.Mesh(geo31,material6);
//scene.add (mesh47);
mesh47.rotation.set(0,0,3.14);
mesh47.position.set(-15,2,2);
var mesh48 = new THREE.Mesh(geo31,material6);
//scene.add (mesh48);
mesh48.rotation.set(0,0,3.14);
mesh48.position.set(-19.5,2,2);
var mesh49 = new THREE.Mesh(geo31,material6);
//scene.add (mesh49);
mesh49.rotation.set(0,0,3.14);
mesh49.position.set(-10,2,-2);
var mesh50 = new THREE.Mesh(geo31,material6);
//scene.add (mesh50);
mesh50.rotation.set(0,0,3.14);
mesh50.position.set(-15,2,-2);
var mesh51 = new THREE.Mesh(geo31,material6);
//scene.add (mesh51);
mesh51.rotation.set(0,0,3.14);
mesh51.position.set(-19.5,2,-2);
var fig22= new THREE.Group();
fig22.add(mesh40,mesh41,mesh42,mesh43,mesh44,mesh45,mesh46,mesh47,mesh48,mesh49,mesh50,mesh51);
//scene.add(fig22);
fig22.position.set(-3.5,31,0);
fig22.scale.set(0.15,0.15,0.15);
var fig23 = fig22.clone();
//scene.add(fig23);
fig23.position.set(3.5,31,0);
fig23.rotation.set(0,3.14,0);

//velas
var geo32 = new THREE.ConeGeometry (2,5,20);
var mesh52 = new THREE.Mesh(geo32,material4);
//scene.add (mesh52);
mesh52.position.set(0,6,0);
var geo33 = new THREE.CylinderGeometry (0.6,0.9,5.8);
var mesh53 = new THREE.Mesh(geo33,material);
//scene.add (mesh53);
mesh53.position.set(0,1,0);
var fig24= new THREE.Group();
fig24.add(mesh52,mesh53);
//scene.add(fig24);
fig24.position.set(-3.5,34,0);
fig24.scale.set(0.15,0.15,0.15)
var fig25 = fig24.clone();
//scene.add(fig25);
fig25.position.set(3.5,34,0);
fig25.rotation.set(0,3.14,0);
var fig26 = fig24.clone();
//scene.add(fig26);
fig26.position.set(-5,33.2,0);
fig26.rotation.set(0,3.14,0);
var fig27 = fig24.clone();
//scene.add(fig27);
fig27.position.set(-6.6,33.2,0);
fig27.rotation.set(0,3.14,0);
var fig28 = fig24.clone();
//scene.add(fig28);
fig28.position.set(5,33.2,0);
fig28.rotation.set(0,3.14,0);
var fig29 = fig24.clone();
//scene.add(fig29);
fig29.position.set(6.6,33.2,0);
fig29.rotation.set(0,3.14,0);

var geo34 = new THREE.ConeGeometry (2.5,3,20);
var mesh54 = new THREE.Mesh(geo34,material1);
//scene.add (mesh54);
mesh54.position.set(0,32.2,2.8);
mesh54.rotation.set(-0.5,0,3.14);
mesh54.scale.set(1,1,0.2);

var mesh55 = new THREE.Mesh(geo34,material1);
//scene.add (mesh55);
mesh55.position.set(0,42,1.5);
mesh55.scale.set(0.2,2,0.2);

var mesh56 = new THREE.Mesh(geo34,material1);
//scene.add (mesh56);
mesh56.position.set(0.5,42,1.5);
mesh56.scale.set(0.2,1.7,0.2);

var mesh57 = new THREE.Mesh(geo34,material1);
//scene.add (mesh57);
mesh57.position.set(1,42,1.3);
mesh57.scale.set(0.2,1.4,0.2);

var mesh58 = new THREE.Mesh(geo34,material1);
//scene.add (mesh58);
mesh58.position.set(1.3,42,0.8);
mesh58.scale.set(0.2,1.4,0.2);

var mesh59 = new THREE.Mesh(geo34,material1);
//scene.add (mesh59);
mesh59.position.set(1,42,0.2);
mesh59.scale.set(0.2,1.4,0.2);

var mesh60 = new THREE.Mesh(geo34,material1);
//scene.add (mesh60);
mesh60.position.set(0.5,42,0);
mesh60.scale.set(0.2,1.7,0.2);

var mesh61 = new THREE.Mesh(geo34,material1);
//scene.add (mesh61);
mesh61.position.set(0,42,0);
mesh61.scale.set(0.2,2,0.2);

var fig30= new THREE.Group();
fig30.add(mesh55,mesh56,mesh57,mesh58,mesh59,mesh60,mesh61);
//scene.add(fig30);
fig30.position.set(0,0,0);
var fig31 = fig30.clone();
//scene.add(fig31);
fig31.position.set(-0.5,0,1.5);
fig31.rotation.set(0,3.14,0);



//alas
var geo34 = new THREE.SphereGeometry (8,30,20);
var mesh62 = new THREE.Mesh(geo34,material);
//scene.add (mesh62);
mesh62.position.set(0,21,-0.2);
mesh62.scale.set(1,1.5,0.1);

var geo35 = new THREE.ConeGeometry (3,9,20);
//4
var mesh63 = new THREE.Mesh(geo35,material);
//scene.add (mesh63);
mesh63.position.set(1.5,23.5,-1);
mesh63.rotation.set(0.15,0,3.1);
mesh63.scale.set(1,1,0.5);

var mesh64 = new THREE.Mesh(geo35,material);
//scene.add (mesh64);
mesh64.position.set(-1.5,23.5,-1);
mesh64.rotation.set(0.15,0,3.1);
mesh64.scale.set(1,1,0.5);

var mesh65 = new THREE.Mesh(geo35,material);
//scene.add (mesh65);
mesh65.position.set(3.5,23.5,-1);
mesh65.rotation.set(0.15,0,3.1);
mesh65.scale.set(1,1,0.5);

var mesh66 = new THREE.Mesh(geo35,material);
//scene.add (mesh66);
mesh66.position.set(-3.5,23.5,-1);
mesh66.rotation.set(0.15,0,3.1);
mesh66.scale.set(1,1,0.5);


//5
var mesh67 = new THREE.Mesh(geo35,material);
//scene.add (mesh67);
mesh67.position.set(2.5,20,-1);
mesh67.rotation.set(0.15,0,3.1);
mesh67.scale.set(1,1,0.5);

var mesh68 = new THREE.Mesh(geo35,material);
//scene.add (mesh68);
mesh68.position.set(-2.5,20,-1);
mesh68.rotation.set(0.15,0,3.1);
mesh68.scale.set(1,1,0.5);

var mesh69 = new THREE.Mesh(geo35,material);
//scene.add (mesh69);
mesh69.position.set(4.5,20,-1);
mesh69.rotation.set(0.15,0,3.1);
mesh69.scale.set(1,1,0.5);

var mesh70 = new THREE.Mesh(geo35,material);
//scene.add (mesh70);
mesh70.position.set(-4.5,20,-1);
mesh70.rotation.set(0.15,0,3.1);
mesh70.scale.set(1,1,0.5);

var mesh71 = new THREE.Mesh(geo35,material);
//scene.add (mesh71);
mesh71.position.set(0,20,-1);
mesh71.rotation.set(0.15,0,3.1);
mesh71.scale.set(1,1,0.5);

//6
var mesh72 = new THREE.Mesh(geo35,material);
//scene.add (mesh72);
mesh72.position.set(1.5,16.5,-1);
mesh72.rotation.set(0.15,0,3.1);
mesh72.scale.set(1,1,0.5);

var mesh73 = new THREE.Mesh(geo35,material);
//scene.add (mesh73);
mesh73.position.set(-1.5,16.5,-1);
mesh73.rotation.set(0.15,0,3.1);
mesh73.scale.set(1,1,0.5);

var mesh74 = new THREE.Mesh(geo35,material);
//scene.add (mesh74);
mesh74.position.set(3.5,16.5,-1);
mesh74.rotation.set(0.15,0,3.1);
mesh74.scale.set(1,1,0.5);

var mesh75 = new THREE.Mesh(geo35,material);
//scene.add (mesh75);
mesh75.position.set(-3.5,16.5,-1);
mesh75.rotation.set(0.15,0,3.1);
mesh75.scale.set(1,1,0.5);

var mesh76 = new THREE.Mesh(geo35,material);
//scene.add (mesh76);
mesh76.position.set(-5,16.5,-1);
mesh76.rotation.set(0.15,0,3.1);
mesh76.scale.set(1,1,0.5);

var mesh77 = new THREE.Mesh(geo35,material);
//scene.add (mesh77);
mesh77.position.set(5,16.5,-1);
mesh77.rotation.set(0.15,0,3.1);
mesh77.scale.set(1,1,0.5);

//5
var mesh78 = new THREE.Mesh(geo35,material);
//scene.add (mesh78);
mesh78.position.set(2.5,12,-1);
mesh78.rotation.set(0.15,0,3.1);
mesh78.scale.set(1,1,0.5);

var mesh79 = new THREE.Mesh(geo35,material);
//scene.add (mesh79);
mesh79.position.set(-2.5,12,-1);
mesh79.rotation.set(0.15,0,3.1);
mesh79.scale.set(1,1,0.5);

var mesh80 = new THREE.Mesh(geo35,material);
//scene.add (mesh80);
mesh80.position.set(4,12,-1);
mesh80.rotation.set(0.15,0,3.1);
mesh80.scale.set(1,1,0.5);

var mesh81 = new THREE.Mesh(geo35,material);
//scene.add (mesh81);
mesh81.position.set(-4,12,-1);
mesh81.rotation.set(0.15,0,3.1);
mesh81.scale.set(1,1,0.5);

var mesh82 = new THREE.Mesh(geo35,material);
//scene.add (mesh82);
mesh82.position.set(0,12,-1);
mesh82.rotation.set(0.15,0,3.1);
mesh82.scale.set(1,1,0.5);

//4
var mesh83 = new THREE.Mesh(geo35,material);
//scene.add (mesh83);
mesh83.position.set(1.5,8,-1);
mesh83.rotation.set(0.15,0,3.1);
mesh83.scale.set(1,1,0.5);

var mesh84 = new THREE.Mesh(geo35,material);
//scene.add (mesh84);
mesh84.position.set(-1.5,8,-1);
mesh84.rotation.set(0.15,0,3.1);
mesh84.scale.set(1,1,0.5);

var mesh85 = new THREE.Mesh(geo35,material);
//scene.add (mesh85);
mesh85.position.set(3,8,-1);
mesh85.rotation.set(0.15,0,3.1);
mesh85.scale.set(1,1,0.5);

var mesh86 = new THREE.Mesh(geo35,material);
//scene.add (mesh86);
mesh86.position.set(-3,8,-1);
mesh86.rotation.set(0.15,0,3.1);
mesh86.scale.set(1,1,0.5);

var mesh87 = new THREE.Mesh(geo35,material);
//scene.add (mesh87);
mesh87.position.set(0,8,-1);
mesh87.rotation.set(0.15,0,3.1);
mesh87.scale.set(1,1,0.5);

//3
var mesh88 = new THREE.Mesh(geo35,material);
//scene.add (mesh88);
mesh88.position.set(1.5,4,-1);
mesh88.rotation.set(0.15,0,3.1);
mesh88.scale.set(1,1,0.5);

var mesh89 = new THREE.Mesh(geo35,material);
//scene.add (mesh89);
mesh89.position.set(-1.5,4,-1);
mesh89.rotation.set(0.15,0,3.1);
mesh89.scale.set(1,1,0.5);

var mesh90 = new THREE.Mesh(geo35,material);
//scene.add (mesh90);
mesh90.position.set(0,3.5,-1);
mesh90.rotation.set(0.15,0,3.1);
mesh90.scale.set(1,1,0.5);

var fig32= new THREE.Group();
fig32.add(mesh62,mesh63,mesh64,mesh65,mesh66,mesh67,mesh68,mesh69,mesh70,mesh71,mesh72,mesh73,mesh74,mesh75,mesh76,mesh77,mesh78,mesh79,mesh80,mesh81,mesh82,mesh83,mesh84,mesh85,mesh86,mesh87,mesh88,mesh89,mesh90);
//scene.add(fig32);
fig32.position.set(6,2,-8.7);
fig32.rotation.set(0.2,0,0);
var fig33 = fig32.clone();
//scene.add(fig33);
fig33.position.set(-6,2,-8.7);



const xibalba = new THREE.Group(); 
xibalba.add(material,material1,material2,material3,material4,material5,material6,mesh,mesh1,mesh2,mesh3,mesh4,mesh5,mesh6,mesh7,mesh8,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39,mesh40,mesh41,mesh42,mesh43,mesh44,mesh45,mesh46,mesh47,mesh48,mesh49,mesh50,mesh51,mesh52,mesh53,mesh54,mesh55,mesh56,mesh57,mesh58,mesh59,mesh60,mesh61,mesh62,mesh63,mesh64,mesh65,mesh66,mesh67,mesh68,mesh69,mesh70,mesh71,mesh72,mesh73,mesh74,mesh75,mesh76,mesh77,mesh78,mesh79,mesh80,mesh81,mesh82,mesh83,mesh84,mesh85,mesh86,mesh87,mesh88,mesh89,mesh90); 
xibalba.position.set(x,y,z); 

return xibalba; 

}