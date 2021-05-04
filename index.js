function myFunction() {
  document.getElementById("mButton").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.KB-button')) {
    let drop = document.getElementsByClassName("button-menu");
    let i;
    for (i = 0; i < drop.length; i++) {
      let openM = drop[i];
      if (openM.classList.contains('show')) {
        openM.classList.remove('show');
      }
    }
  }
}
