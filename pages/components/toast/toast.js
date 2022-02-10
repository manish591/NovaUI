const showToastButton = document.querySelectorAll('.show-toast');
const allToasts = document.querySelectorAll('.toast');

const showToastInView = e => {
    let targetElement = e.target;
    let targetToast = targetElement.nextElementSibling;
    allToasts.forEach(toast => {
        toast.classList.add('toast--hide');
    })
    targetToast.classList.remove('toast--hide');
    hideToastAfterThreeSec(targetToast);
    targetToast.classList.add('fade-animation');

}

const hideToastAfterThreeSec = element => {
    setTimeout(() => {
        element.classList.add('toast--hide');
    }, 5000);
}

showToastButton.forEach(button => {
    button.addEventListener('click', showToastInView);
})