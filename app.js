let restaurantArr;

// MARKERS ////////////////////////////////

let myMap = L.map('map').setView([44.48, -73.21], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)


let restaurantList = [];



function getRestaurants() {
    fetch('https://yelpingtonapi.herokuapp.com/api/restaurants')
        .then(res => res.json())
        .then(json => {
            restaurantArr = json;
            let count = 0;
            const navBar = document.getElementById('nav_bar');
            restaurantArr.forEach((restaurant) => {
            restaurantList.push(restaurant);
            let restaurantItem = document.createElement('li');
            restaurantItem.innerText = restaurant.id;
            restaurantItem.setAttribute('id', count);
            navBar.appendChild(restaurantItem);

            const marker = L.marker(restaurant.coords).addTo(myMap);
            count++;
            //let marker = L.marker(restaurant.coords).addTo(myMap);
            })
        })
}







getRestaurants();
console.log(restaurantList)



