// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');


// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');
const storyParagraph = document.getElementById('story');

// Constants for final buttons and p tags
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');

// Variables for pre-defined arrays
var nouns = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'ate','danced with', 'saw', 'doesn\'t', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a slimy', 'a barking', 'a fat'];
var noun2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];
// Variables for count to grab array elements
let selectedNoun1 = '';
let selectedVerb = '';
let selectedAdjective = '';
let selectedNoun2 = '';
let selectedSetting = '';

/* Functions    
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    selectedNoun1 = getRandomElement(nouns);
    choosenNoun1.textContent = selectedNoun1;
    // if-else to change count setting
    if (selectedNoun1 !== '') {
        // Change count setting if the element is selected
        // Add your logic here
    } else {
        // Add alternative logic if the element is not selected
    }
}

function verb_on_click() {
    selectedVerb = getRandomElement(verbs);
    choosenVerb.textContent = selectedVerb;
    if (selectedVerb !== '') {
        // Change count setting if the element is selected
        // Add your logic here
    } else {
        // Add alternative logic if the element is not selected
    }
    
}

function adjective_on_click() {
    selectedAdjective = getRandomElement(adjectives);
    choosenAdjective.textContent = selectedAdjective;
    if (selectedAdjective !== '') {
        // Change count setting if the element is selected
        // Add your logic here
    } else {
        // Add alternative logic if the element is not selected
    }
}

function noun2_on_click() {
    selectedNoun2 = getRandomElement(noun2);
    choosenNoun2.textContent = selectedNoun2;
    if (selectedNoun2 !== '') {
        // Change count setting if the element is selected
        // Add your logic here
    } else {
        // Add alternative logic if the element is not selected
    }
}

function setting_on_click() {
    selectedSetting = getRandomElement(settings);
    choosenSetting.textContent = selectedSetting;
    if (selectedSetting !== '') {
        // Change count setting if the element is selected
        // Add your logic here
    } else {
        // Add alternative logic if the element is not selected
    }
}

// concatenate the user story and display
function playback_on_click() {
    if (selectedNoun1 !== '' && selectedVerb !== '' && selectedAdjective !== '' && selectedNoun2 !== '' && selectedSetting !== '') {
        // Concatenate and display story only if all elements are selected
        const userStory = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}`;
        storyParagraph.textContent = userStory;
    } else {
        // Display an error or alternative message if any element is not selected
        storyParagraph.textContent = 'Please select all elements to generate the story.';
    }
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);
playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);

function showStudentInfo() {
    var studentID = "200553841";
    var studentName = "Arshpreet Singh Guray";

    var infoText = "Student ID: " + studentID + "<br>Student Name: " + studentName;

    document.getElementById("studentInfo").innerHTML = infoText;
}

