// Initialize Lucide icons
lucide.createIcons();

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

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
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