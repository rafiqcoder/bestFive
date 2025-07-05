let noSelectedPlayers;
let totalPlayerCost;

const calculation = (noPlayers) => {
  noSelectedPlayers = noPlayers;
  console.log(`selected players from calculation: ${noSelectedPlayers}`);
};

const calcBtn = document.getElementById("calc");

calcBtn.addEventListener("click", function () {
  if (isNaN(noSelectedPlayers) || noSelectedPlayers <= 0) {
    alert("Please select at least one player before calculating.");
    return;
  }
  const playerCost = parseInt(document.getElementById("p_cost").value);

  totalPlayerCost = noSelectedPlayers * playerCost;

  console.log(`Total player cost: ${totalPlayerCost}`);
  document.getElementById("pl_expense").innerText = totalPlayerCost;
});
