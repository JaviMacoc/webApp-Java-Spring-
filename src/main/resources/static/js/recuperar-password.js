
async function enviarMail(email){
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(!$('#inputEmail').val().match(regex)){
    alert('Ingrese un email válido')
  }else{
    const response = await fetch('api/recuperar-password', {
    method: 'POST',
    body: email,
    headers: {
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
      }      
    });    
  }
}

{
  $('#btnForm').click(() => {    
    enviarMail($('#inputEmail').val());        
  });
}
