const ratingParent = document.querySelector('.rating');
const ratingItems = document.querySelectorAll('.rating__item');
const allInputs = document.querySelectorAll('.sr-only');

const addColorToRating = e => {
    let targetElement = e.target.parentElement;
    let childClass = targetElement.classList[1];
    let parentCurrentClass = ratingParent.classList[2];

    ratingParent.classList.replace(parentCurrentClass, childClass);
    let currentRating = ratingParent.classList[2];
    console.log(`Your rating is ${currentRating.slice(-1)}`);
}

ratingItems.forEach(item => {
    item.addEventListener('click', addColorToRating);
})

// allInputs.forEach(input => {
//     if(input.checked) {
//         console.log(input.value)
//     }
// })