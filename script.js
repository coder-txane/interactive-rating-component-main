let number = document.querySelectorAll('.number-item');
const submitButton = document.querySelector('.submit-btn');
const ratingPage = document.querySelector('.rating-container');
const thankYouPage = document.querySelector('.thank-you-container');
let ratingResult = document.querySelector('.rating-result');
let rating = 0;

// Rating Buttons
number.forEach(num => {
    num.addEventListener("click", () => {
        rating = num.innerHTML;
    });
});

// Submit button takes you to the thank you page
submitButton.addEventListener("click", () => {
    if (ratingPage.style.display !== 'none') {
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'flex';
        ratingResult.innerHTML = `You selected ${rating} out of 5`;
    }
});