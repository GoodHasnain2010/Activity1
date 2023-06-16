score = 0;
// Uptade Score Function
function updateScore() {
  score = score + 1;
  document.getElementById("score").innerHTML = "Score: " + score;
}
// Save Score Function
function saveScore() {
  localStorage.setItem("score", score);
}
//Next Page Function
function nextPage() {
  window.location = "activity_2.html";
}
