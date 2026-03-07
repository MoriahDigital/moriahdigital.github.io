window.showSection = function(sectionId, element) {
  const sections = document.querySelectorAll('.section');
  const links = document.querySelectorAll('nav a[onclick]');

  sections.forEach(section => section.classList.remove('active'));
  links.forEach(link => link.classList.remove('active'));

  document.getElementById(sectionId).classList.add('active');

  if (element) {
    element.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.searchProducts = function() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const allCards = document.querySelectorAll(".product-card");
  const searchStatus = document.getElementById("searchStatus");
  let visibleCount = 0;

  allCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (input === "" || text.includes(input)) {
      card.classList.remove("hidden-card");
      visibleCount++;
    } else {
      card.classList.add("hidden-card");
    }
  });

  if (input === "") {
    searchStatus.textContent = "";
  } else if (visibleCount > 0) {
    searchStatus.textContent = visibleCount + " résultat(s) trouvé(s)";
  } else {
    searchStatus.textContent = "Aucun résultat trouvé";
  }
};
