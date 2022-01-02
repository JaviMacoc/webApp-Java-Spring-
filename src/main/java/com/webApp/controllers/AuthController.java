/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webApp.controllers;

import com.webApp.dao.UsuarioDao;
import com.webApp.models.Usuario;
import com.webApp.utils.JWTUtil;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class AuthController {

    @Autowired
    UsuarioDao usuarioDao;
    @Autowired
    JWTUtil jwtutil;    

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public Object login(@RequestBody Usuario u) {

        Usuario usuarioLogueado = usuarioDao.obtenerUsuarioPorCredenciales(u);
        if (usuarioLogueado != null) {
            String tokenJWT = jwtutil.create(usuarioLogueado.getId(), usuarioLogueado.getEmail(), usuarioLogueado.isUsuarioAdmin());            
            ObJson obJson = new ObJson(tokenJWT, jwtutil.esAdmin(tokenJWT));            
            return obJson;
        }
        return "FAIL";
    }

    @ToString
    class ObJson {

        @Getter        @Setter
        private String token;
        @Getter        @Setter
        private boolean admin;

        public ObJson() {
        }

        public ObJson(String token, boolean admin) {
            this.token = token;
            this.admin = admin;
        }
    }
}
