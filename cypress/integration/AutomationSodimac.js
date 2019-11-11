'use strict'

/*
describe ('Flujo MicroPlay-1', () => {
    before(() =>{ 
        cy.fixture('dataEntrada1.csv').as('ingresoProducto1')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })

    it ('FLUJO 1: Seleccion de Producto', () =>{
        cy.get('@ingresoProducto1').then((ingresoProducto1) => {
            cy.get('#ip-buscar').type(`${ingresoProducto1}{enter}`)
            cy.wait(2000)
            cy.get('#ip-buscar').clear()
            cy.wait(2000)
            
            
              
        })
           
    
    })

    it('Agregar producto al Carro de Compra', () =>{
        cy.get('.btn-titulo > p').click()
        cy.wait(2000)
        cy.screenshot('Detalle')
        cy.get('.btn-agregar2').click()  
        //cy.wait(2000) 
        cy.wait(8000)
        cy.screenshot('Agregar a Carro de Compra')
        
    })

    it.skip('Validar Producto VS carro de Compra', () =>{
        cy.get('h1').should('have.value', '  Disco Duro 1TB Canvio Advance Rojo Toshiba ')
        cy.wait(2000)
        cy.get('.precios > strong').should('have.value', '48.990')
        //Validar que el nombre y precio Web del producto que se mostraban en el detalle sean los
        //mismos del agregado al carro de compras
    })

    it('Quitar producto del Carro de Compra', () =>{
        cy.get('.btn-borrar').click()
        cy.screenshot('Eliminar de Carro de Compra')  
        cy.get('#val_a_pagar').contains('0') //--> Valida que el valor en el carro de compra sea CERO  
        // Se debe validar que  no este el producto en carro de compra
        
    })

    it('Reporte', () =>{
        cy.writeFile('cypress/fixtures/dataSalida.csv', 'Hello World').then((text) => {
        expect(text).to.equal('Hello World') // true
    })

        //Nombre del producto buscado
        //Precio Web
        //Precio Tienda
        //SKU	del	producto
        
        
    })

    it.skip('Ejemplo de Leer archivo', () =>{
        cy.readFile('cypress/fixtures/dataEntrada.csv');
        
    })


})*/

describe('Flujo MicroPlay-2', () => {
    const json = ['Disco Duro 1TB Canvio Advance Rojo Toshiba', 'Death Stranding PS4', 'Selfie Stick Tripode AF15 Negro Huawei'];

    /*before(() => {
        //    cy.fixture('dataEntrada1.csv').as('ingresoProducto1')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    });*/

    json.forEach(producto => {
        it('Seleccion de Producto', () => {
            cy.visit('https://www.microplay.cl/')
            cy.wait(2000)
            cy.screenshot('inicio-Al-Sitio')
            cy.log(producto);
            cy.get('#ip-buscar').type(`${producto}{enter}`);
            cy.wait(2000);
            cy.get('#ip-buscar').clear();
            cy.wait(2000);
            cy.get('.btn-titulo > p').click();
        });


        it('Agregar producto al Carro de Compra', () => {
            cy.restoreLocalStorageCache();
            cy.wait(2000)
            cy.screenshot('Detalle')
            cy.get('.btn-agregar2').click()
            //cy.wait(2000) 
            cy.wait(8000)
            cy.saveLocalStorageCache();
            cy.screenshot('Agregar a Carro de Compra')
            // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle  

        })
        it('Verificar todos los Productos en el carro de Compra', () => {
            //Verificar que se muestren todos los productos en el carro de compras
        })

        it('Verificar total a Pagar', () => {
            //Verificar que el Total a pagar corresponda a la suma de todos los productos en el carro de
            //compras
        })

        it('Verificar total a Pagar, al quitar productos', () => {
            //Verificar que al quitar uno o varios de los productos (no todos) del carro de compras, su
            //precio se descuente del Total a pagar
        })


        it('Reporte', () => {
            /*El proceso de automatización debe generar un archivo de salida (csv, txt o xls) con la
            siguiente información por cada uno de los productos:
            Nombre del producto buscado
            Precio Web
            Precio Tienda
            SKU del producto
            */
        })



    });





    it('--FIN--', () => {

    })

});