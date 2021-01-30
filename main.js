//increase tickets and price
getIncrease("firstClassTicketIncrease", "firstClass");
getIncrease("economyTicketIncrease", "economyClass");



//getIncrease function
function getIncrease(idName, ticketFor) {
    const ticketIncrease = document.getElementById(idName);
    ticketIncrease.addEventListener("click", () => {
        increaseTickets(ticketFor);
    })
}



//increasing tickets quantity and price
function increaseTickets(idName) {
    const ticketCount = document.getElementById(idName).value;
    const presentTicket = parseInt(ticketCount);
    var totalTickets = presentTicket + 1;
    document.getElementById(idName).value = totalTickets;

    //increasing subtotal
    const subtotal = document.getElementById("subtotal");
    const presentSubtotal = parseInt(subtotal.innerText);
    var newSubtotal;
    if (idName == "firstClass") {
        newSubtotal = presentSubtotal + 150;
    }
    else if (idName == "economyClass") {
        newSubtotal = presentSubtotal + 100;
    }
    document.getElementById("subtotal").innerText = newSubtotal;

    totalTaxCount();
    maxTotal();
}



//decrease tickets and price
getDecrease("firstClassTicketDecrease", "firstClass");
getDecrease("economyTicketDecrease", "economyClass");



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

        //decreasing subtotal
        const subtotal = document.getElementById("subtotal");
        const presentSubtotal = parseInt(subtotal.innerText);
        var newSubtotal = presentSubtotal;
        if (idName == "firstClass") {
            newSubtotal = presentSubtotal - 150;
        }
        else if (idName == "economyClass") {
            newSubtotal = presentSubtotal - 100;
        }
        document.getElementById("subtotal").innerText = newSubtotal;

        totalTaxCount(); //total tax count function
        maxTotal();     //max total count function
    }
}



//Total tax count function
function totalTaxCount() {
    const subtotal = document.getElementById("subtotal").innerText;
    var newSubtotal = parseInt(subtotal);
    const tax = document.getElementById("tax");
    const taxNumber = parseInt(tax.innerText);
    var totalTax = (newSubtotal * 10) / 100;
    document.getElementById("tax").innerText = totalTax;
}



//Max Total count function
function maxTotal() {
    const totalTax = document.getElementById("tax").innerText;
    const totalTaxNumber = parseInt(totalTax);
    const subtotal = document.getElementById("subtotal").innerText;
    const newSubtotal = parseInt(subtotal);
    const total = document.getElementById("maxTotal");
    const maxTotalNumber = parseInt(total.innerText);
    var maxTotal = newSubtotal + totalTaxNumber;
    document.getElementById("maxTotal").innerText = maxTotal;
}



//confirmation for booking
const bookNow = document.getElementById("bookNow");
bookNow.addEventListener("click", () => {
    const confirmBooking = document.getElementById("confirmBooking").style.display = "block";
    const hideDisplay = document.querySelectorAll(".signInPage");
    for (var i = 0; i < hideDisplay.length; i++) {
        hideDisplay[i].style.display = "none";
    }

    //showing confirmation
    const ticketFirst = document.getElementById("firstClass").value;
    const ticketEconomy = document.getElementById("economyClass").value;
    const totalPrice = document.getElementById("maxTotal").innerText;
    
    document.getElementById("firstTicket").innerText = ticketFirst;
    document.getElementById("economyTicket").innerText = ticketEconomy;
    document.getElementById("confirmTotal").innerText = totalPrice;
})
