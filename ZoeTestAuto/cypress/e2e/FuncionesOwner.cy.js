
//Desarrollador: Cristian Almanza Leon
//Fecha: 12/08/2024
//Actividad: Creación de la automatización

describe('Test Scrip funciones Owner', () => {

  beforeEach(() => {                                                        //Funcion de inicio, se ejecuta siempre antes de cada caso de prueba (it)
    cy.visit('/')                                                           //Pagina: Login / Paso a paso para ingreso a la app
    cy.get('#username').type('zoefin.advisor+qaroleadv01@gmail.com')
    cy.get('#password').type('QA.role123')
    cy.get('button[value="default"]').click()
    cy.contains('h3', 'Active Pipeline').should('be.visible')               //Pagina: Inicial (Pipeline) / Validacion de ingreso exitoso a la app 
  })

  it('AgregarUsuario', () => {                                              //Caso de prueba 1
    cy.wait(7000)                                                           //Pagina: Inicial (Pipeline) / Paso a paso para seleccionar e ingresar al perfil de un usuario
    cy.get('#memory-name').should('be.enabled')
    cy.wait(2000) 
    cy.get('#memory-name').type('jhonny doe')
    cy.contains('span', 'jhonny doe').click()
    cy.contains('a', 'Household').click()
    cy.contains('button', 'Add Member').should('be.enabled')
    cy.contains('button', 'Add Member').click()                             //Pagina: Perfil usuario / Paso a paso para buscar agregar usuario
    var registro = Date.now();                                              //Crear constante con fecha en milisegundos (no me permite usar el mismo correo, genero uno aleatorio)
    cy.get('[class^="styles_memberInfo__form"]').find('input').eq(0).type('almanza' + registro + '@correo.com')   //Pagina: Formulario nuevo usuario / Llenado de formulario
    cy.get('[class^="styles_memberInfo__form"]').find('input').eq(1).should('be.enabled')
    cy.get('[class^="styles_memberInfo__form"]').find('input').eq(1).type('Cristian')
    cy.get('[class^="styles_memberInfo__form"]').find('input').eq(2).type('Almanza')
    cy.get('[class^="styles_memberInfo__form"]').find('input').eq(3).type('3132548745')
    cy.contains('button', 'Add Member').should('be.enabled')
    cy.get('[class^="styles_memberInfo__button"]').click()                    //Pagina: Formulario nuevo usuario / Guardado de informacion nuevo usuario
    cy.contains('p', 'Member Added!').should('be.visible')
    cy.contains('p', 'Cristian Almanza').should('be.visible')                 //Pagina: Perfil usuario / Confirmacion de guardado exitoso del nuevo usuario
  })

  it('EditarUsuario', () => {                                               //Caso de prueba 2
    cy.wait(7000)                                                           //Pagina: Inicial (Pipeline) / Paso a paso para seleccionar e ingresar al perfil de un usuario
    cy.get('#memory-name').should('be.enabled')
    cy.wait(2000) 
    cy.get('#memory-name').type('jhonny doe')
    cy.contains('span', 'jhonny doe').click()
    cy.contains('a', 'Household').click()                                 
    cy.contains('p', 'Cristian Almanza').parents().eq(2).find('.fa-pen-to-square').click()         //Pagina: Perfil usuario / Identifica al usuario creado para editar
    cy.get('[class^="styles-module_baseInput__input"]').find('input').eq(1).should('be.enabled')   //Pagina: Formulario editado usuario / Modifica informacion y la guarda
    cy.get('[class^="styles-module_baseInput__input"]').find('input').eq(1).clear()
    cy.get('[class^="styles-module_baseInput__input"]').find('input').eq(1).type('Editado')
    cy.get('[class^="styles-module_baseInput__input"]').find('input').eq(3).clear()
    cy.get('[class^="styles-module_baseInput__input"]').find('input').eq(3).type('3132540000')
    cy.contains('button', 'Save Changes').should('be.enabled')
    cy.contains('button', 'Save Changes').click()
    cy.contains('p', 'Changes Saved').should('be.visible') 
    cy.contains('p', 'Editado Almanza').should('be.visible')                                         //Pagina: Perfil usuario / Confirmacion de edicion exitosa del nuevo usuario
  })  

  it('EliminarUsuario', () => {                                             //Caso de prueba 3
    cy.wait(7000)                                                           //Pagina: Inicial (Pipeline) / Paso a paso para seleccionar e ingresar al perfil de un usuario
    cy.get('#memory-name').should('be.enabled')
    cy.wait(2000) 
    cy.get('#memory-name').type('jhonny doe')
    cy.contains('span', 'jhonny doe').click()
    cy.contains('a', 'Household').click()                                 
    cy.contains('p', 'Editado Almanza').parents().eq(2).find('.fa-trash').click()                    //Pagina: Perfil usuario / Identifica al usuario creado para eliminar
    cy.contains('button', 'Remove').click()
    cy.contains('p', 'Editado Almanza').should('not.exist')                                          //Pagina: Perfil usuario / Confirmacion de eliminacion exitosa del usuario
  })  
})