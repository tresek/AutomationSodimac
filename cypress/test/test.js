const {
    selecionProducto,
    agregarCarro,
    validarProducto,
    quitarProducto,
    reporte,
	


}= require('../modules/AutomationSodimac');

describe ('Flujo MicroPlay-1', () => {
    before(() =>{ 
        cy.fixture('dataEntrada1.csv').as('ingresoProducto1')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })

    it ('Seleccion de Producto', () =>{
        selecionProducto(2000);
           
    
    })

    it('Agregar producto al Carro de Compra', () =>{
        agregarCarro(2000);
        
    })

    it.skip('Validar Producto VS carro de Compra', () =>{
        validarProducto(2000);
        //Validar que el nombre y precio Web del producto que se mostraban en el detalle sean los
        //mismos del agregado al carro de compras
    })

    it('Quitar producto del Carro de Compra', () =>{
        quitarProducto(2000);
        
    })

    it('Reporte', () =>{
        reporte(2000)
    })

        //Nombre del producto buscado
        //Precio Web
        //Precio Tienda
        //SKU	del	producto
        
        
    

    it.skip('Ejemplo de Leer archivo', () =>{
        cy.readFile('cypress/fixtures/dataEntrada.csv');
        
    })


})

        




module.exports = this;