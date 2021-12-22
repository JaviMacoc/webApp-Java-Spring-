
async function enviarMail(email){
      const response = await fetch('api/recuperar-password', {
      method: 'POST',
      body: email,
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }      
    });    
}

{
  $('#btnForm').click(() => {    
    enviarMail($('#inputEmail').val());        
  });
}
