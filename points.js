const points = [
    { nickname: "Echo-1", points: 10 },
    { nickname: "Echo-2", points: 20 },
    { nickname: "Echo-3", points: 15 },
    { nickname: "Echo-4", points: 30 },
    { nickname: "Echo-5", points: 25 },
    { nickname: "Echo-6", points: 40 }
];

function loadPoints() {
    const pointsList = document.getElementById('points-list');
    points.forEach(point => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${point.nickname}</td>
            <td>${point.points}</td>
        `;
        pointsList.appendChild(row);
    });
}

window.onload = loadPoints;
