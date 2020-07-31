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
    //document.querySelector('body').style.height = '200%'
})



//Create element list
const list = document.querySelector('#asking-favorite-places ul');
const addPlacesForm = document.forms["favorite-places"];
let listCount = 0;

addPlacesForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addPlacesForm.querySelector("input[type='text']").value;
    const li = document.createElement('li');
    const placeName = document.createElement('span');
    const deleteButton = document.createElement('span');
    if (listCount === 2) {
        document.getElementById('letUsKnow').innerHTML = 'Thank you for letting us know!'
        document.querySelector('#favorite-places').style.display = 'none'
    }
    //if (value.length > 0) {
        placeName.textContent = value;
        deleteButton.textContent = 'Delete'; 
        placeName.classList.add('answer');
        deleteButton.classList.add('delete');

        li.appendChild(placeName);
        li.appendChild(deleteButton);
        list.appendChild(li);
        listCount++;
    //}
})

//Delete Button
list.addEventListener('click', function(e){
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li);
        listCount--;
    }
    if (listCount < 3) {
        document.getElementById('letUsKnow').innerHTML = 'Let us know your top 3 places you want to visit in Indonesia!'
        document.querySelector('#favorite-places').style.display = 'block' 
    }
})