const seleccionProducto = wait => {
    cy.get('@ingresoProducto1').then((ingresoProducto1) => {
    cy.get('#ip-buscar').type(`${ingresoProducto1}{enter}`)
    cy.wait(2000)
    cy.get('#ip-buscar').clear();
    cy.wait(2000)



    })

}

const agregarCarro = wait => {
    cy.get('.btn-titulo > p').click();
    cy.wait(2000)
    cy.screenshot('Detalle de Producto')
    cy.get('.btn-agregar2').click();
    
};

const validarProducto = wait => {
    cy.get('h1').should('have.value', 'Disco Duro 1TB Canvio Advance Rojo Toshiba')
    cy.wait(2000)
    cy.get('.precios > strong').should('have.value', '48.990')
    
}

const quitarProducto = wait => {
    cy.get('.btn-borrar').click();
    cy.get('#val_a_pagar').contains('0') //--> Valida que el valor en el carro de compra sea CERO  
    // Se debe validar que  no este el producto en carro de compra
}

const reporte = wait => {
    cy.writeFile('cypress/fixtures/dataSalida.csv', 'Hello World').then((text) => {
        expect(text).to.equal('Hello World') // true
    })

}

const seleccionProducto2 = wait => {
    cy.log(producto);
    cy.get('#ip-buscar').type(`${producto}{enter}`);
    cy.wait(2000);
    cy.get('#ip-buscar').clear();
    cy.wait(2000);
    cy.get('.btn-titulo > p').click();
    cy.get('.btn-agregar2').click();
}

const agregarAlCarroCompra = wait => {
    let sku;
    let precio;
    let nombre;
    cy.get('h1')
        .invoke('text')
        .then(text => {
            nombre = text.trim();
        });
    cy.get('.precios > :nth-child(1)')
        .invoke('text')
        .then(text => {
            sku = text.trim();
        });
    cy.get('.precios > strong')
        .invoke('text')
        .then(text => {
            precio = text.trim();
        });
    let product = {
        nombre: nombre,
        sku: sku,
        precio: precio,
    };
    products.push(product);
    cy.wait(2000);
    cy.get('.btn-agregar2').click();
    cy.get('.seguir').click();
    // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle

}

const validacionTotalPagar = wait => {
    cy.visit('https://www.microplay.cl/orders/view_cart');
    cy.wait(2000);

    let sum = 0;
    const table = cy.get('.left').get('table');

    table.get('tbody > tr > td.precio > span').each(el => {
        sum += Number(el.text());
    }).then(() => {
        cy.get('#val_a_pagar').then(el => {
            const total = el.text();
            expect(total).equal(sum.toLocaleString('CL'));
        });
    })
}


const validarDescuentoPagar = wait => {
    cy.get('#product_item_box_14759 > :nth-child(5) > .btn-borrar').click();
    cy.visit('https://www.microplay.cl/orders/view_cart');
    cy.wait(2000);

    let sum = 0;
    const table = cy.get('.left').get('table');

    table.get('tbody > tr > td.precio > span').each(el => {
        sum += Number(el.text());
    }).then(() => {
        cy.get('#val_a_pagar').then(el => {
            const total = el.text();
            expect(total).equal(sum.toLocaleString('CL'));
        });
    })
}


const reporte2 = wait => {
   //Reorte 2
}

after(() => {
    cy.log(products);
    cy.writeResultFile(products);
});



module.exports = {
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


};

