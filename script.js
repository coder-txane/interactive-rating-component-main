// step 2: make the submit button transition to the thank you page by adding/removing classlists possible
// step 3: Use innerhtml and template literals to update the result message

let number = document.querySelectorAll('.number-item');
const submitButton = document.querySelector('.submit-btn');
const ratingPage = document.querySelector('.rating-container');
const thankYouPage = document.querySelector('.thank-you-container');
const showElement = document.querySelector('.visible');
let ratingResult = document.querySelector('.rating-result');
let rating = 0;

// Rating Buttons
let numberRating = number.forEach((num) => {
    let numberValue = num.innerHTML
    
    num.addEventListener("click", () => {
        if (numberValue === "1") {
            rating = 1;
        } else if (numberValue === "2") {
            rating = 2;
        } else if (numberValue === "3") {
            rating = 3;
        } else if (numberValue === "4") {
            rating = 4;
        } else if (numberValue === "5") {
            rating = 5;
        }
    });
});

// Submit button to thank you page
submitButton.addEventListener("click", () => {
    if (ratingPage.style.display !== 'none') {
        ratingPage.style.display = 'none';
        thankYouPage.style.display = 'flex';
        ratingResult.innerHTML = `You selected ${rating} out of 5`;
    }
});

/*
if (numberRating === "1") {
    rating = 1;
}
*/