const drawer = document.getElementById("drawer");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const closeMenuBackdrop = document.getElementById("closeMenuBackdrop");
const drawerLinks = document.querySelectorAll(".drawer-links a");
const contactForm = document.getElementById("contactForm");

openMenu?.addEventListener("click", () => drawer.classList.add("active"));
closeMenu?.addEventListener("click", () => drawer.classList.remove("active"));
closeMenuBackdrop?.addEventListener("click", () => drawer.classList.remove("active"));
drawerLinks.forEach(link => {
    link.addEventListener("click", () => drawer.classList.remove("active"));
});

contactForm?.addEventListener("submit", function(e){
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    contactForm.reset();
});

const bottomLinks = document.querySelectorAll(".bottom-nav a");
bottomLinks.forEach(link => {
    link.addEventListener("click", () => {
    bottomLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    });
});
const counters = document.querySelectorAll(".stat-number");

const startCounting = (counter) => {
  const target = +counter.getAttribute("data-target");
  let count = 0;

  const speed = target / 100; // سرعة العد

  const updateCount = () => {
    if (count < target) {
      count += speed;
      counter.innerText = "+" + Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = "+" + target;
    }
  };

  updateCount();
};

// Observer عشان يشتغل لما يظهر في الشاشة
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target); // يشتغل مرة واحدة بس
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
  counter.classList.add("active");
});

