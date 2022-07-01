const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removaActiveClasses();
    panel.classList.add("active");
  });
});

function removaActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
