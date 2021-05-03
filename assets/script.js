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
    deposit: btnDeposit.addEventListener("click", function () {
        document.querySelector(".message").innerHTML = "Type the amount";
        document.querySelector(".input-field").focus();
        document.querySelector(".input-field").select();
    }),
    withdrawal: btnWithdrawal.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `(€3 withdrawal fee) Type the amount`;
        document.querySelector(".input-field").focus();
        document.querySelector(".input-field").select();
    }),
    getAccountName: btnAccountName.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `${account.accountName}`;
    }),
    accountError: function () {},
    exitAccount: btnExit.addEventListener("click", () => {
        return window.location.assign("../../index.html");
    }),
    clearMessage: btnClear.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `PRESS BUTTON TO CHOOSE ACTION`;
        document.querySelector(".input-field").value = 0;
    }),
};

enter.addEventListener("click", () => {
    let inputValue = parseInt(document.querySelector(".input-field").value);

    if (document.querySelector(".message").innerHTML == `(€3 withdrawal fee) Type the amount`) {
        account.balance -= inputValue + 3;
        document.querySelector(".input-field").value = 0;
    } else if (document.querySelector(".message").innerHTML === "Type the amount") {
        account.balance += inputValue;
        document.querySelector(".input-field").value = 0;
    } else {
        return;
    }
});
