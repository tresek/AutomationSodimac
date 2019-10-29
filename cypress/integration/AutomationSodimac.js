'use strict'

describe ('Flujo Micro-Play', () => {
    beforeEach(() =>{ // Esto indica que esta intruccion, se ejecutará antes que corra cada Test
       cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })

    it ('Seleccion de Producto', () =>{
        cy.get('#ip-buscar').type('38372{enter}')
        cy.wait(2000)
        cy.get('.btn-titulo > p').click()
        cy.wait(2000)
        //cy.screenshot('Detalle')
        cy.get('.btn-agregar2').click()          
    })

    it ('Agregar producto al Carro de Compra', () =>{
        
        cy.wait(8000)
        cy.screenshot('Agregar a Carro de Compra')
        // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle  
       
    })

    it ('Quitar producto del Carro de Compra', () =>{
        cy.get('.btn-borrar').click()
        cy.screenshot('Eliminar de Carro de Compra')  
        cy.get('#val_a_pagar').should(be.visible) // Se debe validar que el resultado sea cero
        
    })

    it ('Informe de salida', () =>{
        
        
    })

    it ('Flujo 2', () =>{
        

    })

} )