window.addEventListener("load", () => {
  const logo = document.querySelector(".hero-logo");
  const subtitle = document.querySelector(".hero-subtitle");

  setTimeout(() => {
    logo.style.transition = "all 2.5s ease";
    logo.style.opacity = "1";
    logo.style.transform = "scale(1)";
    
  }, 800);

  setTimeout(() => {
    subtitle.style.transition = "opacity 2.5s ease";
    subtitle.style.opacity = "1";
  }, 3000);
});
