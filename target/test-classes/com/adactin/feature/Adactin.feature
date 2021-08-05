Feature: User want to book the hotel room 

Background: User want to login the application 
	Given User want to launch the application 
	When User enter the valid "vinovicky" username in the textbox 
	And User enter the valid "Jan@2020" password in the textbox 
	Then User validate the username and password 
	
Scenario Outline: User want to login the application 
	Given User want to launch the application 
	When User enter the valid "<Username>" username in the textbox 
	And User enter the valid "<Password>" password in the textbox 
	Then User validate the username and password 
	
	Examples: 
	
		|Username|Password|
		|AAA|111|
		|BBB|222|
		|vinovicky|Jan@2020|