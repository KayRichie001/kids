// Show Alphabet Learning Section
function showAlphabetSection() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('alphabet-section').classList.remove('hidden');
}

// Show Number Game Section
function showNumberGame() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('number-game').classList.remove('hidden');
}

// Go Back to Main Menu
function goBack() {
    document.getElementById('alphabet-section').classList.add('hidden');
    document.getElementById('number-game').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
}

function playLetterSound(letter) {
    let audio = new Audio(`media/${letter}.mpeg`);
    audio.play();
}


// Drag and Drop Logic for Number Game
let draggables = document.querySelectorAll('.draggable');
let dropZones = document.querySelectorAll('.drop-zone');
let correctDrops = 0;//To track the correct drops

draggables.forEach(item=>{
    item.addEventListener('dragstart', dragStart);
});
dropZones.forEach(zone=>{
    zone.addEventListener('dragover',dragOver);
    zone.addEventListener('drop',dropItem);
});

function dragStart(e){
    e.dataTransfer.setData('text/plain',e.target.dataset.number);
}

function dragOver(e){
    e.preventDefault();
}

function dropItem(e){
    const draggedNumber = e.dataTransfer.getData('text/plain');
    if (draggedNumber=== e.target.dataset.number){
         e.target.textContent = 'Dropped ' + draggedNumber;
         e.target.style.backgroundColor = '#90ee90';
         correctDrops++;
         checkCompletion();
    }
else {
    alert('Wrong number!');
}
   
}

function checkCompletion(){
    if(correctDrops === dropZones.length){
        document.getElementById('congrats-message').classList.remove('hidden');
    }
}
function resetGame(){
    correctDrops = 0;
    dropZones.forEach(zone=>{
        zone.textContent = 'Drop ${zone.dataset.number}here';
        zone.style.backgroundColor = '#fffacd';
    });
    document.getElementById('congrats-message').classList.add('hidden');
}

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', handleDragStart);
// });

// dropZones.forEach(dropZone => {
//     dropZone.addEventListener('dragover', handleDragOver);
//     dropZone.addEventListener('drop', handleDrop);
// });

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.number);
}

function handleDragOver(e) {
    e.preventDefault();
}

//Display letter Image
function displayLetter(letter){
    const letterDisplay = document.getElementById('letter-display');
    letterDisplay.innerHTML = '<img src="media/${letter).png" alt="${letter}">';

}
