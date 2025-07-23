let data
beforeEach(() =>{
    cy.fixture('elementsLocators').then((el) =>{
        data = el
    })
})

Cypress.Commands.add('Login', ()=>{
    cy.get(data.emailField).type(data.loginMail)
    cy.get(data.passWordField).type(data.password)
})

Cypress.Commands.add('LoginButton', ()=>{
    cy.get(data.loginButton).click()
})

Cypress.Commands.add('Paause', ()=>{
    cy.wait(5000);
})

Cypress.Commands.add('Verify', ()=>{
    cy.get(data.otpField).should('be.visible').type(data.otp)
})

Cypress.Commands.add('VerifyButton', ()=>{
    cy.get(data.verifyButton).click()
})