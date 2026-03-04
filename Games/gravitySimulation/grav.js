//---------------------------------------------------------------
//globals
let canvas;
let ctx;

let planets = [];
let gravObjects = [];

const PLANET = {
    x: 0,
    y: 0,
    radius: 10,
    gravity: 9.8,
    circle: new Path2D()
}

const GRAV_OBJ = {
    x: 0,
    y: 0,
    radius: 10,
    inMotion: true,
    circle: new Path2D()
}


//---------------------------------------------------------------
//basic functions
window.onload = function() {
    console.log("pre-load");
    addPlanet([0, 500]);
    addPlanet([0, -500]);
    console.log("planets loaded");
    window.addEventListener("click", function (e) {clickHandler(e);});
    console.log("click listener loaded");
    canvas = document.querySelector(("canvas"));
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    console.log("canvas loaded");
    update();
    console.log("loaded");
}

function clickHandler(e) {
    let coordinates = [e.clientX, e.clientY];
    addGravObj(coordinates);
}

function update() {
    window.requestAnimationFrame(update);
    physics();
    render();
    console.log("meow");
}


//---------------------------------------------------------------
//physics
function physics() {

}


//---------------------------------------------------------------
//rendering functions
function render() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    renderPlanets();
    renderObjects();
}

function renderPlanets() {
    for (i = 0; i < planets.length; i++) {
        drawCircle(
            [planets[i].x,
            planets[i].y],
            planets[i].circle,
            "#d46f1b"
        );
    }
}

function renderObjects() {
    for (i = 0; i < gravObjects.length; i++) {
        drawCircle(
            [gravObjects[i].x,
            gravObjects[i].y],
            gravObjects[i].circle,
            "black"
        );
    }
}

function drawCircle(coordinates, circle, color) {
    console.log(circle);
    ctx.moveTo(coordinates[0], coordinates[1]);
    ctx.strokeStyle = color;
    ctx.beginPath(circle);
    ctx.fill(circle);
    ctx.closePath(circle);
    
}


//---------------------------------------------------------------
//summoning spells
function addPlanet(centeredCoordinates) {
    let coordinates = centeredToNormal(centeredCoordinates);
    let planet = new Object(PLANET);
    planet.x = coordinates.x;
    planet.y = coordinates.y;
    planet.radius = 350;
    planet.circle.arc(coordinates[0], coordinates[1], planet.radius, 0, 2 * Math.PI);
    planets.push(planet);
}

function addGravObj(coordinates) {
    let gravObj = new Object(GRAV_OBJ);
    gravObj.x = coordinates[0];
    gravObj.y = coordinates[1];
    gravObj.radius = 50;
    gravObj.circle.arc(coordinates[0], coordinates[1], gravObj.radius, 0, 2 * Math.PI);
    gravObjects.push(gravObj);
}


//---------------------------------------------------------------
//math and utility
function centeredToNormal(coordinates) {
    coordinates[0] = coordinates[0] + window.innerWidth/2;
    coordinates[1] = coordinates[1] + window.innerHeight/2;
    console.log(coordinates);
    return coordinates;
}