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
getIncrease("firstClassTicketIncrease", "firstClass");
getIncrease("economyTicketIncrease", "secondClass");



//getIncrease function
function getIncrease(idName, ticketFor) {
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

    //increasing subtotal
    const subtotal = document.getElementById("subtotal");
    const presentSubtotal = parseInt(subtotal.innerText);
    var newSubtotal = presentSubtotal;
    if(idName == "firstClass"){
        newSubtotal = presentSubtotal + 150;
    }
    else if(idName == "secondClass"){
        newSubtotal = presentSubtotal + 100;
    }
    document.getElementById("subtotal").innerText = newSubtotal;
}



//decrease tickets and price
getDecrease("firstClassTicketDecrease", "firstClass");
getDecrease("economyTicketDecrease", "secondClass");



//calling decreasing function
function getDecrease(idName, ticketFor) {
    const ticketIncrease = document.getElementById(idName);
    ticketIncrease.addEventListener("click", () => {
        decreaseTickets(ticketFor);
    })
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