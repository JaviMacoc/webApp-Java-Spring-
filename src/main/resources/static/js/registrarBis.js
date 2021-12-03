
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

    const responseGet = await fetch('api/usuarios', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
              }
          });

    if(repetirPassword!==datos.password){
      alert("Por favor valide nuevamente la contraseña");
      return;
            }

    if(datos.nombre == "" | datos.apellido == "" | datos.email == "" | datos.password == ""){
      alert("No pueden quedar campos vacíos");
      return;
    }

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!datos.email.match(regex)){
      alert("Ingrese un email válido");
      return;
    }

    let i=0;
    const usuarios = await responseGet.json();
        for(let usuario of usuarios){
            if(usuario.email === datos.email){
            i++;
        }
      }

      if(i>0){
        alert("El email ya está registrado")
      }
        else{
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
                }

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}
