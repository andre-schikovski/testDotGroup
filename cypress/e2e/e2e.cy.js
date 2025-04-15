
describe ('Acessar o portal https://www.saucedemo.com/', function() {
    beforeEach(function() {
        //Acessar o portal https://www.saucedemo.com/
        cy.visit('https://www.saucedemo.com/')
        it ('Valida_titulo', function() {
            cy.title().should('be.equal','Swag Labs')
                           
        })

    })
    
        //Login na plataforma de vendas com usuário válido
        it ('Login na plataforma de vendas', function() {
                
            cy.get('[data-test="username"]')
            .should('be.visible')
            .type('standard_user')
        
            cy.get('[data-test="password"]')
            .should('be.visible')
            .type('secret_sauce')

            cy.get('[data-test="login-button"]').click()
            cy.get('.title').should('be.visible')
            cy.get('.title').should('have.text','Products')
            cy.get('.shopping_cart_link').should('be.visible')
            cy.get('#react-burger-menu-btn').contains('Open Menu').click()
            cy.get('.bm-menu-wrap').should('be.visible')
            cy.get('.bm-menu').contains('Logout').click()
                       
                        
        })

        //Venda de 1 item a partir da vitrine.
        it ('Venda de 1 produto com sucesso', function() {
            
            cy.login('standard_user', 'secret_sauce');

            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('Lucas')
            cy.get('[data-test="lastName"]').type('Almeida')
            cy.get('[data-test="postalCode"]').type('12345678')
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('be.visible')
            cy.get('.complete-header').should('have.text','Thank you for your order!')

            //Voltar para página inicial
            cy.voltarParaVitrine();
            
            //cy.get('[data-test="back-to-products"]').click()
            //cy.get('.title').should('be.visible') 
        
                        
        })

     //Venda de 1 item a partir da página de detalhes de produto.
        it ('Venda 1 produto via página de detalhe de produto', function() {
                        
            cy.login('standard_user', 'secret_sauce');
            
            cy.get('[data-test="item-3-title-link"] > [data-test="inventory-item-name"]').click()
            cy.get('.inventory_details_desc').should('be.visible')
            cy.get('[data-test="add-to-cart"]').click()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('Lucas')
            cy.get('[data-test="lastName"]').type('Almeida')
            cy.get('[data-test="postalCode"]').type('12345678')
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('be.visible')
            cy.get('.complete-header').should('have.text','Thank you for your order!')

            //Voltar para página inicial
            cy.voltarParaVitrine();
            
     })


        //Venda composta 3 itens com exclusão de 1 item do carrinho.
        it ('Venda composta 3 itens + Exclusão de item do carrinho ', function() {
                        
            cy.login('standard_user', 'secret_sauce');
            
            cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
            cy.get('.inventory_details_desc').should('be.visible')
            cy.get('[data-test="add-to-cart"]').click()
            cy.get('[data-test="back-to-products"]').click()

            cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click()
            cy.get('.inventory_details_desc').should('be.visible')
            cy.get('[data-test="add-to-cart"]').click()
            cy.get('[data-test="back-to-products"]').click()

            cy.get('[data-test="item-1-title-link"] > [data-test="inventory-item-name"]').click()
            cy.get('.inventory_details_desc').should('be.visible')
            cy.get('[data-test="add-to-cart"]').click()
            cy.get('[data-test="shopping-cart-link"]').click()
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('Lucas')
            cy.get('[data-test="lastName"]').type('Almeida')
            cy.get('[data-test="postalCode"]').type('12345678')
            cy.get('[data-test="continue"]').click()
            cy.get('[data-test="finish"]').click()
            cy.get('.complete-header').should('be.visible')
            cy.get('.complete-header').should('have.text','Thank you for your order!')

            //Voltar para página inicial
            cy.voltarParaVitrine();

           
        })    
        

       //Validar opções de filtro de produtos na vitrine de produtos.
        it ('Validar componente de filtro de produtos na vitrine', function() {
                            
            cy.login('standard_user', 'secret_sauce');
            
            cy.get('[data-test="product-sort-container"]').select('Name (Z to A)');
            cy.get('[data-test="product-sort-container"]').should('have.value','za')
                      
            cy.get('[data-test="product-sort-container"]').select('Price (low to high)');
            cy.get('[data-test="product-sort-container"]').should('have.value','lohi')
            
            cy.get('[data-test="product-sort-container"]').select('Price (high to low)');
            cy.get('[data-test="product-sort-container"]').should('have.value','hilo')
            
            cy.get('[data-test="product-sort-container"]').select('Name (A to Z)');
            cy.get('[data-test="product-sort-container"]').should('have.value','az')
            
   
            
        })
        
    })
