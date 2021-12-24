

package com.webApp.controllers;

import com.webApp.services.EmailServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailServiceImp emailService;
    
    @PostMapping("api/recuperar-password")
    public void recuperarPassword(@RequestBody String email,
            @Value("${spring.mail.username}") String userName){
        emailService.recuperarContraseña(email, userName);        
    }
}
