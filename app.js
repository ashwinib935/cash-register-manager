var billAmount = document.querySelector("#bill-amount");
var nextButton = document.querySelector("#btn-next");
var cashGivenLabel = document.querySelector("#cash-given-label");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#btn-check");
var message = document.querySelector("#message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var billAmountMessage = document.querySelector("#bill-amount-message");
var tableReturnChange = document.querySelector(".table-return-change");
billAmountMessage.style.display = "none";
cashGivenLabel.style.display = "none"
cashGiven.style.display = "none";
checkButton.style.display = "none";
tableReturnChange.style.display = "none";

nextButton.addEventListener("click", validateBillAmount);
checkButton.addEventListener("click", validateBillAmountandCashAmount);

var availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function validateBillAmount() {
    billAmountMessage.style.display = "none";
    if (Number(billAmount.value) < 0) {
        billAmountMessage.style.display = "block";
        billAmountMessage.innerText = "Invalid Bill amount! Amount should be greater than 0";
    }
    cashGivenLabel.style.display = "block";
    cashGiven.style.display = "initial";
    checkButton.style.display = "initial";
    tableReturnChange.style.display = "table";

}

function validateBillAmountandCashAmount() {
    hideMessage();
    if (Number(billAmount.value) >= 0) {
        hideMessage();
        if (Number(billAmount.value) == Number(cashGiven.value)) {
            showMessage("No change left! Thanks for the change");
        } else {
            if (Number(cashGiven.value) >= Number(billAmount.value)) {
                var amountTobeReturn = Number(cashGiven.value) - Number(billAmount.value)
                calculateAmountTobeReturn(amountTobeReturn);
            } else {
                showMessage("Do you waan wash plates? You have given less cash than Bill amount");
            }

        }
        checkButton.style.display = "block";
    } else {
        showMessage("Invalid Bill Amount");
    }


}

function hideMessage() {
    message.style.display = "none";
}


function showMessage(msg) {
    message.style.display = " block"
    message.innerText = msg;
}

function calculateAmountTobeReturn(amountTobeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {

        let calculatedNoOfNotes = Math.trunc(amountTobeReturn / availableNotes[i]);

        amountTobeReturn = amountTobeReturn % availableNotes[i];

        noOfNotes[i].innerText = calculatedNoOfNotes;
    }

}