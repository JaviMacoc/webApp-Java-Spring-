//let btnRegistrar=document.getElementById("btnRegistrarHTML");
//btnRegistrar.addEventListener("click", registrarUsuarios());

async function registrarUsuarios() {
  let datos = {};
  datos.id = uuidv4();
  datos.nombre = document.getElementById("nombreHTML").value;
  datos.apellido = document.getElementById("apellidoHTML").value;
  datos.email = document.getElementById("emailHTML").value;
  datos.password = document.getElementById("passwordHTML").value;

  const repetirPassword = document.getElementById("repetirPasswordHTML").value;

  const alertaEmail = 'La contraseña debe tener minimo una letra minuscula, una mayuscula, un número, un caracter especial y mínimo 8 caracteres';  

  const regexNom = /^[a-zA-z0-9\-]{2,}$/g;
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  

  if (!datos.nombre.match(regexNom)) {
    alert('Ingrese un nombre válido');
    return;
  }
  if (!datos.apellido.match(regexNom)) {
    alert('Ingrese un apellido válido');
    return;
  }  
  if (!datos.email.match(regexEmail)) {
    alert('Ingrese un email válido');
    return;
  }  
  if (!datos.password.match(regexNom)) {
    alert('Ingrese una contraseña válida');
    return;
  }
  

  if (repetirPassword != datos.password) {
    alert('Vuelva a validar su contraseña');
    return;
  }

  const response = await fetch('api/usuarios', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  const authEmail = await response.text();
  if(authEmail=="EXITO"){
  alert("Se ha registrado con éxito el usuario!");
  window.location.href = 'login.html';
  }else{
    alert('Ya existe un usuario registrado con ese email');
  }
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}