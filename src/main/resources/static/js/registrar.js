
//let btnRegistrar=document.getElementById("btnRegistrarHTML");
//btnRegistrar.addEventListener("click", registrarUsuarios());

async function registrarUsuarios() {
    let datos = {};
    datos.id = uuidv4();
    datos.nombre = document.getElementById("nombreHTML").value;
    datos.apellido = document.getElementById("apellidoHTML").value;
    datos.email = document.getElementById("emailHTML").value;
    datos.password = document.getElementById("passwordHTML").value;

    let repetirPassword = document.getElementById("repetirPasswordHTML").value;

    if (repetirPassword != datos.password) {
      alert('La contraseña que escribiste es diferente.');
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
    alert("Se ha registrado con éxito el usuario!");
    window.location.href = 'login.html';
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}
