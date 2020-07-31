// var customerName = document.getElementById('name-form');
// console.log(customerName.value);

//Get customer name
const addNameForm = document.forms["name-form"];

addNameForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addNameForm.querySelector("input[type='text']").value;
    //console.log(value);
    document.querySelector('#landing-page').style.display = 'none'
    document.querySelector('#home').style.display = 'flex'
    document.getElementById("welcome").innerHTML = `Hi <strong style=color:royalblue;>${document.getElementById("gender").value} ${value}</strong>! Welcome to Travelokal.com`
})

//Create element list
const list = document.querySelector('#asking-favorite-places ul');
const addPlacesForm = document.forms["favorite-places"];

addPlacesForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addPlacesForm.querySelector("input[type='text']").value;
    const li = document.createElement('li');
    const placeName = document.createElement('span');
    const deleteButton = document.createElement('span');

    placeName.textContent = value;
    deleteButton.textContent = 'Delete'; 
    placeName.classList.add('answer');
    deleteButton.classList.add('delete');

    li.appendChild(placeName);
    li.appendChild(deleteButton);
    list.appendChild(li);
})

list.addEventListener('click', function(e){
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})