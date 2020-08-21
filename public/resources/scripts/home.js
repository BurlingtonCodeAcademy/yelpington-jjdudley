// display map centered on downtown Burlington
let myMap = L.map('map').setView([44.48, -73.21], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)


function getRestaurants() {
    // fetch request to grab json for all restaurants from the API endpoint
    fetch('https://yelpingtonapi.herokuapp.com/api/restaurants')
        .then(res => res.json())
        .then(json => {
            let restaurantArr = json;
            let count = 0;
            const navBar = document.getElementById('nav_bar');
            restaurantArr.forEach((restaurant) => {

                //generate list item for restaurant
                let restaurantItem = document.createElement('li');
                restaurantItem.innerText = restaurant.id;
                restaurantItem.setAttribute('id', count);
                restaurantItem.className = "restaurant-item";
                restaurantItem.addEventListener('click', viewRestaurant);
                navBar.appendChild(restaurantItem);

                // add restaurant marker to the map
                const marker = L.marker(restaurant.coords).addTo(myMap);
                marker.addEventListener('click', viewRestaurant)
                
                // function to view restaurant page (restaurant is identified by index in restaurant array, which is tracked with the "count" variable)
                function viewRestaurant() {
                    window.location = `/Restaurant#${restaurant.id}`;
                }

                count++;
            })
        })
}

getRestaurants();



