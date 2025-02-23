const adminUsername = "admin";
const adminPassword = "n$gC8rj!3Xp@4Vz2";  // Strong password

// Data storage for members, activities, and finances
let members = [];
let activities = [];
let finances = [];

// Function to handle login
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

// Add member to the list
function addMember() {
    const name = document.getElementById("add-name").value;
    const nickname = document.getElementById("add-nickname").value;
    const vo = document.getElementById("add-vo").value;
    const birth = document.getElementById("add-birth").value;
    const ooc = document.getElementById("add-ooc").value;
    const points = 0; // Default points for new member

    const newMember = { name, nickname, vo, birth, ooc, points };
    members.push(newMember);
    renderMembers();
}

// Render members list dynamically
function renderMembers() {
    const membersTable = document.getElementById("members-list");
    membersTable.innerHTML = "";
    members.forEach(member => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Agent</td>
            <td>${member.name}</td>
            <td>${member.nickname}</td>
            <td>${member.vo}</td>
            <td>${member.birth}</td>
            <td>${member.ooc}</td>
            <td>${member.points}</td>
        `;
        membersTable.appendChild(row);
    });
}

// Add activity to the list
function addActivity() {
    const nickname = document.getElementById("add-activity-nickname").value;
    const activity = document.getElementById("add-activity-name").value;
    const points = document.getElementById("add-activity-points").value;

    const newActivity = { nickname, activity, points, date: new Date().toLocaleDateString() };
    activities.push(newActivity);
    renderActivities();
}

// Render activities dynamically
function renderActivities() {
    const activityList = document.getElementById("activity-list");
    activityList.innerHTML = "";
    activities.forEach(activity => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${activity.nickname}</td>
            <td>${activity.activity}</td>
            <td>${activity.points}</td>
            <td>${activity.date}</td>
        `;
        activityList.appendChild(row);
    });

    // Update points
    updateMemberPoints(activity.nickname, activity.points);
}

// Add financial record
function addFinance() {
    const date = document.getElementById("add-finance-date").value;
    const type = document.getElementById("add-finance-type").value;
    const amount = document.getElementById("add-finance-amount").value;
    const note = document.getElementById("add-finance-note").value;

    const newFinance = { date, type, amount, note };
    finances.push(newFinance);
    renderFinance();
    updateBalance(amount, type);
}

// Render finance dynamically
function renderFinance() {
    const financeList = document.getElementById("finance-list");
    financeList.innerHTML = "";
    finances.forEach(finance => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${finance.date}</td>
            <td>${finance.type}</td>
            <td>${finance.amount}</td>
            <td>${finance.note}</td>
        `;
        financeList.appendChild(row);
    });
}

// Update balance
function updateBalance(amount, type) {
    let currentBalance = parseFloat(document.getElementById("current-balance").textContent.replace("$", ""));
    amount = parseFloat(amount);
    
    if (type === "Příjem") {
        currentBalance += amount;
    } else {
        currentBalance -= amount;
    }

    document.getElementById("current-balance").textContent = `$${currentBalance.toFixed(2)}`;
}

