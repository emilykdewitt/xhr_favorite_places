//XHR stands for XML HTTP Request

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let places = [];

const domStringBuilder = (array) => {
    let domString = '';
    array.forEach((place) => {
        domString += `<div class="container">`;
        domString +=    `<div class="row">`;
        domString +=        `<div class="col-4">`;
        domString +=            `<h3>${place.cityName}, ${place.cityState}`;
        domString +=            `<img src="${place.cityImage}">`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    })
    printToDom('placeCards', domString);
};

function executeThisCodeAfterFileLoads(){ //DON'T USE A FAT ARROW!
    const data = JSON.parse(this.responseText);
    places = data.favoritePlaces;
    console.log('dataLoad 1 OK');
    domStringBuilder(data.favoritePlaces);
    console.log('dataLog 2 OK');
};

function executeThisCodeIfXHRFails(){
    console.error('oh shit');
};

const getPlacesData = () => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
    myRequest.addEventListener('error', executeThisCodeIfXHRFails);
    myRequest.open('GET', './db/places.json');
    myRequest.send();
    console.log(myRequest);
};

const init = () => {
    getPlacesData();
};

init();