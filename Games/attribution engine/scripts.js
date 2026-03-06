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

function getRandomAttribute() {
    meow = Math.ceil(Math.random() * 50);
    console.log(attributes.filter((item) => item.id == meow));

}