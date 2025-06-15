document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    alert(`Thank you, ${name}! Your message has been sent. We'll reply to ${email} soon.`);
    
    e.target.reset();
});