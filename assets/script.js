btnBalance = document.querySelector(".btn__balance");
btnDeposit = document.querySelector(".btn__deposit");
btnWithdrawal = document.querySelector(".btn__withdrawal");
btnAccountName = document.querySelector(".btn__account-name");
btnExit = document.querySelector(".btn__exit");
btnClear = document.querySelector(".btn__clear");
enter = document.querySelector(".btn__enter");

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

    //
    enterInput: enter.addEventListener("click", () => {
        let inputValue = parseInt(document.querySelector(".input-field").value);

        if (
            document.querySelector(".message").innerHTML === "(€3 withdrawal fee) Please, enter an amount" &&
            inputValue > 10 &&
            inputValue < account.balance
        ) {
            account.balance -= inputValue + 3;
            document.querySelector(".message").innerHTML = "The amount has been deducted from Your account.";
            document.querySelector(".input-field").value = 0;
        } else if (inputValue < 10) {
            document.querySelector(".message").innerHTML = "Please, enter an amount rounded up to nearest €10.";
        } else if (inputValue > account.balance) {
            document.querySelector(
                ".message"
            ).innerHTML = `Your balance is €${account.balance}. Please enter new amount.`;
        } else if (document.querySelector(".message").innerHTML === "Please, enter an amount" && inputValue > 10) {
            account.balance += inputValue;
            document.querySelector(".message").innerHTML = "The amount has been deposited to Your account.";
            document.querySelector(".input-field").value = 0;
        } else {
            return;
        }
    }),
};
