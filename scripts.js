const adminUsername = "admin";
const adminPassword = "n$gC8rj!3Xp@4Vz2";

// Funkce pro přihlášení
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === adminUsername && password === adminPassword) {
        window.location.href = "index.html";
    } else {
        errorMessage.style.display = "block";
    }
}

// Funkce pro navigaci mezi stránkami
function navigateTo(page) {
    window.location.href = page;
}

// Funkce pro přidání člena
function addMember() {
    const name = document.getElementById("new-member-name").value;
    const rank = document.getElementById("new-member-rank").value;

    let members = loadData("members");
    members.push({ name: name, rank: rank, points: 0 });
    saveData("members", members);

    loadMembers();
}

// Funkce pro načtení členů
function loadMembers() {
    const members = loadData("members");
    const membersList = document.getElementById("members-list");

    membersList.innerHTML = "";
    members.forEach(member => {
        membersList.innerHTML += `
            <tr>
                <td>${member.rank}</td>
                <td>${member.name}</td>
                <td>${member.points}</td>
                <td><button onclick="removeMember('${member.name}')">Smazat</button></td>
            </tr>
        `;
    });
}

// Funkce pro odstranění člena
function removeMember(name) {
    let members = loadData("members");
    members = members.filter(member => member.name !== name);
    saveData("members", members);

    loadMembers();
}

// Funkce pro přidání bodů
function addPoints() {
    const name = document.getElementById("member-name").value;
    const points = parseInt(document.getElementById("points-earned").value);
    const history = loadData("points-history");

    history.push({
        name: name,
        activity: "Aktivita",  // Můžeš upravit dle potřeby
        points: points,
        date: new Date().toLocaleDateString()
    });
    saveData("points-history", history);

    loadPointsHistory();
}

// Funkce pro načtení historie bodů
function loadPointsHistory() {
    const history = loadData("points-history");
    const historyTable = document.getElementById("history-table");

    historyTable.innerHTML = "";
    history.forEach(entry => {
        historyTable.innerHTML += `
            <tr>
                <td>${entry.name}</td>
                <td>${entry.activity}</td>
                <td>${entry.points}</td>
                <td>${entry.date}</td>
            </tr>
        `;
    });
}

// Funkce pro přidání transakce do účetnictví
function addTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("transaction-type").value;
    const note = document.getElementById("transaction-note").value;
    const date = new Date().toLocaleDateString();

    let accountingHistory =
