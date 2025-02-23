const adminUsername = "admin";
const adminPassword = "n$gC8rj!3Xp@4Vz2"; // Silné heslo

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

// Údaje o členech a historie bodů
let members = [
    { rank: "Chief of Shadow Council", name: "Nicolas Ackermann", nickname: "Matthew", callSign: "Echo-1", dob: "09/03/1995", oocNick: "czipisekk", points: 0 },
    { rank: "High Advisor", name: "Lucas Davin", nickname: "Luca", callSign: "Echo-2", dob: "07/03/2002", oocNick: "madla_", points: 0 },
    // Přidáme další členy
];

let pointsHistory = [
    { nickname: "Danto", activity: "Záchrana vedení", points: 10, date: "6.2. 2025" },
    { nickname: "Yella", activity: "Záchrana vedení", points: 10, date: "6.2. 2025" },
    // Přidáme další body
];

function loadMembers() {
    const tableBody = document.getElementById("members").getElementsByTagName("tbody")[0];
    members.forEach(member => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = member.rank;
        row.insertCell(1).textContent = member.name;
        row.insertCell(2).textContent = member.nickname;
        row.insertCell(3).textContent = member.callSign;
        row.insertCell(4).textContent = member.dob;
        row.insertCell(5).textContent = member.oocNick;
        row.insertCell(6).textContent = member.points;
        let editButton = document.createElement("button");
        editButton.textContent = "Upravit
