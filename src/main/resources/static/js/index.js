$(document).ready(function () {
  if(window.sessionStorage.token==null){
    window.location.href = "login.html";
  }
});

async function autenticar(){
  const request = await fetch('index.html',{
      method: 'GET',
      headers: {
        'Authorization': sessionStorage.token
      }
    });
      var miHeaders = new miHeaders();
      const sessionToken = miHeaders.get('Authorization');
      if(sessionToken==null){
        window.location.href = "login.html";
      }
  }
