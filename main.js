//confirmation for booking

const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", () => {
    const confirmBooking = document.getElementById("confirmBooking").style.display = "block";
    const hideDisplay = document.querySelectorAll(".signInPage");
    for (var i = 0; i < hideDisplay.length; i++) {
        hideDisplay[i].style.display = "none";
    }
    document.getElementById("image").img.style.display = 'none';
})

//increase tickets and price

getIncrease("firstClassTicketIncrease");
getIncrease("economyTicketIncrease");

//tickets increase function calling
// function getIncrease(idName) {
//     if (idName == "firstClassTicketIncrease") {
//         const ticketIncrease = document.getElementById("firstClassTicketIncrease");
//         firstClassTicketIncrease.addEventListener("click", () => {
//             increaseTickets("firstClass");
//         })
//     }
//     else if (idName == "economyTicketIncrease") {
//         const economyTicketIncrease = document.getElementById("economyTicketIncrease");
//         economyTicketIncrease.addEventListener("click", () => {
//             increaseTickets("secondClass");
//         })
//     }
// }

function clickHandler(idName, ticketFor) {
    const ticketIncrease = document.getElementById(idName);
    ticketIncrease.addEventListener("click", () => {
        increaseTickets(ticketFor);
    })
}

//increasing tickets quantity
function increaseTickets(idName) {
    const ticketCount = document.getElementById(idName).value;
    const presentTicket = parseInt(ticketCount);
    var totalTickets = presentTicket + 1;
    document.getElementById(idName).value = totalTickets;
}

//decrease tickets and price

getDecrease("firstClassTicketDecrease");
getDecrease("economyTicketDecrease");


//calling decreasing function
function getDecrease(idName) {
    if (idName == "firstClassTicketDecrease") {
        const ticketDecrease = document.getElementById("firstClassTicketDecrease");
        firstClassTicketDecrease.addEventListener("click", () => {
            decreaseTickets("firstClass");
        })
    }
    else if (idName == "economyTicketDecrease") {
        const economyTicketDecrease = document.getElementById("economyTicketDecrease");
        economyTicketDecrease.addEventListener("click", () => {
            decreaseTickets("secondClass");
        })
    }
}

//decreasing tickets quantity
function decreaseTickets(idName) {
    const ticketCount = document.getElementById(idName).value;
    const presentTicket = parseInt(ticketCount);
    if (presentTicket > 0) {
        var totalTickets = presentTicket - 1;
        document.getElementById(idName).value = totalTickets;
    }
}