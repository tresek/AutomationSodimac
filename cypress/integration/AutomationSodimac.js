'use strict'
describe('Flujo MicroPlay-1', () => {
    before(() => {
        cy.fixture('dataEntrada1.csv').as('ingresoProducto1')
        cy.visit('https://www.microplay.cl/')
        cy.wait(2000)
        cy.screenshot('inicio-Al-Sitio')
    })

    it('FLUJO 1: Seleccion de Producto', () => {
        cy.get('@ingresoProducto1').then((ingresoProducto1) => {
            cy.get('#ip-buscar').type(`${ingresoProducto1}{enter}`)
            cy.wait(2000)
            cy.get('#ip-buscar').clear()
            cy.wait(2000)



        })


    })

    it('Agregar producto al Carro de Compra', () => {
        cy.get('.btn-titulo > p').click()
        cy.wait(2000)
        cy.screenshot('Detalle')
        cy.get('.btn-agregar2').click()
        //cy.wait(2000) 
        cy.wait(8000)
        cy.screenshot('Agregar a Carro de Compra')

    })

    it.skip('Validar Producto VS carro de Compra', () => {
        cy.get('h1').should('have.value', '  Disco Duro 1TB Canvio Advance Rojo Toshiba ')
        cy.wait(2000)
        cy.get('.precios > strong').should('have.value', '48.990')
        //Validar que el nombre y precio Web del producto que se mostraban en el detalle sean los
        //mismos del agregado al carro de compras
    })

    it('Quitar producto del Carro de Compra', () => {
        cy.get('.btn-borrar').click()
        cy.screenshot('Eliminar de Carro de Compra')
        cy.get('#val_a_pagar').contains('0') //--> Valida que el valor en el carro de compra sea CERO  
        // Se debe validar que  no este el producto en carro de compra

    })

    it('Reporte', () => {
        cy.writeFile('cypress/fixtures/dataSalida.csv', 'Hello World').then((text) => {
            expect(text).to.equal('Hello World') // true
        })

        //Nombre del producto buscado
        //Precio Web
        //Precio Tienda
        //SKU	del	producto


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
        it('Seleccion de Producto', () => {
            cy.log(producto);
            cy.get('#ip-buscar').type(`${producto}{enter}`);
            cy.wait(2000);
            cy.get('#ip-buscar').clear();
            cy.wait(2000);
            cy.get('.btn-titulo > p').click();

        });

        it('Agregar producto al Carro de Compra', () => {
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
            cy.screenshot('Agregar a Carro de Compra');
            // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle
        });


    });

    it('Validación Total a Pagar ', () => {
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
    });

    it('Validar Descuento del total a Pagar', () => {
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

    });

    it('Reporte', () => {

        // aqui se debe validar el nombre y precio web, debe ser el mismo que estaba en el detalle  
    });

    after(() => {
        cy.log(products);
        cy.writeResultFile(products);
    });

});