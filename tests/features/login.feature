Feature: Login

    Scenario: Login with valid credentials
        When I navigate to the login page
        And I enter a valid username and password
        And I click the login button
        Then I should be redirected to the dashboard page