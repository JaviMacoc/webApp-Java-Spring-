/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webApp.dao;

import com.webApp.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Usuario
 */


@Repository
@Transactional
public class UsuarioDaoImp implements UsuarioDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override    
    public List<Usuario> getUsuarios() {
        String query = "FROM Usuario";
        List<Usuario> resultado = entityManager.createQuery(query, Usuario.class).getResultList();
        return resultado;
    }

    @Override
    @Transactional
    public void registrar(Usuario u) {
        entityManager.merge(u);
    }

    @Override
    @Transactional
    public void eliminar(String id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        entityManager.remove(usuario);
    }

    @Override
    public Usuario obtenerUsuarioPorCredenciales(Usuario u) {
        String query = "FROM Usuario WHERE email = :email";
        List<Usuario> lista = entityManager.createQuery(query)                
                .setParameter("email", u.getEmail())
                .getResultList();
        if (lista.isEmpty()) {
            return null;
        }
        String passwordHashed = lista.get(0).getPassword();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if (argon2.verify(passwordHashed, u.getPassword().getBytes())) {
            return lista.get(0);
        }        
        return null;
    }

    @Override
    @Transactional
    public void editar(String id) {
        Usuario usuario = entityManager.find(Usuario.class, id);
        usuario.setNombre(id);
        //Hacer implementacion de seteo de propiedades + persistencia
        
    }

}
