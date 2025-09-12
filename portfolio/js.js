// Scroll animation
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(fade => {
    const rect = fade.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fade.classList.add("visible");
    }
  });
});

// Modal popup with animated checkmark
const modal = document.getElementById("cvModal");
const closeBtn = document.querySelector(".close");

document.getElementById("downloadCV").addEventListener("click", function () {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
