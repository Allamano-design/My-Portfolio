//menu
  const menuBtn = document.getElementById("menu-button");
  const closeBtn = document.getElementById("close-button");
  const sidebar = document.getElementById("sidebar");

  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });

  // Optional: Auto-close sidebar on link click
  document.querySelectorAll(".sidebar .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  });

//animate navbar
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = "#1a1a1a";
      navbar.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
      navbar.style.transition = "all 0.3s ease";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.boxShadow = "none";
    }
  });

//navbar on scroll
  gsap.to(".navbar", {
    backgroundColor: "#1a1a1a",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".navbar",
      start: "top -20",
      toggleActions: "play none none reverse"
    }
  });


  // Animate the text lines
  gsap.from(".text-1", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".text-2", {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });

  gsap.from(".text-3", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "power2.out"
  });

  // Animate the buttons (Hire Me & Let's Talk)
  gsap.from(".home-content a", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    delay: 1.2,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  

//home image
  window.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.home-image img');
    img.style.opacity = 0;
    img.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
      img.style.transition = 'all 1s ease';
      img.style.opacity = 1;
      img.style.transform = 'translateY(0)';
    }, 200);
  });


//circles
  const circles = document.querySelectorAll("circle.progress");

  circles.forEach(circle => {
    const percent = circle.getAttribute("data-percent");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = offset;
  });


  //Form pop up
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    });
  });

// Testimonial Slider
 const testimonialSlides = document.querySelectorAll(".testimonial-slide")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const indicators = document.querySelectorAll(".indicator")
  let currentSlide = 0

  function showSlide(index) {
    testimonialSlides.forEach((slide) => slide.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    testimonialSlides[index].classList.add("active")
    indicators[index].classList.add("active")
    currentSlide = index
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
    showSlide(currentSlide)
  })

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  })

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index)
    })
  })

  // Auto-advance testimonials
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialSlides.length
    showSlide(currentSlide)
  }, 5000)

 

