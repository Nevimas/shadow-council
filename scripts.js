const adminUsername = "admin";
const adminPassword = "n$gC8rj!3Xp@4Vz2"; // Silné heslo
let members = [];
let pointsHistory = [];
let accountingHistory = [];
let balance = 0;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const adminPanel = document.getElementById("admin-panel");
    const loginContainer = document.getElementById("login-container");

    if (username === adminUsername && password === adminPassword) {
        errorMessage.style.display = "none";
        adminPanel.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}

function showSection(section) {
    document.getElementById('members').style.display = section === 'members' ? 'block' : 'none';
    document.getElementById('points').style.display = section === 'points' ? 'block' : 'none';
    document.getElementById('accounting').style.display = section === 'accounting' ? 'block' : 'none';
}

// Funkce pro přidání člena
document.getElementById("add-member-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const member = {
        rank: document.getElementById("rank").value,
        name: document.getElementById("name").value,
        nickname: document.getElementById("nickname").value,
        callSign: document.getElementById("call-sign").value,
        dob: document.getElementById("dob").value,
        oocNick: document.getElementById("ooc-nick").value,
        points: 0
    };
    members.push(member);
    updateMemberTable();
});

// Funkce pro zobrazení členů
function updateMemberTable() {
    const membersBody = document.getElementById("members-body");
    membersBody.innerHTML = "";
    members.forEach(member => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${member.rank}</td>
            <td>${member.name}</td>
            <td>${member.nickname}</td>
            <td>${member.callSign}</td>
            <td>${member.dob}</td>
            <td>${member.oocNick}</td>
            <td>${member.points}</td>
        `;
        membersBody.appendChild(row);
    });
}

// Funkce pro přidání bodu do historie
document.getElementById("add-points-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const point = {
        nickname: document.getElementById("points-nickname").value,
        activity: document.getElementById("points-activity").value,
        points: parseInt(document.getElementById("points-value").value),
        date: new Date().toLocaleDateString()
    };
    pointsHistory.push(point);
    updatePointsTable();
    updateMemberPoints(point.nickname, point.points);
});

// Funkce pro zobrazení bodů
function updatePointsTable() {
    const pointsBody = document.getElementById("points-body");
    pointsBody.innerHTML = "";
    pointsHistory.forEach(point => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${point.nickname}</td>
            <td>${point.activity}</td>
            <td>${point.points}</td>
            <td>${point.date}</td>
        `;
        pointsBody.appendChild(row);
    });
}

// Funkce pro aktualizaci bodů u člena
function updateMemberPoints(nickname, points) {
    const member = members.find(m => m.nickname === nickname);
    if (member) {
        member.points += points;
    }
    updateMemberTable();
}

// Funkce pro přidání transakce
document.getElementById("add-accounting-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const transaction = {
        date: document.getElementById("transaction-date").value,
        type: document.getElementById("transaction-type").value,
        amount: parseFloat(document.getElementById("transaction-amount").value),
        note: document.getElementById("transaction-note").value
    };
    accountingHistory.push(transaction);
    updateAccountingTable();
    updateBalance(transaction);
});

// Funkce pro zobrazení účetnictví
function updateAccountingTable() {
    const accountingBody = document.getElementById("accounting-body");
    accountingBody.innerHTML = "";
    accountingHistory.forEach(transaction => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>$${transaction.amount}</td>
            <td>${transaction.note}</td>
        `;
        accountingBody.appendChild(row);
    });
}

// Funkce pro aktualizaci zůstatku
function updateBalance(transaction) {
    balance += (transaction.type === "Příjem" ? transaction.amount : -transaction.amount);
    document.getElementById("current-balance").innerText = balance.toFixed(2);
}
