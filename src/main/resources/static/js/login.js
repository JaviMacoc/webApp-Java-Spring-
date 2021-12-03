
//let btnIngresar=document.getElementById("btnIngresarHTML");
//const ingresar = btnIngresar.addEventListener("click", iniciarSesion());

async function iniciarSesion() {
    let datos = {};
    datos.email = document.getElementById("emailHTML").value;
    datos.password = document.getElementById("passwordHTML").value;

    const response = await fetch('api/login', {
          method: 'POST',
          body: JSON.stringify(datos),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    });

    const auth = await response.text();
    if(auth !== "FAIL"){
        localStorage.token = auth;
        localStorage.email = datos.email;
        window.location.href = "usuarios.html";
    }else{
        alert("El correo electrónico o nombre de usuario que ingresaste no está conectado a una cuenta. Encuentra tu cuenta e inicia sesión.");
    }
}
