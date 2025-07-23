Feature: B2B Dashboard

Scenario: Login
   Given  I am on Login Page
   And I enter username and password
   Then I click Login button
   When I waited on the Verification Page
   And I entered the otp 
   Then I click the Verify Button