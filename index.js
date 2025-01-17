// Color picker functionality
document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.color-option.selected').classList.remove('selected');
        option.classList.add('selected');
    });
});

// Size picker functionality
document.querySelectorAll('.size-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelector('.size-option.selected').classList.remove('selected');
        option.classList.add('selected');
    });
});

// Wishlist button functionality
const wishlistBtn = document.querySelector('.wishlist-btn');
wishlistBtn.addEventListener('click', () => {
    wishlistBtn.classList.toggle('active');
    const icon = wishlistBtn.querySelector('i');
    icon.classList.toggle('fas');
    icon.classList.toggle('far');
});