// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1 = document.querySelector('#noun1');
const verb = document.querySelector('#verb');
const adjective = document.querySelector('#adjective');
const noun2 = document.querySelector('#noun2');
const setting = document.querySelector('#setting');


// Constants for p tag to display query selectors
const choosenNoun1 = document.querySelector('#choosenNoun1');
const choosenVerb = document.querySelector('#choosenVerb');
const choosenAdjective = document.querySelector('#choosenAdjective');
const choosenNoun2 = document.querySelector('#choosenNoun2');
const choosenSetting = document.querySelector('#choosenSetting');


// Constants for final buttons and p tags
const playback = document.querySelector('#playback');
const random = document.querySelector('#random');
const reset = document.querySelector('#reset');

const story = document.querySelector('#story');
const studentId = document.querySelector('#studentId')


// Variables for pre-defined arrays
const noun1List = ['The Turkey', 'Mom', 'Dad', 'My Teacher', 'Dog', 'The Elephant', 'The cat'];
const verbList = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectiveList = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const noun2List = ['goat', 'monkey', 'fish', 'cow', 'frog', 'buffalo', 'snake', 'bug', 'worm'];
const settingList = ['on the moon', 'on the chair', 'in my lap', 'in my bag', 'in your pocket', 'on the grass', 'in my shoes'];


// Variables for count to grab array elements
var noun1Counter = 0;
var verbCounter = 0;
var adjectiveCounter = 0;
var noun2Counter = 0;
var settingCounter = 0;


/* Functions
-------------------------------------------------- */

//function to add my student id: 200553438
function my_student_id(){
    const id = '200553438';
    studentId.textContent = `My Student ID: ${id}`;
}



function noun1_on_click() {
    // variable to get array element and displaying it
    // changing the text in para by selecting a random index element out of noun1List

    choosenNoun1.textContent = noun1List[noun1Counter];
    
    // if-else to change count setting
    noun1Counter = noun1Counter + 1;
    if (noun1Counter==noun1List.length){
        noun1Counter = 0;
    }

    // chooseNoun1.textContent = noun1List[Math.floor(Math.random()*noun1List.length)];
}

function verb_on_click() {
    // updating the text of verb area after click event on verb button
    choosenVerb.textContent = verbList[verbCounter];
    verbCounter = verbCounter + 1;
    // checking for valid counter values
    if (verbCounter==verbList.length){
        verbCounter = 0;
    }
    
}

function adjective_on_click() {
    // updating the text of adjective area after click event on adjective button
    choosenAdjective.textContent = adjectiveList[adjectiveCounter];
    adjectiveCounter = adjectiveCounter + 1;
    if (adjectiveCounter==adjectiveList.length){
        adjectiveCounter = 0;
    }
    
}

function noun2_on_click() {
    // updating the text of noun 2 area after click event on noun 2 button
    choosenNoun2.textContent = noun2List[noun2Counter];
    noun2Counter = noun2Counter + 1;
    if (noun2Counter==noun2List.length){
        noun2Counter = 0;
    }
    
}

function setting_on_click() {
    // updating the text of setting area after click event on setting button
    choosenSetting.textContent = settingList[settingCounter];
    settingCounter = settingCounter + 1;
    if (settingCounter==settingList.length){
        settingCounter = 0;
    }

    
}

// concatenate the user story and display
function playback_on_click() {
    // adding variables into a single string and displaying it in story paragraph
    story.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}`

    // calling the student id function after a story is created successfully
    my_student_id();
    
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // assigning random values to the constants for each element of the story
    // using Math.random() module to generate a random value in the range of the array
    choosenNoun1.textContent = noun1List[Math.floor(Math.random()*noun1List.length)];
    choosenVerb.textContent = verbList[Math.floor(Math.random()*verbList.length)];
    choosenAdjective.textContent = adjectiveList[Math.floor(Math.random()*adjectiveList.length)];
    choosenNoun2.textContent = noun2List[Math.floor(Math.random()*noun2List.length)];
    choosenSetting.textContent = settingList[Math.floor(Math.random()*settingList.length)];

    // displaying the story with the selected random indices from the stored arrays
    playback_on_click();
    
}

// resetting the canvas (game) on clicking reset button
function reset_on_click(){
    choosenNoun1.textContent = "";
    choosenVerb.textContent = "";
    choosenAdjective.textContent = "";
    choosenNoun2.textContent = "";
    choosenSetting.textContent = "";
    story.textContent = "";

}

/* Event Listeners
-------------------------------------------------- */
// for buttons in the userSpace
noun1.addEventListener('click', noun1_on_click);
verb.addEventListener('click', verb_on_click);
adjective.addEventListener('click', adjective_on_click);
noun2.addEventListener('click', noun2_on_click);
setting.addEventListener('click', setting_on_click);

// for buttons in the opt area
playback.addEventListener('click', playback_on_click);
random.addEventListener('click', random_on_click);
reset.addEventListener('click', reset_on_click);