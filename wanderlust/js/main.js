
document.addEventListener('DOMContentLoaded', () => {
    fetch('/wanderlust/data/recommendations.json')
        .then(response => response.json())
        .then(data => {
            const recommendationsContainer = document.getElementById('recommendations');
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = `recommendation-card ${item.type}`;
                card.innerHTML = `
                    <div class="card-images">
                        ${item.images.map((img, index) => `
                            <img src="${img.src}" alt="${img.alt}" class="card-image ${index === 0 ? 'active' : ''}">
                        `).join('')}
                        <div class="image-dots">
                            ${item.images.map((_, index) => `
                                <div class="dot ${index === 0 ? 'active' : ''}" onclick="changeImage(this, ${index})"></div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-description">${item.description}</p>
                    </div>
                `;
                recommendationsContainer.appendChild(card);
            });
        });
});