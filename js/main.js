window.onload = () => {
    const btnInit = document.getElementById('btnInit');
    btnInit.addEventListener('click', () => {
        let inputEmail = document.getElementById('inputEmail').value;
        let inputPassword = document.getElementById('inputPassword').value;
        const userData = validInput(inputEmail, inputPassword);
        if (userData === true) {
            window.writeMenu();
        }

    })

    callBip(19420273);

}

const validInput = (inputEmail, inputPassword) => {
    let valid = true;
    const patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (inputEmail.length === 0 || inputPassword.length === 0) {
        valid = false;
        alert("No debe dejar campos vacíos")
    } else if (inputEmail.search(patron) !== 0) {
        valid = false;
        alert("Debe ingresar un mail valido")
        // } else if (typeof inputPassword !== 'number') {
        //     alert("La contraseña debe contener solo numeros")
        // }
    }
    return valid;
}

