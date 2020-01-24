//Initalize with current date, month, & year;
let today = new Date();
let currMonth = today.getMonth();
let currYear = today.getFullYear();

//Initalize All Months
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//Get correct # of days of the year (ie leap years for Feb);
const daysInMonth = (m, y) => 32 - new Date(y, m, 32).getDate();

const header = document.querySelector(".header");
const table = document.querySelector(".calendar-body");


//Calender Table Creator;
const show = (month, year) => {
    let dayOne = (new Date(year, month)).getDay();
    let date = 1; //start date
    let childCell, childCellText;

    //Make sure only one table displays
    table.innerHTML = "";
    header.innerHTML = months[month] + " " + year;

    //Weeks
    for(let i = 0; i < 6; i += 1) {
        let row = document.createElement("tr"); //Create Rows;

        //Days
        for(let j = 0; j < 7; j += 1) {

            if (i === 0 && j < dayOne) {
                //Node Creation
                childCell = document.createElement("td");
                childCellText = document.createTextNode("");

                //Append blank Cell to row;
                childCell.appendChild(childCellText);
                row.appendChild(childCell);
            }

            else if (date > daysInMonth(month, year)) break; //Reset if greater than current number of days

            else {
                //Node Creation
                childCell = document.createElement("td");
                childCellText = document.createTextNode(date);

                //Detect for Sundays & Saturdays & make them red
                if(j === 0 || j === 6) childCell.style.color = "red";

                //Append Cell to Rows;
                childCell.appendChild(childCellText);
                row.appendChild(childCell);

                date += 1;
            }
        }
        table.appendChild(row); // appending each row into calendar body.
    }
}

show(currMonth, currYear);

const next = () => {
    currYear = (currMonth === 11) ? currYear + 1 : currYear;
    currMonth = (currMonth + 1) % 12;
    show(currMonth, currYear);
}

const previous = () => {
    currYear = (currMonth === 0) ? currYear - 1 : currYear;
    currMonth = (currMonth === 0) ? 11 : currMonth - 1;
    show(currMonth, currYear);
}