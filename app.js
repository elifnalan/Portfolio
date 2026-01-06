const modal = document.getElementById("abstract-modal");
const openBtn = document.getElementById("open-abstract");
const closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// click outside to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

// for escape button
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
