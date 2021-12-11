// Call the dataTables jQuery plugin
$(document).ready(function () {
cargarUsuarios();
$('#usuarios').DataTable();
actualizarEmailUsuario();
});

function getHeaders(){
  return{
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': localStorage.token
  }
}

async function cargarUsuarios() {
        const response = await fetch('api/usuarios', {
        method: 'GET',
        headers: getHeaders()
        });
                const usuarios = await response.json();
                console.log(usuarios);
                let listaUsuHTML = '';
                for (let usuario of usuarios) {
                let botonEliminar = '<a href="#" onclick="eliminarUsuario(\'' + usuario.id + '\')" class="btn btn-danger btn-circle btn-sm">\n\
                                    <i class="fas fa-trash"></i></a>\n\
                                    <a href="#" onclick="editarUsuario(\'' + usuario.id + '\')" class="btn btn-danger btn-circle btn-sm">\n\
                                                        <i class="fas fa-info-circle"></i></a>';
                let telefono = usuario.telefono == null ? "-" : usuario.telefono;

                let usuarioHtml = '<tr><td>' + usuario.id + '</td><td>' + usuario.nombre + ' ' + usuario.apellido + '</td><td>'
                + usuario.email + '</td><td>' + telefono
                + '</td><td>' + botonEliminar + '</td></tr>';
                listaUsuHTML += usuarioHtml;
        }
        document.querySelector('#usuarios tbody').outerHTML = listaUsuHTML;
        }


async function eliminarUsuario(id) {
    if(!confirm('Desea eliminar este usuario?')){
      return;
    }
    const response = await fetch('api/usuarios/'+id, {
            method: 'DELETE',
            headers: getHeaders()
          });
    location.reload();
    }

async function editarUsuario(){
  const response = await fetch('api/usuarios/'+id, {
          method: 'PATCH',
          headers: getHeaders()
        });
        location.reload();
  }

function actualizarEmailUsuario(id){
    let emailUsuario = document.getElementById('txt-email-usuario');
    emailUsuario.outerHTML = localStorage.email;
  }
