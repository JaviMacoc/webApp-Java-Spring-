/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.webApp.dao;

import com.webApp.models.Usuario;
import java.util.List;

/**
 *
 * @author Usuario
 */
public interface UsuarioDao {
    
    public List<Usuario> getUsuarios();
        
    public void registrar(Usuario u);
    
    public void eliminar(String id);        

    public void editar(String id);
    
    public Usuario obtenerUsuarioPorCredenciales(Usuario u);    
}
