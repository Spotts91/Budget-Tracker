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

function populateChart() {
    // copy aray and reverse it
    const reversed = transaction.slice().reverse();
    let sum = 0;

    // create date labels for chart
    const labels = reversed.map(t => {
        const date = new Date(t.date);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    });

    // create incremental values for chart
    const data = reversed.map(t=> {
        sum += parseInt(t.value);
        return sum;
    });

    //remove old chart if it exists
    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById("my-chart").getContext("2d");

    myChart = new CharacterData(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: "Total Over Time",
                    fill: true,
                    backgroundColor: "#6666ff",
                    data
                }
            ]
        }
    });
}

function sendTransaction(isAdding) {
    const nameEl = document.querySelector("#t-name");
    const emountEl = document.querySelector("t-amount");
    const errorEl = document.querySelector("form.error");

    //validate form
    if (nameEl.value === "" || amountEl.value === "") {
        errorEl.textContent = "Missing information";
        return;
    } else {
        errorEl.textContent = "";
    }

    // create record
}

