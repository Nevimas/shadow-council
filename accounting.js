const transactions = [
    { date: "20.02. 2025", type: "Income", amount: "$500,000", note: "Vražda Amy Aria Grivas" },
    { date: "20.02. 2025", type: "Expense", amount: "-$24,000", note: "Ilegal SPZky (4x)" },
    { date: "21.02. 2025", type: "Income", amount: "$100,000", note: "Nákup zbraní" }
];

function loadTransactions() {
    const accountingList = document.getElementById('accounting-list');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.note}</td>
        `;
        accountingList.appendChild(row);
    });
}

window.onload = loadTransactions;
