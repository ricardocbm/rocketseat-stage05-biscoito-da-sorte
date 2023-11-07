function handleClick(event) {
  event.preventDefault();

  document.querySelector(".tela1").classList.add("hide");
  document.querySelector(".tela2-wrapper").classList.remove("hide");
}

function resetClick(event) {
  event.preventDefault();

  document.querySelector(".tela1").classList.remove("hide");
  document.querySelector(".tela2-wrapper").classList.add("hide");
}
