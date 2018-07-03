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


const IngresarNumTarjeta = () => {
    let numTarjeta1 = document.getElementById('numTarjeta1').value;
    let numTarjeta2 = document.getElementById('numTarjeta2').value;
    let numTarjeta3 = document.getElementById('numTarjeta3').value;
    localStorage.setItem('Tarjeta1', numTarjeta1);
    localStorage.setItem('Tarjeta2', numTarjeta2);
    localStorage.setItem('Tarjeta3', numTarjeta3);
    let value1 = document.getElementById('value1');
    let value2 = document.getElementById('value2');
    let value3 = document.getElementById('value3');
    value1.innerHTML = numTarjeta1;
    value2.innerHTML = numTarjeta2;
    value3.innerHTML = numTarjeta3;
}

const obtenerNumTarjeta = () => {

    let numTarjeta = localStorage.getItem('Tarjeta1');
    console.log(numTarjeta);

}