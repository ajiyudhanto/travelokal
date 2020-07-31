var customerName = document.getElementById('name-form');
console.log(customerName.value);

//Get customer name
const addForm = document.forms["name-form"];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;
    //console.log(value);
    document.querySelector('#landing-page').style.display = 'none'
    document.querySelector('#home').style.display = 'flex'
    document.getElementById("welcome").innerHTML = `Hi <strong style=color:royalblue;>${document.getElementById("gender").value} ${value}</strong>! Welcome to Travelokal.com`
})

//Create element list