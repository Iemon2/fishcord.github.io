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
    { id: 36, name: "sluggish", conflictsWith: [33, 34, 35] },
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
    { id: 50, name: "foober", conflictsWith: [] },
    { id: 51, name: "grondle", conflictsWith: [] },
    { id: 52, name: "onklide", conflictsWith: [] },
    { id: 53, name: "zorpt", conflictsWith: [] },
    { id: 54, name: "gond", conflictsWith: [] },
    { id: 55, name: "atchful", conflictsWith: [] },
    { id: 56, name: "storf", conflictsWith: [] },
    { id: 57, name: "golth", conflictsWith: [] },
    { id: 58, name: "binary", conflictsWith: [] },
    { id: 59, name: "upplementary", conflictsWith: [] },
    { id: 60, name: "complementary", conflictsWith: [] },
    { id: 61, name: "gogoglish", conflictsWith: [] },
    { id: 62, name: "organic", conflictsWith: [63] },
    { id: 63, name: "unnatural", conflictsWith: [62] },
    { id: 64, name: "forb", conflictsWith: [] },
    { id: 65, name: "idyllic", conflictsWith: [] },
    { id: 66, name: "untalgic", conflictsWith: [] },
    { id: 67, name: "fishy", conflictsWith: [] },
    { id: 68, name: "foshy", conflictsWith: [] },
    { id: 69, name: "fushi", conflictsWith: [] },
    { id: 70, name: "bloob", conflictsWith: [] },
    { id: 71, name: "garnular", conflictsWith: [] },
    { id: 72, name: "interdoust", conflictsWith: [] },
    { id: 73, name: "scrambled", conflictsWith: [74] },
    { id: 74, name: "unscrambled", conflictsWith: [73] },
    { id: 75, name: "egg", conflictsWith: [] }
    
];
const inventoryTable = document.getElementById('inventory-table');
inventory = [
    { id: 0, attribute: [(attributes[0])] }
]

// TODO: update getRandomAttribute to do JUST THAT and return the attribute and its properties from attributes.
//      have updating the thing set to a different function
//      ALSO! instead of updating

function getRandomAttribute() {
    randId = Math.floor(Math.random() * attributes.length);

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
    invItems.insertAdjacentHTML('afterend', "<tr>   <th class=\'node-id\'>" + id + "</th>   <th class=\'node-attribute\'>" + attribute[0].name + "</th>   </tr>")
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

function cycleAttributeBy3() { // THIS MONSTROSITY cycles attribute.id of selected node by 3, changing the attribute

    input = document.getElementById('node-att-cycler').value // gets input from <input> tag
    
    inventory[input].attribute[0] = attributes[((inventory[input].attribute[0].id) + 3) % attributes.length] // changes the attribute inside the actual backend inventory

    ///console.log(attributes.filter((item) => item.id == inventory[input].attribute.id))
    //console.log(input)
    //console.log(inventory[input].attribute[0].id)

    entry = inventoryTable.querySelectorAll('tr')                       // selects all rows, saves as entry
    attributeList = document.getElementsByClassName('node-attribute')   // makes list of items in first column
    idList = document.getElementsByClassName('node-id')                 // makes list of items in second column

    //console.log(attributeList)
    //console.log(idList)
    //console.log(idList[0].innerHTML)
    //console.log(3)

    meow = -5                                       
    for (i = 0; i < idList.length; i++) {        // THIS THING scrolls through the table to find where Node ID innerHTML is the same as the input
        for (j = 0; i < idList.length; j++) {
            //console.log("j = " + j + "; idList[i].innerHTML = " + idList[i].innerHTML + "; DESIRED ITEM IS " + input)
            //console.log(idList[j])
            if (idList[j].innerHTML == input) {
                meow = j
                break
            }
        }
    }
    //console.log(meow)


    attributeList[meow].innerHTML = inventory[input].attribute[0].name          // sets attribute name in table at input value to new name
}