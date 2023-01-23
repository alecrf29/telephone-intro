const listTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');


for (let count = 0; count < listTeclas.length; count++) {

    const tecla = listTeclas[count];

    tecla.onclick = function () {
        inputTel.value = inputTel.value + tecla.value;
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}