function getRestaurant() {
    // fetch request to grab json for all restaurants from the API endpoint
    fetch('https://yelpingtonapi.herokuapp.com/api/restaurants')
        .then(res => res.json())
        .then(json => {
            restaurantArr = json;
            restaurantArr.forEach((restaurant) => {

                //cycle through restaurants array & stop once reaching restaurant with name that corresponds to the name in the URL (stored from the clicked element on home page)
                if(restaurant.id === document.location.hash.slice(1)) {

                    // select text elements for the restaurant's information
                    let restaurantName = document.getElementById("restaurantName");
                    let restaurantAddress = document.getElementById("restaurantAddress");
                    let restaurantCoords = document.getElementById("restaurantCoords");

                    // set text value of element to corresponding restaurant property
                    restaurantName.innerText = restaurant.name;
                    restaurantAddress.innerText = restaurant.address;
                    restaurantCoords.innerText = restaurant.coords;

                    // generate map centered on restaurant
                    let myMap = L.map('map').setView(restaurant.coords, 17)
                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	                maxZoom: 19,
	                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    }).addTo(myMap)

                    // add marker on restaurant
                    L.marker(restaurant.coords).addTo(myMap);
                    return;
                }
            })
        })
}

getRestaurant();