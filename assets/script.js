btnBalance = document.querySelector(".btn__balance");
btnDeposit = document.querySelector(".btn__deposit");
btnWithdrawal = document.querySelector(".btn__withdrawal");
btnAccountName = document.querySelector(".btn__accountName");
btnExit = document.querySelector(".btn__exit");
btnClear = document.querySelector(".btn__clear");
btnSubmit = document.querySelector(".btn__submit");

const account = {
    accountName: "Santa Claus",
    balance: 100,
    getBalance: btnBalance.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `&#8364;${account.balance}`;
    }),
    deposit: function () {},
    withdrawal: function () {},
    getAccountName: function () {},
    accountError: function () {},
    exitAccount: btnExit.addEventListener("click", () => {
        return window.location.assign("../../index.html");
    }),
    clearMessage: btnClear.addEventListener("click", () => {
        document.querySelector(".message").innerHTML = `PRESS BUTTON TO CHOOSE ACTION`;
    }),
};
