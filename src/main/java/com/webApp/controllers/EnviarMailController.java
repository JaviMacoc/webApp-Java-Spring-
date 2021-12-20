package com.webApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class EnviarMailController {
    
    private String mensaje;
        
    @Autowired
    private JavaMailSender javaMailSender;
    @RequestMapping("api/recuperar-password")
    public void recuperarContraseña(@RequestBody String email){
        mensaje = "OK";
        SimpleMailMessage respuestaEmail = new SimpleMailMessage();
        respuestaEmail.setFrom("${spring.mail.username}");
        respuestaEmail.setTo(email);
        respuestaEmail.setText(mensaje);
        
        javaMailSender.send(respuestaEmail);
        System.out.println(respuestaEmail);
    }
    

}
