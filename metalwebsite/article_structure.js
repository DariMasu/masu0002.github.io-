document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);
    const allArticles = document.querySelectorAll(".article");

    allArticles.forEach((article) => {
      article.classList.add("hidden");
    });

    if (targetElement) {
      targetElement.classList.remove("hidden");

      const offset = 10;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});
