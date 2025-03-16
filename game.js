function setColor(hexagons) {
    // Color hexagons in rows 0 to 2, column 1 to 3
    for (let row = 1; row < 4; row++) {
        hexagons[0][row].style.backgroundColor = '#BA0C2F';
    }
    // Color hexagons in row 1, columns 0 to 2
    for (let row = 4; row < 7; row++) {
        hexagons[0][row].style.backgroundColor = '#FECC02';
    }

    // Color hexagons in rows 9 to 13, column 0
    for (let row = 9; row < 14; row++) {
        hexagons[0][row].style.backgroundColor = '#002F6C';
    }

    // Color hexagons in rows 14 to 15, column 0
    for (let row = 14; row < 17; row++) {
        hexagons[0][row].style.backgroundColor = '#0036A7';
    }

    // Color hexagons in rows 18 to 19, column 0
    for (let row = 18; row < 20; row++) {
        hexagons[0][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 4; row++) {
        hexagons[1][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 6; row++) {
        hexagons[1][row].style.backgroundColor = '#FECC02';
    }
    for (let row = 9; row < 13; row++) {
        hexagons[1][row].style.backgroundColor = '#002F6C';
    }
    for (let row = 13; row < 16; row++) {
        hexagons[1][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 17; row < 20; row++) {
        hexagons[1][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 4; row++) {
        hexagons[2][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[2][row].style.backgroundColor = '#FECC02';
    }
    hexagons[2][8].style.backgroundColor = '#002F6C'
    for (let row = 10; row < 13; row++) {
        hexagons[2][row].style.backgroundColor = '#002F6C';
    }
    hexagons[2][14].style.backgroundColor = '#0036A7';
    for (let row = 16; row < 20; row++) {
        hexagons[2][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 3; row++) {
        hexagons[3][row].style.backgroundColor = '#BA0C2F';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[3][row].style.backgroundColor = '#FECC02';
    }
    for (let row = 13; row < 20; row++) {
        hexagons[3][row].style.backgroundColor = '#0036A7';
    }
    hexagons[4][2].style.backgroundColor = '#BA0C2F';
    for (let row = 4; row < 7; row++) {
        hexagons[4][row].style.backgroundColor = '#FECC02';
    }
    hexagons[4][10].style.backgroundColor = '#0072CE';
    hexagons[4][12].style.backgroundColor = '#0072CE';
    hexagons[4][13].style.backgroundColor = '#0072CE';
    for (let row = 14; row < 20; row++) {
        hexagons[4][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 4; row < 7; row++) {
        hexagons[5][row].style.backgroundColor = '#FECC02';
    }
    hexagons[5][12].style.backgroundColor = '#0072CE';
    hexagons[5][13].style.backgroundColor = '#0072CE';
    for (let row = 14; row < 20; row++) {
        hexagons[5][row].style.backgroundColor = '#0036A7';
    }
    hexagons[6][2].style.backgroundColor = '#C8102E';
    for (let row = 4; row < 7; row++) {
        hexagons[6][row].style.backgroundColor = '#FECC02';
    }
    hexagons[6][8].style.backgroundColor = '#FECC02';
    hexagons[6][10].style.backgroundColor = '#A4343A';
    hexagons[6][12].style.backgroundColor = '#A4343A';
    hexagons[6][13].style.backgroundColor = '#A4343A';
    for (let row = 14; row < 20; row++) {
        hexagons[6][row].style.backgroundColor = '#0036A7';
    }
    hexagons[7][1].style.backgroundColor = '#C8102E';
    hexagons[7][3].style.backgroundColor = '#C8102E';
    for (let row = 4; row < 7; row++) {
        hexagons[7][row].style.backgroundColor = '#FECC02';
    }
    hexagons[7][8].style.backgroundColor = '#FECC02';
    for (let row = 10; row < 14; row++) {
        hexagons[7][row].style.backgroundColor = '#A4343A';
    }
    for (let row = 14; row < 20; row++) {
        hexagons[7][row].style.backgroundColor = '#0036A7';
    }
    hexagons[8][2].style.backgroundColor = '#C8102E';
    hexagons[8][6].style.backgroundColor = '#FECC02';
    hexagons[8][5].style.backgroundColor = '#FECC02';
    for (let row = 10; row < 14; row++) {
        hexagons[8][row].style.backgroundColor = '#046A38';
    }
    hexagons[8][14].style.backgroundColor = '#00AF66';
    hexagons[8][15].style.backgroundColor = '#00AF66';
    for (let row = 16; row < 20; row++) {
        hexagons[8][row].style.backgroundColor = '#0036A7';
    }
    hexagons[9][2].style.backgroundColor = '#000000';
    hexagons[9][9].style.backgroundColor = '#0036A7';
    hexagons[9][10].style.backgroundColor = '#0036A7';
    hexagons[9][11].style.backgroundColor = '#046A38';
    hexagons[9][12].style.backgroundColor = '#046A38';
    for (let row = 13; row < 16; row++) {
        hexagons[9][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[9][row].style.backgroundColor = '#0036A7';
    }
    for (let row = 1; row < 5; row++) {
        hexagons[10][row].style.backgroundColor = '#000000';
    }
    hexagons[10][0].style.backgroundColor = '#003DA5';
    hexagons[10][7].style.backgroundColor = '#DC143C';
    for (let row = 9; row < 12; row++) {
        hexagons[10][row].style.backgroundColor = '#DC143C';
    }
    hexagons[10][12].style.backgroundColor = '#046A38';
    for (let row = 13; row < 16; row++) {
        hexagons[10][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[10][row].style.backgroundColor = '#0036A7';
    }
    hexagons[11][0].style.backgroundColor = '#003DA5';
    for (let row = 1; row < 5; row++) {
        hexagons[11][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[11][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 16; row++) {
        hexagons[11][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[11][row].style.backgroundColor = '#0036A7';
    }
    hexagons[12][0].style.backgroundColor = '#003DA5';
    for (let row = 1; row < 5; row++) {
        hexagons[12][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[12][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 16; row++) {
        hexagons[12][row].style.backgroundColor = '#00AF66';
    }
    for (let row = 16; row < 20; row++) {
        hexagons[12][row].style.backgroundColor = '#0036A7';
    }
    hexagons[13][0].style.backgroundColor = '#FFCD00';
    for (let row = 1; row < 5; row++) {
        hexagons[13][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[13][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 19; row++) {
        hexagons[13][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[13][19].style.backgroundColor = '#0036A7';
    hexagons[14][0].style.backgroundColor = '#51ADDA';
    for (let row = 1; row < 5; row++) {
        hexagons[14][row].style.backgroundColor = '#000000';
    }
    for (let row = 5; row < 12; row++) {
        hexagons[14][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 20; row++) {
        hexagons[14][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[15][0].style.backgroundColor = '#000091';
    for (let row = 1; row < 4; row++) {
        hexagons[15][row].style.backgroundColor = '#000000';
    }
    hexagons[15][4].style.backgroundColor = '#11457E';
    hexagons[15][5].style.backgroundColor = '#11457E';
    for (let row = 6; row < 12; row++) {
        hexagons[15][row].style.backgroundColor = '#DC143C';
    }
    for (let row = 12; row < 20; row++) {
        hexagons[15][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[16][0].style.backgroundColor = '#000091';
    hexagons[16][1].style.backgroundColor = '#000091';
    for (let row = 4; row < 8; row++) {
        hexagons[16][row].style.backgroundColor = '#11457E';
    }
    hexagons[16][2].style.backgroundColor = '#000000';
    hexagons[16][3].style.backgroundColor = '#000000';
    for (let row = 12; row < 20; row++) {
        hexagons[16][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[17][0].style.backgroundColor = '#000091';
    hexagons[17][1].style.backgroundColor = '#000000';
    for (let row = 4; row < 8; row++) {
        hexagons[17][row].style.backgroundColor = '#11457E';
    }
    hexagons[17][2].style.backgroundColor = '#000000';
    hexagons[17][3].style.backgroundColor = '#000000';
    hexagons[18][2].style.backgroundColor = '#000000';
    hexagons[18][3].style.backgroundColor = '#000000';
    hexagons[16][8].style.backgroundColor = '#DC143C';
    hexagons[16][9].style.backgroundColor = '#0B4EA2';
    hexagons[16][11].style.backgroundColor = '#0B4EA2';
    hexagons[16][10].style.backgroundColor = '#DC143C';
    for (let row = 11; row < 19; row++) {
        hexagons[17][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[17][19].style.backgroundColor = '#0036A7';
    hexagons[18][0].style.backgroundColor = '#DA291C';
    hexagons[18][1].style.backgroundColor = '#DA291C';
    for (let row = 4; row < 7; row++) {
        hexagons[18][row].style.backgroundColor = '#EF3340';
    }
    for (let row = 12; row < 17; row++) {
        hexagons[18][row].style.backgroundColor = '#FFDD00';
    }
    hexagons[19][0].style.backgroundColor = '#DA291C';
    hexagons[19][1].style.backgroundColor = '#DA291C';
    for (let row = 2; row < 7; row++) {
        hexagons[19][row].style.backgroundColor = '#EF3340';
    }
    for (let row = 7; row < 11; row++) {
        hexagons[17][row].style.backgroundColor = '#0B4EA2';
    }
    for (let row = 7; row < 9; row++) {
        hexagons[18][row].style.backgroundColor = '#0B4EA2';
    }
    for (let row = 11; row < 13; row++) {
        hexagons[19][row].style.backgroundColor = '#CE1126';
    }
    for (let row = 13; row < 15; row++) {
        hexagons[19][row].style.backgroundColor = '#FFD100';
    }
    for (let row = 7; row < 11; row++) {
        hexagons[19][row].style.backgroundColor = '#477050';
    }
    for (let row = 9; row < 12; row++) {
        hexagons[18][row].style.backgroundColor = '#477050';
    }
    hexagons[19][15].style.backgroundColor = '#FFDD00';
}
let color;
const hexagons = [];
// Function to create hexagons in a grid
function createHexagons(rows, cols) {
    const hexMap = document.querySelector('.hexMap');
    const hexagonSize = 100;
    const hexagonSpacing = 20;
    for (let row = 0; row < rows; row++) {
        hexagons[row] = []; // Initialize an empty array for columns in each row
        for (let col = 0; col < cols; col++) {
            const hexagon = document.createElement('div');
            hexagon.classList.add('hexagon');
            hexagon.style.width = `${hexagonSize}px`;
            hexagon.style.height = `${hexagonSize}px`;

            const offset = (row % 2 === 0) ? 0 : hexagonSize * 0.375;
            hexagon.style.left = `${col * (hexagonSize * 0.75 + hexagonSpacing) + offset}px`;
            hexagon.style.top = `${row * (hexagonSize * 0.5 + hexagonSpacing)}px`;
            hexMap.appendChild(hexagon);

            // Add click event listener to each hexagon
            hexagon.addEventListener('click', () => {
            let index = [row, col]; // Pass index as an array
            console.log(index);
            color = hexagon.style.backgroundColor;
            console.log(color);
            let nation = getNationByColor(color);
            updateProvinceInfoBar(availableNations[nation], index);
            });

            hexagons[row][col] = hexagon; // Store hexagon in the 2D array
        }
    }

    setColor(hexagons); // Pass the 2D hexagons array to setColor
}

class Nation {
    constructor(name, color, HX) {
      this.name = name;
      this.color = color;
      this.HX = HX;
    }
}

// Function to get the nation by color
const availableNations = [
   new Nation('Poland', 'rgb(220, 20, 60)','#DC143C'),
   new Nation('Czechia', 'rgb(17, 69, 126)','#11457E'),
   new Nation('Russia', 'rgb(0, 54, 167)','#0036A7'),
   new Nation('Germany', 'rgb(0, 0, 0)','#000000'),
   new Nation('France', 'rgb(0, 0, 145)','#000091'),
   new Nation('Norway', 'rgb(186, 12, 47)','#BA0C2F'),
   new Nation('Sweden', 'rgb(254, 204, 2)','#FECC02'),
   new Nation('Finland', 'rgb(0, 47, 108)','#002F6C'),
   new Nation('Denmark', 'rgb(200, 16, 46)','#C8102E'),
   new Nation('Estonia', 'rgb(0, 114, 206)','#0072CE'),
   new Nation('Latvia','rgb(164, 52, 58)', '#002F6C'),
   new Nation('Lithuania', 'rgb(4, 106, 56)','#046A38'),
   new Nation('Netherlands','rgb(0, 61, 165)', '#003DA5'),
   new Nation('Belgium','rgb(255, 205, 0)', '#FFCD00'),
   new Nation('Luxembourg','rgb(81, 173, 218)', '#51ADDA'),
   new Nation('Ukraine', 'rgb(255, 221, 0)','#FFDD00'),
   new Nation('Switzerland', 'rgb(218, 41, 28)','#DA291C'),
   new Nation('Austria','rgb(239, 51, 64)', '#EF3340'),
   new Nation('Slovakia','rgb(11, 78, 162)', '#0B4EA2'),
   new Nation('Belarus','rgb(0, 175, 102)', '#00AF66'),
   new Nation('Hungary','rgb(71, 112, 80)', '#477050'),
   new Nation('Romania','rgb(206, 17, 38)', '#CE1126'),
   new Nation('Moldova','rgb(255, 209, 0)', '#FFD100'),
];
const seaColor = "";
function getNationByColor(color) {
    let n;
    n = availableNations.findIndex((nation) => nation.color === color);
    console.log(`Color checked: ${color}, Nation index: ${n}`); // Debugging log
    return n;
}

var mob = document.getElementById("add");
// Function to update the province info bar
function updateProvinceInfoBar(nation, index) {
    const provinceInfoBar = document.getElementById('provinceInfoBar');
    if (!nation) {
        provinceInfoBar.innerHTML = `<h3>Sea</h3>
        <p>Cordinates: ${index}</p>`;
    } else {
        provinceInfoBar.innerHTML = `
            <h3>${nation.name}</h3>
            <p>Cordinates: ${index}</p>
            <button id="add" type="button">Mobilize</button>
            
        `;
        if (color != selectedNationColor) {
            document.getElementById("add").style.display = "none";
        }
    }
    provinceInfoBar.style.display = 'block'; // Show the info bar
    console.log(`Nation updated in info bar: ${nation ? nation.name : 'No nation found'}`); // Debugging log

    // Update the mob variable with the new #add button element
    var mob = document.getElementById("add");
    if (mob) {
        mob.addEventListener("click", function() {
            spawnArmy(index);
        });
    }
}
var count;
var Procou = document.getElementById("provinCount");
// New function to count hexagons by color
function countHexagonsByColor(color) {
    const hexagons = document.querySelectorAll('.hexagon');
    count = 0;
    hexagons.forEach(hexagon => {
        if (hexagon.style.backgroundColor === color) {
            count++;
        }
    });
    count /= 2;
    count = Math.round(count);
    console.log(`Count of hexagons with color ${color}: ${count}`);
    let distex  =  count + " provinces";
    Procou.textContent = distex;
}

// Set an interval to count hexagons every minute
var selectedNationColor;
setInterval(() => {
    const nationSelect = document.getElementById('nation-select');
    const selectedNation = availableNations.find(nation => nation.name === nationSelect.value);
    selectedNationColor = selectedNation ? selectedNation.color : 'rgb(220, 20, 60)'; // Default color if none selected
    countHexagonsByColor(selectedNationColor);
}, 10000)

// Call the function with desired rows and columns
createHexagons(20, 20);

// WASD Scrolling Functionality
let offsetX = 0;
let offsetY = 0;

function scrollHexMap(event) {
    const hexMap = document.querySelector('.hexMap');
    const scrollSpeed = 10; // Speed of scrolling

    switch (event.key) {
        case 'w': // Move up
            offsetY += scrollSpeed;
            break;
        case 's': // Move down
            offsetY -= scrollSpeed;
            break;
        case 'a': // Move left
            offsetX += scrollSpeed;
            break;
        case 'd': // Move right
            offsetX -= scrollSpeed;
            break;
        case 'W': // Move up
            offsetY += scrollSpeed;
            break;
        case 'S': // Move down
            offsetY -= scrollSpeed;
            break;
        case 'A': // Move left
            offsetX += scrollSpeed;
            break;
        case 'D': // Move right
            offsetX -= scrollSpeed;
            break;
    }

    hexMap.style.transform = `translate(${offsetX}px, ${offsetY}px)`; // Apply translation
}

// Add event listener for keydown
document.addEventListener('keydown', scrollHexMap);

// Disable mouse wheel scrolling
window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scrolling behavior
}, { passive: false }); // Set passive to false to allow preventDefault

// Call the function with desired rows and columns
createHexagons(20, 20);

function chooseNation() {
    const nationContainer = document.getElementById('nationSelectionContainer');
    nationContainer.innerHTML = ''; // Clear any existing content

    const nationSelect = document.createElement('select');
    nationSelect.id = 'nation-select';

    availableNations.forEach((nation) => {
        const option = document.createElement('option');
        option.value = nation.name;
        option.text = nation.name;
        nationSelect.appendChild(option);
    });

    const nationButton = document.createElement('button');
    nationButton.textContent = 'Select Nation';
    nationButton.onclick = () => {
        const selectedNation = availableNations.find((nation) => nation.name === nationSelect.value);
        console.log(`Selected Nation: ${selectedNation.name}`); // Debugging log
        // Update the game state with the selected nation
        updateGameState(selectedNation);
        nationContainer.style.display = 'none'; // Hide the selection UI after selection
    };

    nationContainer.appendChild(nationSelect);
    nationContainer.appendChild(nationButton);
}

function updateGameState(selectedNation) {
    // Add logic to update the game state based on the selected nation
    // For example, update the nation flag, color, or other game elements
    const nationFlag = document.getElementById('nationflag');
    nationFlag.src = `${selectedNation.name.toLowerCase()}.png`; // Example: Update the flag image
    nationFlag.style.display = 'block'; // Show the flag
    console.log(`Game state updated for ${selectedNation.name}`); // Debugging log
    availableNations.push(new Nation('Sea','rgb(0, 170, 255)',' #00aaff'));
}

// Call the function to display the nation selection UI immediately
chooseNation();
let cash = 100;
var expenses = 0;
var profit;
let discash;
setInterval(() => {  
let income = count * 10;
discash = document.getElementById("cash");
profit = income - expenses;
cash += profit;
discash.innerText = cash + "$";
}, 10000 )

class unit {
    constructor(name, cost, health, attack, defense, image, speed) {
        this.name = name;
        this.cost = cost;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.image = image;
        this.speed = speed;
    }
}
const landUnits = [
    new unit("M1A1 Abrams", 50, 50, 10, 5,"tank1.png", 3),
    new unit("T80", 25, 40, 8, 5,"tank2.png", 2),
    new unit("F16", 20, 30, 12, 6,"f16.png", 15),
    new unit("towed artilerry", 7, 10, 4, 3,"towedArtillery.png", 12 ),
    new unit("infrantry", 10, 15, 6, 9, "infrantry.png", 11),
    new unit("Leopard 2", 38, 45, 9, 5,"tank3.png", 3)
];
function spawnArmy(index) {
    const armyContainer = document.getElementById('armyContainer');
    armyContainer.innerHTML = ''; // Clear any existing content

    const armySelect = document.createElement('select');
    armySelect.id = 'unit-select';

    landUnits.forEach((unit) => {
        const option = document.createElement('option');
        option.value = unit.name;
        option.text = unit.name + "/price:"  + unit.cost;
        armySelect.appendChild(option);
    });

    const armyButton = document.createElement('button');
    armyButton.textContent = 'Spawn Unit';
    armyButton.onclick = () => {
    const selectedUnitName = armySelect.value;
    const selectedUnit = landUnits.find((unit) => unit.name === selectedUnitName);
    console.log(`Spawned unit: ${selectedUnit.name}`); // Debugging log
    // Update the game state with the selected nation
    spawnNewForce(selectedUnit, index);
    armyContainer.style.display = 'none'; // Hide the selection UI after selection
};

    armyContainer.appendChild(armySelect);
    armyContainer.appendChild(armyButton);
    armyContainer.style.display = 'block'; // Show the selection UI
}
function getCountryFlag(index) {
    const country = getNationByColor(hexagons[index[0]][index[1]].style.backgroundColor);
    const countryName = availableNations[country].name.toLowerCase();
    console.log(`Country flag: flags/${countryName}.png`);
    return `${countryName}.png`;
}
const unitElement = document.createElement('div');
function spawnNewForce(unit, index) {
    // Check if the player has enough cash to spawn the unit
    if (cash >= unit.cost) {
        // Deduct the unit's cost from the player's cash
        cash -= unit.cost;
        discash.innerText = cash + "$";

        // Get the country flag image
        const countryFlag = getCountryFlag(index);

       // Create a new HTML element to represent the unit
        const unitElement = document.createElement('div');
        unitElement.classList.add('unit');
        unitElement.speed = unit.speed;
        unitElement.style.backgroundImage = `url(${unit.image})`;
        unitElement.style.width = '25px';
        unitElement.style.height = '15px';
        unitElement.style.position = 'absolute';
        

        const flagElement = document.createElement('img');
        flagElement.src = countryFlag;
        flagElement.style.width = '9px';
        flagElement.style.height = '6px';
        flagElement.style.position = 'absolute';
        flagElement.style.top = '5px';
        flagElement.style.left = '5px';
        unitElement.appendChild(flagElement);

        // Position the unit on the game map
        const hexagon = hexagons[index[0]][index[1]];
        const offsetLeft = parseInt(hexagon.style.left) || 0;
        const offsetTop = parseInt(hexagon.style.top) || 0;
        unitElement.style.left = `${offsetLeft + 40}px`;
        unitElement.style.top = `${offsetTop + 40}px`;

        // Add the unit to the game map
        let hexMap = document.querySelector('.hexMap');
        hexMap.appendChild(unitElement);

        
       // Create a manage bar for the unit
// Create a manage bar for the unit
let manageBar = document.createElement('div');
manageBar.classList.add('manage-bar');
manageBar.style.position = 'absolute'; // Add this line
manageBar.style.width = '90px';
manageBar.style.height = '150px';
document.body.appendChild(manageBar);
manageBar.style.zIndex = '1000';

// Create a close button for the manage bar
const closeButton = document.createElement('button');
closeButton.textContent = 'X';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
manageBar.appendChild(closeButton);

// Create a move button for the unit
const moveButton = document.createElement('button');
moveButton.textContent = 'Move';
manageBar.appendChild(moveButton);

// Create an attack button for the unit
const attackButton = document.createElement('button');
attackButton.textContent = 'Attack';
manageBar.appendChild(attackButton);

// Create a retreat button for the unit
const retreatButton = document.createElement('button');
retreatButton.textContent = 'Retreat';
manageBar.appendChild(retreatButton);

// Add the manage bar to the game map
let hexMapElement = document.querySelector('.hexMap');
hexMapElement.appendChild(manageBar); // Add this line

// Position the manage bar near the unit
    hexMap = document.querySelector('.hexMap');
let unitRect = unitElement.getBoundingClientRect();
let hexMapRect = hexMap.getBoundingClientRect();
manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;

        // Add event listeners to the buttons
function animateMovement(unitElement, targetRow, targetCol, currentIndex) {
    let hexagon = hexagons[currentIndex[0]][currentIndex[1]];
    let offsetLeft = parseInt(hexagon.style.left) || 0;
    let offsetTop = parseInt(hexagon.style.top) || 0;
    unitElement.style.left = `${offsetLeft + 40}px`;
    unitElement.style.top = `${offsetTop + 40}px`;

    let nextIndex = [currentIndex[0], currentIndex[1]];
    if (currentIndex[0] < targetRow) {
        nextIndex[0]++;
    } else if (currentIndex[0] > targetRow) {
        nextIndex[0]--;
    } else if (currentIndex[1] < targetCol) {
        nextIndex[1]++;
    } else if (currentIndex[1] > targetCol) {
        nextIndex[1]--;
    }

    if (nextIndex[0] === targetRow && nextIndex[1] === targetCol) {
        let targetHexagon = hexagons[targetRow][targetCol];
        let offsetLeft = parseInt(targetHexagon.style.left) || 0;
        let offsetTop = parseInt(targetHexagon.style.top) || 0;
        unitElement.style.left = `${offsetLeft + 40}px`;
        unitElement.style.top = `${offsetTop + 40}px`;

        // Update the hexagon's color to the chosen nation's color
        if (targetHexagon.style.backgroundColor !== selectedNationColor) {
    targetHexagon.style.backgroundColor = selectedNationColor;
    hexagons[targetRow][targetCol] = targetHexagon;
} else if (targetHexagon.style.backgroundColor === seaColor ) {
    console.log('Cannot conquer sea province');
}
        return;
    }

    currentIndex = nextIndex;

    setTimeout(() => {
        animateMovement(unitElement, targetRow, targetCol, currentIndex);
    }, 10000 / unitElement.speed);
}

moveButton.onclick = () => {
    let target = prompt("Enter the coordinates of the hexagon you want to move your troops to (e.g., '10,15'): ");
    let targetCoords = target.split(',').map(Number);
    let targetRow = targetCoords[0];
    let targetCol = targetCoords[1];

    if (targetRow < 0 || targetRow >= hexagons.length || targetCol < 0 || targetCol >= hexagons[0].length) {
        console.log('Invalid target coordinates');
        return;
    }

    let targetHexagon = hexagons[targetRow][targetCol];
    let targetColor = targetHexagon.style.backgroundColor;

    // Check if the target hexagon is a sea area
    if (targetColor === seaColor) {
        console.log('Cannot conquer sea province');
        return;
    }

    if (targetColor == Nation.color) {
        let stop = confirm("If you send army to the target, you can unluckly start a war. Are you going to continue?");
        if (stop === true) {
            return;
        }
    }

    let unitRect = unitElement.getBoundingClientRect();
    let hexMapRect = hexMap.getBoundingClientRect();
    let unitLeft = unitRect.left - hexMapRect.left;
    let unitTop = unitRect.top - hexMapRect.top;

    let currentIndex = [0, 0];
    for (let row = 0; row < hexagons.length; row++) {
        for (let col = 0; col < hexagons[row].length; col++) {
            let hexagon = hexagons[row][col];
            let offsetLeft = parseInt(hexagon.style.left) || 0;
            let offsetTop = parseInt(hexagon.style.top) || 0;
            if (unitLeft >= offsetLeft && unitLeft <= offsetLeft + 100 && unitTop >= offsetTop && unitTop <= offsetTop + 100) {
                currentIndex = [row, col];
                break;
            }
        }
    }

    animateMovement(unitElement, targetRow, targetCol, currentIndex);
}

unitElement.onclick = () => {
    manageBar.style.display = 'block';
    console.log('Unit element clicked');

    let hexMap = document.querySelector('.hexMap');
    let unitRect = unitElement.getBoundingClientRect();
    let hexMapRect = hexMap.getBoundingClientRect();
    manageBar.style.left = `${unitRect.left - hexMapRect.left + 60}px`;
    manageBar.style.top = `${unitRect.top - hexMapRect.top + 60}px`;
}
        attackButton.onclick = () => {
            
        }

        retreatButton.onclick = () => {
       
        };
        closeButton.onclick = () => {
            manageBar.style.display = 'none';
          }
        // Update the game state with the new unit
        console.log(`Spawned unit: ${unit.name} at index ${index}`);
    } else {
        console.log('Insufficient cash to spawn unit');
    }
}
