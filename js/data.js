// llamada a API
window.callBip = (numBip) => {
  return fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numBip}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('La llamada a la API falló');
    }
  }).then((respuestaJson) => {
    console.log(respuestaJson);
    return respuestaJson;

  }).catch((err) => {
    console.error(err);
  });
};

//http://www.psep.cl/api/Bip.php?&numberBip=666
//http://bip.franciscocapone.com/api/getSaldo/19420273