const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


function preload(){
  backgroundImg = loadImage("images/pic11.jpg")
}




function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  background(backgroundImg);
  
  drawSprites();
}