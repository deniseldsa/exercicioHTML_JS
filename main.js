    const form = document.getElementById('form-deposito');
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');

    function validaCampo(campoA,campoB) {
    if(campoB > campoA) return true };

    form.addEventListener('submit', function (e) {
    e.preventDefault();
        
    const valorcampoA = campoA.value;
    const valorcampoB = campoB.value;
    const MensagemSucesso = `O Campo B=${ campoB }, é maior que o Campo A=${ campoA }`;

    console.log(MensagemSucesso)

    formEValido = validaCampo(campoB.value)
    if(formEValido) {
        const containerMensagemSucesso = document.querySelector('#sucess-message');
        containerMensagemSucesso.innerHTML = MensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        valorcampoA.value = '';
        valorcampoB.value = '';
    } else {
        campoB = '1px solid red';
        document.querySelector('#error-message').style.display = 'block';
    }
    })
    campoB.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    formEValido = validaCampo(e.target.value);

    if (!formEValido) {
        validaCampo.classList.add('#error');
        document.querySelector('#error-message').style.display = 'block';
    } else {
        validaCampo.classList.remove('#error');
        document.querySelector('#error-message').style.display = 'none';
    }
    });