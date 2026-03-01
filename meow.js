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
        this.kibty = Object.create(sprite);
        this.kibty.image = new Image();
        this.kibty.image.src = imagesrc;
        this.kibty.image.getState = function getState() {
            return this;
        }

        this.canvas = document.querySelector("canvas");
        this.drawingSurface = this.canvas.getContext("2d");
        
        //console.log(this.kibty);
        //console.log(this.canvas);
        //console.log(this.drawingSurface);
    }

    const state = new State("Kitty.png");

    return state;
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
                console.log("w");
                moveKibty(kibtyRef, 0, -1);
                isMovement = true;
                break;
            case "s":
                console.log("s");
                moveKibty(kibtyRef, 0, 1);
                isMovement = true;
                break;
            case "a":
                console.log("a");
                moveKibty(kibtyRef, -1, 0);
                isMovement = true;
                break;
            case "d":
                console.log("d");
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

        stateRef.drawingSurface.drawImage(
            stateRef.kibty.image,
            stateRef.kibty.x,
            stateRef.kibty.y,
            60,
            90
        );
    }
}

function moveKibty(kibty, x, y) {
    movementMultiplier = 10;

    kibty.y = kibty.y + (y*movementMultiplier);
    kibty.x = kibty.x + (x*movementMultiplier);

    console.log(kibty.x)
    console.log(kibty.y)
}