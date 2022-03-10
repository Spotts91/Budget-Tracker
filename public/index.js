const { populate } = require("../models/transaction");

letTransactions = [];
let myChart;

fetch("/api/transaction")
    .then(response => response.json())
    .then(data => {
        //save db data on global variable
        transactions = data;
        populateTotal();
        populateTable();
        populateChart();
    });

function populateTotal() {
    //reduce transaction amounts to a single total value
    const total = transactions.reduce((total, t) => {
        return total + parseInt(t.value);
    }, 0);
    
    const totalEl = document.querySelector("#total");
    totalEl.textContent = total;
}

function populateTable() {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";

    transactions.forEach(transaction => {
        //create and populate a table row
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${transaction.name}</td>
        <td>${transaction.vaule}</td>
    `;

    tbody.appendChild(tr);
    });
}

