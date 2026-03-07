let pen;
let layerArray = [];
let activeCanvas;
let line;
let canvasHolder;

window.onload = function() {
    console.log("loading");
    canvasHolder = document.getElementById('canvas-holder');
    centerCanvas();
    pen = {
        size: 20,
        color: [0, 0, 0, 1],
        coords: [0, 0],
    }
    let canvas1 = createLayer([10000, 7000]);
    console.log("canvas created:  " + canvas1);
    addEventListener('pointerdown', (e) => pointerDownHandler(e));
    addEventListener('pointerup', (e) => pointerUpHandler(e));
    addEventListener('pointermove', (e) => pointerMoveHandler(e));
    update();
    console.log("finished loading");
};

function pointerMoveHandler(e) {
    pen.coords = [e.clientX, e.clientY];
}

function pointerDownHandler(e) {
    console.log(e)
    switch (e.target.tagName.toLowerCase()) {
        case 'canvas':
            let canvas = findCanvasById(e.target.id)
            activeCanvas = canvas;
            createLine([e.clientX, e.clientY])
            canvas.penDown = true;
    }
}

function pointerUpHandler(e) {
    switch (e.target.tagName.toLowerCase()) {
        case 'canvas':
            let canvas = findCanvasById(e.target.id)
            canvas.lines.push(line);
            canvas.penDown = false;
            canvas.penDownLast = false;
            endLine();
    }
}

function update() {
    window.requestAnimationFrame(update)
    checkPenDown();
    render();
}

function render() {
    if (line != null) {
        activeCanvas.ctx.stroke(line);
    }
    for (i = 0; i < layerArray.length; i++) {
        if (layerArray[i].ctx != null) {
            for (j = 0; j < layerArray[i].lines.length; j++) {
                layerArray[i].ctx.stroke(layerArray[i].lines[j]);
            }
        }
        else {
            console.log("ctx is null")
        }
    }
}

function createLayer(ratio, density) {

    const ID = Math.random();
    let parent = document.getElementById('canvas-holder');
    let newCanvas = document.createElement('canvas');
    newCanvas.width = ratio[0] * density;
    newCanvas.height = ratio[1] * density;
    newCanvas.id = ID;

    LayerObj = {
        canvas: newCanvas,
        literalSize: [],
        pixelDensity: 0,
        ctx: null,
        element: null,
        penDown: false,
        lines: [],
    };
    
    parent.appendChild(newCanvas);

    let element = document.getElementById(ID);
    console.log(element);

    LayerObj.element = element;
    LayerObj.ctx = LayerObj.element.getContext('2d');

    let decimalRatio = ratio[0] / ratio[1];
    if (decimalRatio >= 1) {
        LayerObj.literalSize = [decimalRatio * window.innerHeight / 10, window.innerHeight / 10];
        element.style.width = LayerObj.literalSize[0] + 'vh';
        element.style.height = LayerObj.literalSize[0] + 'vh' + 'vh';
    }
    else {
        LayerObj.literalSize = [window.innerHeight / 10, ratio[1] / ratio[0] * window.innerHeight / 10];
        element.style.width = LayerObj.literalSize[0] + 'vh';
        element.style.height = LayerObj.literalSize[0] + 'vh' + 'vh';
    }

    if (layerArray.length == 0) {
        canvasHolder.definition =  LayerObj.literalSize[0] / window.innerWidth;
        console.log(window.innerWidth * canvasHolder.definition)
    }

    layerArray.push(LayerObj);

    return element;
}

function createLine(worldCoords) {
    coords = worldToCanvas(worldCoords);
    line = new Path2D();
    line.moveTo(coords[0], coords[1]);
}

function continueLine() {
    coords = worldToCanvas(pen.coords);
    line.lineTo(coords[0], coords[1]);
}

function endLine() {
    line = new Path2D();
}

function checkPenDown() {
    for (i = 0; i < layerArray.length; i++) {
        if (layerArray[i].penDown) {
            continueLine();
        }
    }
}

function centerCanvas() {
    canvasHolder.top = ((window.innerHeight/2));
    canvasHolder.left = ((window.innerWidth/2));
    canvasHolder.style.top = ((window.innerHeight/2)) + 'px';
    canvasHolder.style.left = ((window.innerWidth/2)) + 'px';
}


//---------------------------------------------------------------
//math and utility
function centeredToNormal(coordinates) {
    coordinates[0] = coordinates[0] + window.innerWidth/2;
    coordinates[1] = coordinates[1] + window.innerHeight/2;
    return coordinates;
}

function findCanvasById(id) {
    for (i = 0; i < layerArray.length; i++) {
        if (layerArray[i].element.id == id) {
            return layerArray[i];
        }
    }
    return null;
}

function worldToCanvas(worldCoords) {
    coords = [worldCoords[0] - canvasHolder.left, worldCoords[1] - canvasHolder.top];
    coords = [coords[0] / canvasHolder.definition, coords[1] / canvasHolder.definition]
    console.log(coords);
    return coords;
}