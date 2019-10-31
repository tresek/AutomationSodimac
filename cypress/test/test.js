const {
    seleccionProducto,
    agregarCarro,
    validarProducto,
    quitarProducto,
    reporte,
    seleccionProducto2,
    agregarAlCarroCompra,
    validacionTotalPagar,
    validarDescuentoPagar,
    reporte2,
	
}= require('../modules/AutomationSodimac');

'use strict'
describe('Flujo MicroPlay-1', () => {
    before(() => {
        cy.fixture('dataEntrada1.csv').as('ingresoProducto1')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })
    

    it ('Seleccion de Producto', () =>{
        seleccionProducto(2000);
        cy.screenshot('Selecion-Producto');
           
    })

    it('Agregar producto al Carro de Compra', () =>{
        agregarCarro(2000);
        cy.screenshot('Agregar-Producto');
        
    })

    it('Validar Producto VS carro de Compra', () =>{
        validarProducto(2000);
        
       
    })

    it('Quitar producto del Carro de Compra', () =>{
        quitarProducto(2000);
        cy.screenshot('Eliminar-producto');
        
    })

    it('Reporte primer Flujo', () =>{
        reporte(2000)
    })


})


describe('Flujo MicroPlay-2', () => {
    const json = ['Disco Duro 1TB Canvio Advance Rojo Toshiba', 'Death Stranding PS4'];

    before(() => {
        cy.visit('https://www.microplay.cl/');
        cy.wait(2000);
        cy.screenshot('inicio-Al-Sitio');
        cy.clearCookies();
    });

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });

    afterEach(() => {
        cy.saveLocalStorageCache();
    });

    json.forEach(producto => {

        it('Seleccion de Producto', () =>{
            seleccionProducto2(2000)
            cy.screenshot('Selecion-Producto2');
        })

        it('Agregar producto al Carro de Compra', () =>{
            agregarAlCarroCompra(2000)
            cy.screenshot('Agregar-producto');
        })

    });

    it('Validación Total a Pagar', () =>{
        validacionTotalPagar(2000)
        cy.screenshot('Total-A-Pagar');
    });

    it('Validar Descuento del total a Pagar', () =>{
        validarDescuentoPagar(2000)
        cy.screenshot('Descuento');
    });

    
})






module.exports = this;