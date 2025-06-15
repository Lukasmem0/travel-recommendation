function changeImage(dot, imageIndex) {
    const card = dot.closest('.recommendation-card');
    const images = card.querySelectorAll('.card-image');
    const dots = card.querySelectorAll('.dot');
    
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    images[imageIndex].classList.add('active');
    dot.classList.add('active');
}

setInterval(() => {
    const cards = document.querySelectorAll('.recommendation-card');
    cards.forEach(card => {
        const images = card.querySelectorAll('.card-image');
        const dots = card.querySelectorAll('.dot');
        const activeImage = card.querySelector('.card-image.active');
        
        let currentIndex = Array.from(images).indexOf(activeImage);
        let nextIndex = (currentIndex + 1) % images.length;
        
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        images[nextIndex].classList.add('active');
        dots[nextIndex].classList.add('active');
    });
}, 4000);