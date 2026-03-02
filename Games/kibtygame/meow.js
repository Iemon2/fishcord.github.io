window.onload = function() {
    state = initializeState();

    loadHandler = function(state) {
        let stateRef;
        if (typeof state !== 'undefined') {
            stateRef = state;
        }
        if (typeof stateRef !== 'undefined') {
            update(state);
        }
    }
    
    state.kibty.image.addEventListener("load", loadHandler(state), false);

    window.addEventListener("keypress", (e) => {
        handleKeydownEvent(state.kibty, e);
    });
}

window.assetFolder = "../../Assets/default-theme/kibtygame/" 

sprite = {
    x: 0,
    y: 0,
    image: Image
};

function initializeState() {
    //kibty
    //canvas
    //drawingsurface

    function State(imagesrc) {

        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.drawingSurface = this.canvas.getContext("2d");

        this.breakables = getBreakableObjects(7);
        this.kibty = Object.create(sprite);
        this.kibty.image = new Image();
        this.kibty.image.src = imagesrc;
        this.kibty.image.getState = function getState() {
            return this;
        }
        
        //console.log(this.breakables[1]);
        //console.log(this.kibty);
        //console.log(this.canvas);
        //console.log(this.drawingSurface);
    }

    const state = new State(assetFolder + "Kitty.png");

    return state;
}

function getBreakableObjects(amount) {
    let distanceMultiplierX = .08 * document.getElementById("game-container").width;
    let distanceMultiplierY = .1 * document.getElementById("game-container").height;

    let breakables = [];
    for (let i = 0; i <= amount; i++) {
        let breakableItem = {
            image: new Image(),
            broken: false,
            x: 0,
            y: 0,
            width: 600,
            height: 240
        }
        breakableItem.x = (Math.floor(Math.random() * 10)) * distanceMultiplierX;
        breakableItem.y = (Math.floor(Math.random() * 8)) * distanceMultiplierY;
        breakableItem.image.src = assetFolder + "Vase.png";
        breakables.push(breakableItem);
        console.log(breakableItem.x + ", " + breakableItem.y)
    } 
    return breakables;
}

function handleKeydownEvent(kibty, e) {
    let kibtyRef;
    if (typeof kibty !== 'undefined') {
        kibtyRef = kibty;
    }
    if (typeof kibtyRef !== 'undefined') {
        isMovement = false;
        switch (e.key) {
            case "w":
                //console.log("w");
                moveKibty(kibtyRef, 0, -1);
                isMovement = true;
                break;
            case "s":
                //console.log("s");
                moveKibty(kibtyRef, 0, 1);
                isMovement = true;
                break;
            case "a":
                //console.log("a");
                moveKibty(kibtyRef, -1, 0);
                isMovement = true;
                break;
            case "d":
                //console.log("d");
                moveKibty(kibtyRef, 1, 0);
                isMovement = true;
                break;
        }
    }
}

function update(state) {    
    let stateRef;
    if (typeof state !== 'undefined') {
        stateRef = state;
    }
    if (typeof stateRef !== 'undefined') {
        window.requestAnimationFrame(update, state.canvas);
        render(state);
    }
}

function render(drawingSurface) {
    let stateRef;
    if (typeof state !== 'undefined') {
        stateRef = state;
    }
    if (typeof stateRef !== 'undefined') {
        stateRef.drawingSurface.clearRect(0,0, stateRef.canvas.width, stateRef.canvas.height);

        sceneObjects = getObjectLocations(stateRef);
        renderBehind(stateRef, sceneObjects[1]);
        renderKibty(stateRef);
        renderFront(stateRef, sceneObjects[0]);
    }
}

function getObjectLocations(state) {
    breakables = state.breakables;
    objectsBehind = [];
    objectsFront = [];
    for (i = 0; i < breakables.length; i++) {
        if ((breakables[i].y + (breakables[i].height/4)) > (state.kibty.y)) {
            objectsBehind.push(breakables[i]);
        }
        else {
            objectsFront.push(breakables[i]);
        }
    }
    breakables = [objectsBehind, objectsFront];
    return breakables;
}


function renderBehind(state, objects) {
    for (i = 0; i < objects.length; i++) {
        state.drawingSurface.drawImage(
        objects[i].image,
        objects[i].x,
        objects[i].y,
        objects[i].width,
        objects[i].height
    );
    }
}

function renderKibty(state) {
    state.drawingSurface.drawImage(
        state.kibty.image,
        state.kibty.x,
        state.kibty.y,
        120,
        120
    );
}

function renderFront(state, objects) {
    for (i = 0; i < objects.length; i++) {
        state.drawingSurface.drawImage(
        objects[i].image,
        objects[i].x,
        objects[i].y,
        objects[i].width,
        objects[i].height
    );
    }
}

function moveKibty(kibty, x, y) {
    movementMultiplierX = 20;
    movementMultiplierY = 10;

    kibty.y = kibty.y + (y*movementMultiplierY);
    kibty.x = kibty.x + (x*movementMultiplierX);

    //console.log(kibty.x)
    //console.log(kibty.y)
}