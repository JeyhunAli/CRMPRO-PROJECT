Feature: Free CRM Create Contacts
@contacts
Scenario Outline: Free CRM Create a new contact scenario

Given user is already on Login Page
When title of login page is Free CRM
Then user entering username and password "<username>" and "<password>"
Then user is clicking on login button
Then user is on home page
Then user moves to new contact page
Then user entering contact details "<firstname>" and "<lastname>" and "<position>"
Then Close the browser

Examples:
	| username | password | firstname | lastname | position |
	|Jeyhun01  |789456    |Jeyhun     |  Aliyev  | Manager  |
	
	
	
	
	
	
#	| naveenk  | test@123 | Tom 	  | Peter    | Manager  |
#	| naveenk  | test@123 | David 	  | Dsouza   | Director |
#	
#	
	
	