// Poll Submission Logic
// JavaScript Code
document.getElementById('pollForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let pollResult = document.getElementById('poll-result');
  let selectedPlayer = document.querySelector('input[name="player"]:checked');
   
  if (selectedPlayer) {
      pollResult.innerHTML = `<p>Thanks for voting! You voted for ${selectedPlayer.value}.</p>`;
      
      // Redirect or display player information
      if (selectedPlayer.value === "MS Dhoni") {
          window.location.href = "";
      } else if (selectedPlayer.value === "C Hari") {
          window.location.href = "";
      }else if (selectedPlayer.value === "Ruturaj") {
        window.location.href = "";
      }else if (selectedPlayer.value === "Bravo") {
        window.location.href = "";
      }else if (selectedPlayer.value === "Jadeja") {
        window.location.href = "";
      }else if (selectedPlayer.value === "Deepak") {
        window.location.href = "";
      }else if (selectedPlayer.value === "Maheesh") {
       window.location.href = "";
      }else if (selectedPlayer.value === "Matheesh") {
        window.location.href = "";
      }else if (selectedPlayer.value === "Shivam Dube") {
        window.location.href = "";
      } else if (selectedPlayer.value === "Moeen Ali") {
        window.location.href = "";
      }

  } else {
      pollResult.innerHTML = `<p>Please select a player to vote for.</p>`;
  }
});
