//---------------------------------------------------------------
//globals
let canvas;
let ctx;

let planets = [];
let gravObjects = [];
let motionLines = [];

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
    loadMotionLines();
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
    //physics();
    //render();
}


//---------------------------------------------------------------
//physics
function physics() {
    for (i = 0; i < gravObjects.length; i++) {
        let grav = [[0, 0, 0], [0, 0, 0]];
        for (j = 0; j < planets.length; j++) {
            grav[j] = calcNextCoordinates([planets[j].x, planets[j].y], [gravObjects[i].x, gravObjects[i].y], planets[j].mass, gravObjects[i].mass);
        }
        for (j = 0; j < grav.length; j++) {
            gravObjects[i].x = (grav[j][1]) + gravObjects[i].x;
            gravObjects[i].y = (grav[j][2]) + gravObjects[i].y;
            //gravObjects[i].x = 1 + gravObjects[i].x;
            moveShape(gravObjects[i]);
        }
    }
}

function loadMotionLines() {
    for(x = 0; x < 8; x++) {
        for(y = 0; y < 8; y++) {
            createMotionLine([x, y]);
        }
    }
}

function createMotionLine(startCoords) {
    let lastLineEnd = startCoords;

    for (k = 0; k < 10; k++) {
        let grav = [[], []];
        for (j = 0; j < planets.length; j++) {
            grav[j] = calcNextCoordinates([planets[j].x, planets[j].y], [lastLineEnd[0], lastLineEnd[0]], planets[j].mass, 20);
        }
        let coords = [0, 0];
        for (i = 0; i < grav.length; i++) {
            coords[0] = grav[i][1];
            coords[1] = grav[i][2];
        } 
    }
}

function calcNextCoordinates(mass1Coords, mass2Coords, mass1, mass2) {
    distance = getDistance2D(mass1Coords, mass2Coords);
    gravity = calculateGrav(mass1, mass2, distance[1], distance[2], distance[0]);
    return gravity;
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

function renderLines() {
    for (i = 0; i < motionLines.length; i++) {
        ctx.stroke(motionLines[i]);
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
        mass: 8e9,
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
        mass: 20,
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
    y = -point1[1] + point2[1];
    mag = Math.sqrt((x * x) + (y * y));
    return [mag, x, y];
}

function calculateGrav(mass1, mass2, dX, dY, dM) {
    let M = mass1 * mass2
    // let Fx = (6.67430e-11) * (M / dX * dX);
    // let Fy = (6.67430e-11) * (M / dY * dY);
    // let F = Math.sqrt((Fx * Fx) * (Fy * Fy));

    let F = (6.67430e-11) * (M * 300 / dM * dM);

    let Fx = F / dX;
    let Fy = F / dY;
    console.log(Fx + ", " + Fy);

    return [F, Fx, Fy];
}