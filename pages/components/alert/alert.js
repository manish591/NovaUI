const alertDismiss = document.querySelector('.alert--dismissable');

const removeFromTheView = e => {
    e.target.parentElement.style.display = 'none';
}

alertDismiss.addEventListener('click', removeFromTheView);