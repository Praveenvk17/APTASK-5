// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Player Search Filter
const searchBar = document.getElementById("searchBar");
const playerList = document.getElementById("playerList").getElementsByTagName("li");

searchBar.addEventListener("keyup", function() {
  const filter = searchBar.value.toLowerCase();
  for (let i = 0; i < playerList.length; i++) {
    let txtValue = playerList[i].textContent || playerList[i].innerText;
    playerList[i].style.display = txtValue.toLowerCase().includes(filter) ? "" : "none";
  }
});

// Live Score Simulation
let runs = 0, wickets = 0;
const scoreText = document.getElementById("scoreText");
document.getElementById("updateScoreBtn").addEventListener("click", () => {
  const event = Math.random();
  if (event < 0.7) { runs += Math.floor(Math.random() * 6) + 1; } 
  else { wickets += 1; }
  scoreText.textContent = `Runs: ${runs} | Wickets: ${wickets}`;
});

// Team Selector
const showTeamsBtn = document.getElementById("showTeamsBtn");
showTeamsBtn.addEventListener("click", () => {
  const teamA = document.getElementById("teamA").value;
  const teamB = document.getElementById("teamB").value;
  document.getElementById("selectedTeams").textContent = `Match: ${teamA} vs ${teamB}`;
});

// Player Registration
const playerForm = document.getElementById("playerForm");
playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newPlayer = document.getElementById("newPlayer").value.trim();
  if (newPlayer) {
    const li = document.createElement("li");
    li.textContent = newPlayer;
    document.getElementById("playerList").appendChild(li);
    document.getElementById("newPlayer").value = "";
  }
});
