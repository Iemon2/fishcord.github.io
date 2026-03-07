const attributes = [
    { id: 0, name: "soft", conflictsWith: [1] },
    { id: 1, name: "hard", conflictsWith: [0] },
    { id: 2, name: "fluffy", conflictsWith: [3] },
    { id: 3, name: "rough", conflictsWith: [2] },
    { id: 4, name: "hot", conflictsWith: [5] },
    { id: 5, name: "cold", conflictsWith: [4] },
    { id: 6, name: "pretty", conflictsWith: [] },
    { id: 7, name: "handsome", conflictsWith: [] },
    { id: 8, name: "cute", conflictsWith: [] },
    { id: 9, name: "ugly", conflictsWith: [] },
    { id: 10, name: "malleable", conflictsWith: [11] },
    { id: 11, name: "stiff", conflictsWith: [10] },
    { id: 12, name: "molten", conflictsWith: [] },
    { id: 13, name: "frigid", conflictsWith: [] },
    { id: 14, name: "good-natured", conflictsWith: [] },
    { id: 15, name: "evil", conflictsWith: [] },
    { id: 16, name: "wet", conflictsWith: [17] },
    { id: 17, name: "dry", conflictsWith: [16] },
    { id: 18, name: "metal", conflictsWith: [] },
    { id: 19, name: "wooden", conflictsWith: [] },
    { id: 20, name: "gay", conflictsWith: [] },
    { id: 21, name: "doglike", conflictsWith: [] },
    { id: 22, name: "meowcore", conflictsWith: [] },
    { id: 23, name: "glooby", conflictsWith: [] },
    { id: 24, name: "swumbly", conflictsWith: [] },
    { id: 25, name: "empoisoned", conflictsWith: [] },
    { id: 26, name: "defamatory", conflictsWith: [] },
    { id: 27, name: "fecund", conflictsWith: [] },
    { id: 28, name: "jocular", conflictsWith: [] },
    { id: 29, name: "squeembley", conflictsWith: [30] }, // you MUST NOT be able to have both of these
    { id: 30, name: "squaimbley", conflictsWith: [29] }, //
    { id: 31, name: "munificent", conflictsWith: [] },
    { id: 32, name: "noxious", conflictsWith: [] },
    { id: 33, name: "fast", conflictsWith: [34, 35, 36] },
    { id: 34, name: "supersonic", conflictsWith: [33, 35, 36] },
    { id: 35, name: "slow", conflictsWith: [33, 34, 36] },
    { id: 36, name: "sluggush", conflictsWith: [33, 34, 35] },
    { id: 37, name: "cyclous", conflictsWith: [] },
    { id: 38, name: "sclerotic", conflictsWith: [] },
    { id: 39, name: "intrusive", conflictsWith: [] },
    { id: 40, name: "evasive", conflictsWith: [] },
    { id: 41, name: "zealous", conflictsWith: [] },
    { id: 42, name: "hulking", conflictsWith: [] },
    { id: 43, name: "flat", conflictsWith: [] },
    { id: 44, name: "imaginary", conflictsWith: [] },
    { id: 45, name: "idiosyncratic", conflictsWith: [] },
    { id: 46, name: "immaterial", conflictsWith: [] },
    { id: 47, name: "experimental", conflictsWith: [] },
    { id: 48, name: "commercial", conflictsWith: [] },
    { id: 49, name: "vital", conflictsWith: [] },
    { id: 50, name: "supplementary", conflictsWith: [] }
    
];
const inventoryTable = document.getElementById('inventory-table');
inventory = [
    { id: 0, attribute: [(attributes[0])] }
]

// TODO: update getRandomAttribute to do JUST THAT and return the attribute and its properties from attributes.
//      have updating the thing set to a different function
//      ALSO! instead of updating

function getRandomAttribute() {
    randId = Math.ceil(Math.random() * 50) - 1;


    //console.log(attributes.find((item) => item.id == randId));
    

    // TEMP CODE BELOW FOR THE BUTTON TEST
    woof = attributes.filter((item) => item.id == randId);
    return woof;
}

function sellNode(node, requested) {
    if ((node.innerHTML == requested.innerHTML) && (node.innerHTML != "")) {
        node.innerHTML = "";
        requested.innerHTML = "";
        console.log("WOW! YOU SOLD THE CORRECT THING!!! GOOD!!")
    }
    else {
        console.log("that is NOT the right one you STUPID IDIOT!!!!!!!!!!!!!!!! TRY AGGAIN")
    }
}

function addNewToInventory() {  // TODO: make it so new items are added at the end of the table rather than the start
    //                             (or just sort the table afterwards.. cant be too hard)

    let id = 1; // THIS is copypasted from module 4 code and edited slightly
    for (let i = 1; i < inventory.map(item => item.id).length + 1; i++) { // for each item in inventory,
        //console.log("i = " + i)
        //console.log(inventory[i].id)
        if ((i != (inventory.map(item => item.id)[(i)])) && (inventory.find(meowie => meowie.id == i) === undefined)) { // if current spot in inventory doesnt exist,
            //console.log("at this: " + i)
            id = i                                     // set new id to value of current spot
            break
        }
    }
    attribute = getRandomAttribute();
    

    inventory.push({id, attribute})
    //console.log("newid:" + inventory[id])

    invItems = inventoryTable.querySelector('tr')
    invItems.insertAdjacentHTML('afterend', "<tr>   <th class=\'node-id\'>" + id + "</th>   <th>" + attribute[0].name + "</th>   </tr>")
}

function printInventory() {
    console.log(inventory)
}


function removeNodeFromInventory(nodeId) { //TODO: fill empty slots in inventory if node is moved elsewhere to prevent id duping
    meow = inventory[nodeId]
    console.log(meow)
    inventory.splice((nodeId), 1) // removes item at nodeId from backend array

    idList = document.getElementsByClassName('node-id') // gets items in table showing the id

    const entry = inventoryTable.querySelectorAll('tr') // selects all rows
    
    for (let i = 1; i < idList.length; i++) { // for each id in node id list:
        if (idList[i].innerHTML == nodeId) { // if current spot is equal to INPUT node id:
            entry[i+1].remove() // deletes that row
        }
    }

    return meow
}