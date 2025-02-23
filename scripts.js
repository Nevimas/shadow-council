let users = {
    "admin": "n$gC8rj!3Xp@4Vz2"
};

let members = [
    { name: "Nicolas Ackermann", nickname: "Matthew", rank: "Chief", points: 0 },
    { name: "Lucas Davin", nickname: "Luca", rank: "High Advisor", points: 0 }
    // Přidejte další členy podle potřeby
];

let pointsHistory = [];

let accountingRecords = [];

let balance = 0;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] === password) {
        document.getElementById("login").style.display = "none";
        document.getElementById("menu").style.display = "block";
        document.getElementById("contentArea").style.display = "block";
        showPage('home');
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});

function showPage(page) {
    let pages = document.querySelectorAll(".page");
    pages.forEach(function (pageElement) {
        pageElement.style.display = "none";
    });
    document.getElementById(page).style.display = "block";
}

function addMember() {
    let name = prompt("Enter member name:");
    let nickname = prompt("Enter member nickname:");
    let rank = prompt("Enter member rank:");
    if (name && nickname && rank) {
        members.push({ name, nickname, rank, points: 0 });
        renderMembers();
    }
}

function renderMembers() {
    let table = document.getElementById("membersTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    members.forEach((member, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.nickname}</td>
            <td>${member.rank}</td>
            <td><button onclick="editMember(${index})">Edit</button> <button onclick="removeMember(${index})">Remove</button></td>
        `;
    });
}

function removeMember(index) {
    members.splice(index, 1);
    renderMembers();
}

function editMember(index) {
    let name = prompt("Edit member name:", members[index].name);
    let nickname = prompt("Edit member nickname:", members[index].nickname);
    let rank = prompt("Edit member rank:", members[index].rank);
    if (name && nickname && rank) {
        members[index] = { name, nickname, rank, points: members[index].points };
        renderMembers();
    }
}

function addPoints() {
    let nickname = prompt("Enter member nickname:");
    let points = parseInt(prompt("Enter points to add:"));
    if (nickname && points) {
        let member = members.find(m => m.nickname === nickname);
        if (member) {
            member.points += points;
            pointsHistory.push({ nickname, points, date: new Date().toLocaleDateString() });
            renderPoints();
        } else {
            alert("Member not found!");
        }
    }
}

function renderPoints() {
    let table = document.getElementById("pointsTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    members.forEach(member => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${member.nickname}</td>
            <td>${member.points}</td>
            <td><button onclick="editPoints('${member.nickname}')">Edit</button> <button onclick="removePoints('${member.nickname}')">Remove</button></td>
        `;
    });
}

function removePoints(nickname) {
    let member = members.find(m => m.nickname === nickname);
    if (member) {
        member.points = 0;
        renderPoints();
    }
}

function editPoints(nickname) {
    let points = parseInt(prompt("Edit points:", ""));
    let member = members.find(m => m.nickname === nickname);
    if (member && points >= 0) {
        member.points = points;
        renderPoints();
    }
}

function addAccounting() {
    let date = prompt("Enter date (e.g. 20.02.2025):");
    let type = prompt("Enter type (Příjem/Výdaj):");
    let amount = parseFloat(prompt("Enter amount:"));
    let description = prompt("Enter description:");
    if (date && type && amount && description) {
        accountingRecords.push({ date, type, amount, description });
        if (type === "Příjem") {
            balance += amount;
        } else {
            balance -= amount;
        }
        renderAccounting();
    }
}

function renderAccounting() {
    let table = document.getElementById("accountingTable").getElementsByTagName('tbody')[0];
    table.innerHTML = "";
    accountingRecords.forEach(record => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${record.date}</td>
            <td>${record.type}</td>
            <td>$${record.amount}</td>
            <td>${record.description}</td>
            <td><button onclick="removeAccounting(${accountingRecords.indexOf(record)})">Remove</button></td>
        `;
    });
    document.getElementById("balance").textContent = balance;
}

function removeAccounting(index) {
    let record = accountingRecords[index];
    if (record.type === "Příjem") {
        balance -= record.amount;
    } else {
        balance += record.amount;
    }
    accountingRecords.splice(index, 1);
    renderAccounting();
}

