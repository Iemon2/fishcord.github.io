//---------------------------------------------------------------
//globals
let canvas;
let ctx;

let planets = [];
let gravObjects = [];

let instruction = 0;

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
    if (instruction == 0) {
        physics();
        instruction++;
        //console.log("physical meow");
    }
    else if (instruction == 1) {
        render();
        instruction = 0;
        //console.log("rendering meow");
    }
}


//---------------------------------------------------------------
//physics
function physics() {
    for (i = 0; i < gravObjects.length; i++) {
        let grav = [[0, 0, 0], [0, 0, 0]];
        for (j = 0; j < planets.length; j++) {
            distance = getDistance2D([gravObjects[i].x, gravObjects[i].y], [planets[j].x, planets[j].y])
            grav[j][0] = calculateGrav(planets[j].mass, distance[0]);
            grav[j][1] = calculateGrav(planets[j].mass, distance[1]);
            grav[j][2] = calculateGrav(planets[j].mass, distance[2]);
        }
        for (j = 0; j < grav.length; j++) {
            gravObjects[i].x = (grav[j][1] / 1e5) + gravObjects[i].x;
            gravObjects[i].y = (grav[j][2] / 1e5) + gravObjects[i].y;
            //gravObjects[i].x = 1 + gravObjects[i].x;
            console.log(gravObjects);
            moveShape(gravObjects[i]);
        }
    }
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
    ctx.strokeStyle = color;
    ctx.fill(circle);
    
}


//---------------------------------------------------------------
//summoning spells
function addPlanet(centeredCoordinates) {
    let coordinates = centeredToNormal(centeredCoordinates);
    let planet = {
        x: 0,
        y: 0,
        radius: 10,
        mass: 2,
        circle: new Path2D()
    }
    planet.x = coordinates[0];
    planet.y = coordinates[1];
    planet.radius = 350;
    planet.circle.arc(coordinates[0], coordinates[1], planet.radius, 0, 2 * Math.PI);
    planets.push(planet);
}

function addGravObj(coordinates) {
    let gravObj = {
        id: 0,
        x: 0,
        y: 0,
        radius: 10,
        inMotion: true,
        circle: new Path2D()
    };
    gravObj.id = Math.random();
    gravObj.x = coordinates[0];
    gravObj.y = coordinates[1];
    gravObj.radius = 50;
    gravObj.circle.arc(coordinates[0], coordinates[1], gravObj.radius, 0, 2 * Math.PI);
    gravObjects.push(gravObj);
}


//---------------------------------------------------------------
//transmutation spell
function moveShape(object) {
    object.circle = new Path2D();
    object.circle.arc(object.x, object.y, object.radius, 0, 2 * Math.PI);
}

//---------------------------------------------------------------
//math and utility
function centeredToNormal(coordinates) {
    coordinates[0] = coordinates[0] + window.innerWidth/2;
    coordinates[1] = coordinates[1] + window.innerHeight/2;
    return coordinates;
}

function Q_rsqrt(number)
{ 
    var i;
    var x2, y;
    const threehalfs = 1.5;
  
    x2 = number * 0.5;
    y = number;
    //evil floating bit level hacking
    var buf = new ArrayBuffer(4);
    (new Float32Array(buf))[0] = number;
    i =  (new Uint32Array(buf))[0];
    i = (0x5f3759df - (i >> 1)); //What the fuck?
    (new Uint32Array(buf))[0] = i;
    y = (new Float32Array(buf))[0];
    y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
//  y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

    return y;
}

function getDistance2D(point1, point2) {
    x = point1[0] - point2[0];
    y = point1[1] - point2[1];
    mag = Math.sqrt((x * x) + (y * y));
    return [mag, x, y];
}

function calculateGrav(mass, distance) {
    g = Q_rsqrt((6.674e-11) * mass / distance);
    return g;
}