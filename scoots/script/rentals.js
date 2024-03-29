const dataURL = 'https://minenyaraya.github.io/wdd230/scoots/data/data.json';
const listDiv = document.querySelector('.list-view');
const cardDiv = document.querySelector('.grid-view');

fetch(dataURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObject) => {
        console.table(jsonObject);

        const rentals = jsonObject['rentals'];
        rentals.forEach(displayRentalsInGrid);
        rentals.forEach(displayRentalsInList);
    });

    function displayRentalsInGrid(rental) {

        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let image = document.createElement('img');
        let hr = document.createElement('hr');
        let capacity = document.createElement('p');
        let reservationHDay = document.createElement('p');
        let walkInHDay = document.createElement('p');
        let reservationDay = document.createElement('p');
        let walkInDay = document.createElement('p');

        

        h2.textContent = `${rental.title}`
        capacity.textContent = `${rental.capacity}`
        reservationHDay.textContent = `${rental.reservationHDay}`
        walkInHDay.textContent = `${rental.walkInHDay}`
        reservationDay.textContent = `${rental.reservationDay}`
        walkInDay.textContent = `${rental.walkInDay}`
        
        
        image.setAttribute("src", rental.image);
        image.setAttribute("alt", `Image of ${rental.title}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width","200");
        image.setAttribute("height","140");
       
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(hr);
        card.appendChild(capacity);
        card.appendChild(reservationHDay);
        card.appendChild(walkInHDay);
        card.appendChild(reservationDay);
        card.appendChild(walkInDay);
            
        cardDiv.appendChild(card);
    }

    function displayBusinessesInList(rental) {

        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let capacity = document.createElement('p');
        let reservationHDay = document.createElement('p');
        let walkInHDay = document.createElement('p');
        let reservationDay = document.createElement('p');
        let walkInDay = document.createElement('p');

        h2.textContent = rental.title
        capacity.textContent = rental.capacity
        reservationHDay.textContent = rental.reservationHDay
        walkInHDay.textContent = rental.walkInHDay
        reservationDay.textContent = rental.reservationDay
        walkInDay.textContent = rental.walkInDay
        
       
        card.appendChild(h2);
        card.appendChild(capacity);
        card.appendChild(reservationHDay);
        card.appendChild(walkInHDay);
        card.appendChild(reservationDay);
        card.appendChild(walkInDay);
            
        listDiv.appendChild(media_card);
    }

// Script for Grid and List Views
let viewsButtons = document.querySelectorAll('.links ul li');
let views = document.querySelectorAll('.view-div');

viewsButtons.forEach((link) => {
    link.addEventListener('click', () => {
        viewsButtons.forEach((item) => {
            item.classList.remove('active');
        })
        link.classList.add('active');
        
        let li_view = link.getAttribute('data-view');

        views.forEach((view) => {
            view.style.display = 'none';
        })
        
        if (li_view == 'grid-view') {
            document.querySelector('.' + li_view).style.display = 'grid';
        } else {
            document.querySelector('.' + li_view).style.display = 'block';
        }
    })

})