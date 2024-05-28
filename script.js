function arrowHandlerRight() {
    const scrollableElement = document.getElementsByClassName("slider")[0];
    console.log(scrollableElement);
    scrollableElement.scrollBy({ left: 800, behavior: "smooth" });
}

function arrowHandlerLeft() {
    const scrollableElement = document.getElementsByClassName("slider")[0];
    console.log(scrollableElement);
    scrollableElement.scrollBy({ left: -800, behavior: "smooth" });    
}

function toggleAccordion(index) {
    const content = document.querySelectorAll('.accordion-content')[index];

    const closeBtn = document.querySelectorAll('.close')[index];
    const openBtn = document.querySelectorAll('.open')[index];
    if (content.style.display === "block") {
        closeBtn.style.display="none";
        openBtn.style.display="block";
       
        content.style.display = "none";
    } else {
        closeBtn.style.display="block";
        openBtn.style.display="none";
        content.style.display = "block";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navContainer = document.getElementById('nav-container');
    const headerButtonsContainer = document.getElementById('header-buttons-container');

    hamburgerIcon.addEventListener('click', function() {
      navContainer.classList.toggle('show');
    //   headerButtonsContainer.classList.toggle('show');
    });
  });