const seleccionProducto = wait => {
    cy.get('@ingresoProducto1').then((ingresoProducto1) => {
        cy.get('#ip-buscar').type(`${ingresoProducto1}{enter}`)
        cy.wait(2000)
        cy.get('#ip-buscar').clear()
        cy.wait(2000)



    })
}

const agregarCarro = wait => {
    cy.get('.btn-titulo > p').click()
    cy.wait(2000)
    cy.screenshot('Detalle')
    cy.get('.btn-agregar2').click()
    //cy.wait(2000) 
    cy.wait(8000)
    cy.screenshot('Agregar a Carro de Compra')

    //cy.screenshot('titulo');
};

const validarProducto = wait => {
    cy.get('h1').should('have.value', '  Disco Duro 1TB Canvio Advance Rojo Toshiba ')
    cy.wait(2000)
    cy.get('.precios > strong').should('have.value', '48.990')
    //Validar que el nombre y precio Web del producto que se mostraban en el detalle sean los
    //mismos del agregado al carro de compras
}

const quitarProducto = wait => {
    cy.get('.btn-borrar').click()
    cy.screenshot('Eliminar de Carro de Compra')
    cy.get('#val_a_pagar').contains('0') //--> Valida que el valor en el carro de compra sea CERO  
    // Se debe validar que  no este el producto en carro de compra
}

const reporte = wait => {
    cy.writeFile('cypress/fixtures/dataSalida.csv', 'Hello World').then((text) => {
        expect(text).to.equal('Hello World') // true
        //Nombre del producto buscado
        //Precio Web
        //Precio Tienda
        //SKU	del	producto

    });

}





module.exports = {
    agregarCarro,
    validarProducto,
    quitarProducto,
    reporte,

};

