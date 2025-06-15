function searchByCountry() {
    const country = document.getElementById('countrySearch').value.trim();
    if (!country) {
        alert('Please enter a country name.');
        return;
    }
    
    const countryCard = document.querySelector('.recommendation-card.country');
    const cardTitle = countryCard.querySelector('.card-title');
    const cardDescription = countryCard.querySelector('.card-description');
    
    cardTitle.innerHTML = `🌍 Explore ${country}`;
    cardDescription.innerHTML = `Discover ${country}'s unique landscapes and cultural heritage. Plan your adventure today!`;
    
    countryCard.scrollIntoView({ behavior: 'smooth' });
    
    countryCard.style.border = '3px solid #667eea';
    countryCard.style.transform = 'scale(1.02)';
    
    setTimeout(() => {
        countryCard.style.border = 'none';
        countryCard.style.transform = 'scale(1)';
    }, 3000);
}

document.getElementById('countrySearch').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchByCountry();
    }
});