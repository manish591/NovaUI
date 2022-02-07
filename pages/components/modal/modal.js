const showModal = document.querySelectorAll('.show-modal');
const clearModalBtn = document.querySelectorAll('.dialog__clear');


const showModalInView = e => {
    let target = e.target;
    let targetModal = target.nextElementSibling;
    targetModal.classList.remove('dialog--hide');
}

const hideModalInView = e => {
    let target = e.target;
    let targetModal = target.parentElement.parentElement;
    targetModal.classList.add('dialog--hide');
}

clearModalBtn.forEach(btn => {
    btn.addEventListener('click', hideModalInView);
})

showModal.forEach(btn => {
    btn.addEventListener('click', showModalInView);
})
