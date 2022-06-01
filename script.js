const inputs = document.querySelectorAll('input');

const handleFocus = ({ target }) => {

}

const handleFocusOut = ({ target }) => {

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

const button = document.querySelector('button');

const addLoading = () => {
    button.innerHTML = '<img src="./loading.png" class="loading">';
}

const removeLoading = () => {
    button.innerHTML = 'Enviar';
}

const handleSubmit = () => {
    event.preventDefault();
    addLoading();

    const data = document.querySelector('input[name=data]').value;
    const colab = document.querySelector('input[name=colab]').value;
    const concess = document.querySelector('input[name=concess]').value;
    const tipopag = document.querySelector('input[name=tipopag]').value;
    const prioridade = document.querySelector('input[name=prioridade]').value;
    const mesref = document.querySelector('input[name=mesref]').value;
    const qtd = document.querySelector('input[name=qtd]').value;
    const local = document.querySelector('input[name=local]').value;

    fetch('https://api.sheetmonkey.io/form/6zcD1B16jtuuNwaRV8kfsa', {
        method: 'post',
        headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, colab, concess, tipopag, prioridade, mesref, qtd, local }),
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);