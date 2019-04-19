const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let places = [];

const domStringBuilder = (array) => {
    let domString = '';
    domString += `<div class="container">`;
    domString +=    `<div class="row">`;
    array.forEach((place) => {
        domString += `<div class="col col-9 col-sm-9 col-md-6 col-lg-4 d-flex align-items-stretch">`;
        domString +=    `<div class="placeCard shadow p-3 mb-5 bg-white rounded">`;
        domString +=        `<img class="placeImage" src="${place.cityImage}"></br>`;
        domString +=        `<h4>${place.cityName}, ${place.cityState}</h4>`;
        domString +=        `<p>Favorite bar: ${place.favoriteBar}</p>`;
        domString +=        `<p>Favorite restaurant: ${place.favoriteRestaurant}</p>`;
        domString +=        `<p>Favorite tourist attraction: ${place.favoriteTouristAttraction}</p>`;
        domString +=    `</div>`;
        domString +=  `</div>`;
    })
    domString +=    `</div>`;
    domString += `</div>`;
    printToDom('placeCards', domString);
};

function executeThisCodeAfterFileLoads(){
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