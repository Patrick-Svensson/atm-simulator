const btnBalance = document.querySelector(".btn__balance");
const btnDeposit = document.querySelector(".btn__deposit");
const btnWithdrawal = document.querySelector(".btn__withdrawal");
const btnAccountName = document.querySelector(".btn__account-name");
const btnExit = document.querySelector(".btn__exit");
const btnClear = document.querySelector(".btn__clear");
const enter = document.querySelector(".btn__enter");

const account = {
    accountName: "Jane Doe",
    balance: 100,
    getBalance: btnBalance.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `&#8364;${account.balance}`;
    }),

    deposit: btnDeposit.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = "Please, enter an amount";
        document.querySelector(".input-field").value = 0;
        document.querySelector(".input-field").focus();
        document.querySelector(".input-field").select();
    }),

    withdrawal: btnWithdrawal.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = "(€3 withdrawal fee) Please, enter an amount";
        document.querySelector(".input-field").value = 0;
        document.querySelector(".input-field").focus();
        document.querySelector(".input-field").select();
    }),

    getAccountName: btnAccountName.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `${account.accountName}`;
    }),

    exitAccount: btnExit.addEventListener("click", () => {
        return window.location.assign("../../index.html");
    }),

    clearMessage: btnClear.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = "PRESS BUTTON TO CHOOSE ACTION";
        document.querySelector(".input-field").value = 0;
    }),

    // Using parseInt to convert the text input from a string to an integer (would have used parseFloat if I needed decimals).

    enterInput: enter.addEventListener("click", () => {
        let inputValue = parseInt(document.querySelector(".input-field").value);

        if (
            document.querySelector(".message").innerHTML === "(€3 withdrawal fee) Please, enter an amount" &&
            inputValue > 1 &&
            inputValue < account.balance &&
            inputValue % 10 === 0
        ) {
            account.balance -= inputValue + 3;
            document.querySelector(".message").innerHTML = "The amount has been deducted from Your account.";
            document.querySelector(".input-field").value = 0;
        } else if (
            document.querySelector(".message").innerHTML === "(€3 withdrawal fee) Please, enter an amount" &&
            inputValue > account.balance &&
            inputValue > 9
        ) {
            document.querySelector(".message").innerHTML = `Your balance is €${account.balance} Please enter new amount.`;
        } else if (
            document.querySelector(".message").innerHTML === "Please, enter an amount" &&
            inputValue > 1 &&
            inputValue % 10 === 0
        ) {
            account.balance += inputValue;
            document.querySelector(".message").innerHTML = "The amount has been deposited to Your account.";
            document.querySelector(".input-field").value = 0;
        } else {
            document.querySelector(".message").innerHTML = "Please, enter an amount rounded up to nearest €10.";
        }
    }),
};

// I chose if/else because the conditions are few and, frankly, it gave me an easier ride.
