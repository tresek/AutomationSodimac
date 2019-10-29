'use strict'

describe ('Flujo Micro-Play', () => {
    beforeEach(() =>{ 
        cy.fixtures('dataEntrada.json').as('ingresoProducto')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })

    it ('Seleccion de Producto', () =>{
        cy.get('@ingresoProducto').then((ingresoProducto) =>{
            cy.get('#ip-buscar').type(ingresoProducto.Prod-1)
            cy.wait(2000)
            cy.get('.btn-titulo > p').click()
        })
        //cy.get('#ip-buscar').type('38372{enter}')
        //cy.wait(2000)
        //cy.get('.btn-titulo > p').click()
        //#### Leer archivo ###

        
        //cy.wait(2000)
        //cy.screenshot('Detalle')
        //cy.get('.btn-agregar2').click()  
        //cy.wait(2000)        
    })

    it.skip('Agregar producto al Carro de Compra', () =>{
        
        cy.wait(8000)
        cy.screenshot('Agregar a Carro de Compra')
        // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle  
       
    })

    it.skip('Quitar producto del Carro de Compra', () =>{
        cy.get('.btn-borrar').click()
        cy.screenshot('Eliminar de Carro de Compra')  
        cy.get('#val_a_pagar').should(be.visible) // Se debe validar que el resultado sea CERO y que no aparezca el producto
        
    })

    it.skip('Informe de salida', () =>{
        /*Nombre del producto buscado
        Precio Web
        Precio Tienda
        SKU	del	producto
        */
        
    })

    it.skip('Ejemplo de Leer archivo', () =>{
        cy.readFile('cypress/fixtures/data.csv');
        
    })


    it ('Flujo 2', () =>{
    /*  - leer un producto luego ingresar en la busqueda y Agregar al carro de compra. Esto por N veces
        - validar que se muestren todos en el carro de compra
        - Validar que el total a pagar sea correcto.
        - Validar que al descontar productos, el precio es descontado del total
        - Se debe entregar informe con:
            Nombre del producto buscado
            Precio Web
            Precio Tienda
            SKU	del	producto
        */

    })

} )