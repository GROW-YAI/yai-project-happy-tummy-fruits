// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  // Toggle menu
  mobileMenu.classList.toggle('hidden');
  
  // Toggle icon between menu and x
  const icon = mobileMenuButton.querySelector('i');
  if (icon.getAttribute('data-lucide') === 'menu') {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const icon = mobileMenuButton.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetPosition - navHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightNavLink() {
  const navHeight = document.querySelector('nav').offsetHeight;
  const scrollPosition = window.scrollY + navHeight + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('text-yellow-600');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('text-yellow-600');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavLink);

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  
  // Here you would typically send the data to a server
  console.log('Form submitted:', data);
  
  // Clear form
  e.target.reset();
  
  // Show success message
  alert('Thank you for your message! We will get back to you soon.');
});

// Newsletter form handling
const newsletterForm = document.querySelector('footer form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to a server
    console.log('Newsletter subscription:', email);
    
    // Clear input
    this.querySelector('input[type="email"]').value = '';
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
  });
}