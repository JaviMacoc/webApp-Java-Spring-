/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webApp.controllers;

import com.webApp.dao.UsuarioDao;
import com.webApp.models.Usuario;
import com.webApp.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Usuario
 */
@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jWTUtil;

    private boolean validarToken(String token) {
        String usuarioId = jWTUtil.getKey(token);
        return usuarioId != null;
    }

    @RequestMapping(value = "api/usuarios")
    public List<Usuario> getUsuarios(@RequestHeader(value = "Authorization") String token) {
        if (!validarToken(token)) {
            return null;
        }
        return usuarioDao.getUsuarios();
    }
    
    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST)
    public String registrarUsuario(@RequestBody Usuario u) {        
        List<Usuario> usuarios = usuarioDao.getUsuarios();
        List<Usuario> coincidencias = new ArrayList();        
        usuarios.stream().filter(usuario -> usuario.getEmail().equals(u.getEmail())).forEach(usuario -> {            
            coincidencias.add(usuario);            
        });
        if (!coincidencias.isEmpty()) {
            return "FAIL";
        } else {
            Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
            String hash = argon2.hash(2, 1024, 1, u.getPassword());
            u.setPassword(hash);
            usuarioDao.registrar(u);
            return "EXITO";
        }
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.DELETE)
    public void eliminar(@RequestHeader(value = "Authorization") String token,
            @PathVariable String id) {
        if (!validarToken(token)) {
            return;
        }
        usuarioDao.eliminar(id);
    }

    @RequestMapping(value = "api/usuarios/{id}", method = RequestMethod.PATCH)
    public void editar(@RequestHeader(value = "Authorization") String token,
            @PathVariable String id) {
        if (!validarToken(token)) {
            return;
        }
        usuarioDao.editar(id);
    }

    @RequestMapping(value = "usuario/editar")
    public Usuario editar() {
        Usuario usu = new Usuario();
        usu.setId(UUID.randomUUID().toString());
        usu.setNombre("Horacio");
        usu.setApellido("Klebek");
        usu.setEmail("Hklebek@gmail.com");
        usu.setTelefono("011-5394239");
        usu.setPassword("hh5ljka7");

        return usu;
    }
}
