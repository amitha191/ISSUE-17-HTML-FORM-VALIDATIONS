
var billing_date = document.querySelector('#billing-date');
billing_date.addEventListener('change',validateDate);

function validateDate(){
    document.getElementById('date').value= billing_date.value;
}