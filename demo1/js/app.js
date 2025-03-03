console.log('review', reviews);
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const randomBtn = document.querySelector('.random-btn');

const prevBtn = document.querySelector('.prev-btn');

const nextBtn = document.querySelector('.next-btn');

// console.log('img', img);

let currentItem = 3;

function showReview (index) {
    const review = reviews[index];
    console.log('review', review);
    img.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
    info.innerHTML = review.text;
}

window.addEventListener('DOMContentLoaded', function () {
    showReview(currentItem);
}) ;

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showReview(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem = currentItem - 1;
    if (currentItem >= 0) {
        showReview(currentItem);
    } else {
        currentItem = reviews.length - 1;
        showReview(currentItem);
    }
});

nextBtn.addEventListener('click', function() {
    currentItem = currentItem + 1;
    if (currentItem < reviews.length) {
        showReview(currentItem);
    } else {
        currentItem = 0;
        showReview(currentItem);
    }
});




