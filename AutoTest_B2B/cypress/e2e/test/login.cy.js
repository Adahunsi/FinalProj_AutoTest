import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given  ('I am on Login Page',()=>{
    cy.visit('/')
})
And ('I enter username and password',() => {
    cy.Login()
   })
Then ('I click Login button', () => {
    cy.LoginButton()
   })

When ('I waited on the Verification Page', () =>{
    cy.Paause()
})
And ('I entered the otp', () => {
    cy.Verify()
})
Then ('I click the Verify Button', () => {
    cy.VerifyButton()
})
   