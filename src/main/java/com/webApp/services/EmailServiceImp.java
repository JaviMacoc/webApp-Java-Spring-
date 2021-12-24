package com.webApp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@Service
@RestController
public class EmailServiceImp implements EmailService{
    
    private String mensaje;
        
    @Autowired
    private JavaMailSender javaMailSender;
    
    @Override
    public void recuperarContraseña(String email, String userName){
        mensaje = "OK";
        SimpleMailMessage respuestaEmail = new SimpleMailMessage();
        respuestaEmail.setFrom(userName);
        respuestaEmail.setTo(email);
        respuestaEmail.setSubject("Recuperación de contraseña");
        respuestaEmail.setText(mensaje);
        
        javaMailSender.send(respuestaEmail);
        System.out.println(respuestaEmail);
    }
    

}
