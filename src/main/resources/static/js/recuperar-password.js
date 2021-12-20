
async function enviarMail(email){
      const response = await fetch('api/recuperar-password', {
      method: 'POST',
      body: email,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }      
    });
    console.log("Se ejecuto la funcion");
}

{
  $('#btnForm').click(() => {
    enviarMail($('#inputEmail').val());
    console.log("Se ejecuto el evento submit");
  });
}