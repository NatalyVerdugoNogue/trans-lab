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
    let numTarjetaValue1 = localStorage.getItem('Tarjeta1');
    let numTarjetaValue2 = localStorage.getItem('Tarjeta2');
    let numTarjetaValue3 = localStorage.getItem('Tarjeta3');
    value1.innerHTML = numTarjetaValue1;
    value2.innerHTML = numTarjetaValue2;
    value3.innerHTML = numTarjetaValue3;
}

const obtenerNumTarjeta = () => {

    let selectTarjeta = document.getElementById('selectTarjeta').value;
    let numSelectTarjeta = parseInt(selectTarjeta)

    callBip(numSelectTarjeta);
    // 19420273
}

const escribirDatosLocal = () => {
    let numTarjetaValue1 = localStorage.getItem('Tarjeta1');
    let numTarjetaValue2 = localStorage.getItem('Tarjeta2');
    let numTarjetaValue3 = localStorage.getItem('Tarjeta3');
    value1.innerHTML = numTarjetaValue1;
    value2.innerHTML = numTarjetaValue2;
    value3.innerHTML = numTarjetaValue3;
}