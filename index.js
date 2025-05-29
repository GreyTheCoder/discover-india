
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Thanks for showing interest! We'll contact you soon.");
  });
});


const animatedElements = document.querySelectorAll('.card, .hero-left, .quote');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animatedElements.forEach(el => observer.observe(el));


window.onscroll = function () {
  const topButton = document.getElementById("backToTop");
  if (topButton) {
    topButton.style.display = window.scrollY > 300 ? "block" : "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


let countdownDate = new Date("Aug 15, 2025 00:00:00").getTime();
let countdownTimer = setInterval(() => {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let timerElement = document.getElementById("timer");
  if (timerElement) {
    timerElement.innerHTML = days + " days left for Independence Day!";
  }

  if (distance < 0) {
    clearInterval(countdownTimer);
    if (timerElement) {
      timerElement.innerHTML = "Happy Independence Day!";
    }
  }
}, 1000);
