// scroll down scroll up animation
document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card, .card-box');
    cards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.75) {
            card.classList.add('show');
            card.classList.remove('hide');
        } else {
            card.classList.add('hide');
            card.classList.remove('show');
        }
    });
});
