const members = [
    { rank: "Chief of Shadow Council", name: "Nicolas Ackermann", nickname: "Matthew", call: "Echo-1", dob: "09/03/1995", ooc: "czipisekk" },
    { rank: "High Advisor", name: "Lucas Davin", nickname: "Luca", call: "Echo-2", dob: "07/03/2002", ooc: "madla_" },
    { rank: "Council Leader", name: "John Doe", nickname: "Leader", call: "Echo-3", dob: "01/01/1990", ooc: "leader_nick" },
    { rank: "Coordinator", name: "Rhys Miller", nickname: "Delta", call: "Echo-4", dob: "02/02/1996", ooc: "lawle_" },
    { rank: "Operations Commander", name: "Ryan Chambers", nickname: "Hunter", call: "Echo-5", dob: "15/02/1997", ooc: "Nevimas" },
    { rank: "Senior Agent", name: "Carlos", nickname: "Senior Agent", call: "Echo-6", dob: "12/10/1993", ooc: "senior_agent" }
];

function loadMembers() {
    const membersList = document.getElementById('members-list');
    members.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.rank}</td>
            <td>${member.name}</td>
            <td>${member.nickname}</td>
            <td>${member.call}</td>
            <td>${member.dob}</td>
            <td>${member.ooc}</td>
        `;
        membersList.appendChild(row);
    });
}

window.onload = loadMembers;
