const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1; //January is 0!
const yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;

const startDateInput = document.getElementById('date-start')
const endDateInput = document.getElementById('date-end')

startDateInput.setAttribute("max", today);
endDateInput.setAttribute("max", today);