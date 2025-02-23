// Starting version
let version = '1.0.0';

// Admin credentials
const adminCredentials = {
    username: 'admin',
    password: 'n$gC8rj!3Xp@4Vz2' // Updated strong password
};

// Handle login submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        loadHomePage();
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Update version number
function updateVersion() {
    version = incrementVersion(version);
    document.getElementById('version').textContent = 'Verze: ' + version;
}

// Increment the version number
function incrementVersion(version) {
    let versionParts = version.split('.');
    versionParts[2] = parseInt(versionParts[2]) + 1;
    return versionParts.join('.');
}

// Load different pages based on menu selection
document.getElementById('homeLink').addEventListener('click', loadHomePage);
document.getElementById('membersLink').addEventListener('click', loadMembersPage);
document.getElementById('pointsLink').addEventListener('click', loadPointsPage);
document.getElementById('accountingLink').addEventListener('click', loadAccountingPage);

// Content loading functions
function loadHomePage() {
    document.getElementById('contentArea').innerHTML = `<h3>Vítejte na Admin Panelu!</h3><p>Tato stránka umožňuje správu členů, bodů a účetnictví.</p>`;
}

function loadMembersPage() {
    document.getElementById('contentArea').innerHTML = `
        <h3>Seznam Členů a Vedení</h3>
        <table>
            <thead>
                <tr>
                    <th>Hodnost</th>
                    <th>Jméno</th>
                    <th>Přezdívka</th>
                    <th>Body</th>
                    <th>Akce</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chief of Shadow Council</td>
                    <td>Nicolas Ackermann</td>
                    <td>Matthew</td>
                    <td>100</td>
                    <td><button onclick="editMember('Nicolas')">Edit</button> <button onclick="removeMember('Nicolas')">Remove</button></td>
                </tr>
                <!-- Add other members here -->
            </tbody>
        </table>
        <h3>Historie Bodů</h3>
        <!-- Form for adding points history goes here -->
        <button onclick="updateVersion()">Update Version</button>
    `;
}

function loadPointsPage() {
    document.getElementById('contentArea').innerHTML = `
        <h3>Bodový Systém</h3>
        <table>
            <thead>
                <tr>
                    <th>Seznam členů</th>
                    <th>Bodová Historie</th>
                </tr>
            </thead>
            <tbody>
                <!-- Points history goes here -->
            </tbody>
        </table>
    `;
}

function loadAccountingPage() {
    document.getElementById('contentArea').innerHTML = `
        <h3>Účetnictví</h3>
        <table>
            <thead>
                <tr>
                    <th>Datum</th>
                    <th>Typ</th>
                    <th>Částka</th>
                    <th>Poznámka</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>20.02. 2025</td>
                    <td>Příjem</td>
                    <td>$500,000</td>
                    <td>Vražda Amy Aria Grivas</td>
                </tr>
                <!-- More transactions -->
            </tbody>
        </table>
    `;
}
