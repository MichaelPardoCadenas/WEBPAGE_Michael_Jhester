document.getElementById('darkModeButton').addEventListener('click', function() {
    document.body.classList.toggle('oscuro');
    Array.from(document.getElementsByClassName('card-body')).forEach((elemento) => {
        elemento.classList.toggle('oscuro');
    });
});
