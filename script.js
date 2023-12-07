const XLSX = require("xlsx");


const workbook = XLSX.readfile ("Excel Formula Practice.xlsx");
const worksheet = workbook.Sheets["Oh"];

const arrOhCounties = XLSX.utils.sheet_to_json(worksheet);
console.lot(arrOhCounties);


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function GetCounties(state){
    // this returns a list of counties for the given <state> 
}

function GetCountyTax(state, county){
    // this returns the given state and county tax value
}

function GetCountyFees(state, county){
    // returns county fees
}

function PopulateCountyField(/*array of counties */){

}

function PopulateCountyTaxAndFees(tax, fees){

}

function CalculateTotal(){
    // user clicks submit and this function is called.
}

function StateWasSelected(state){
    GetCounties();
    PopulateCountyField();
}

function CountyWasSelected(state, county){
    GetCountyTax();
    GetCountyFees();
    PopulateTaxAndFees();
}

//Close dropdown menu when clicked away from it//

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i=0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns [i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

    }

}

