# Front-End-Internship-Task

This is a front end task for your internship in Forte Digital. This repo is created based on create react app. It consist of list of interns. Is has two pages:
1. List of interns
1. Edit intern page

To check your skills, if it comes to front end technologies, please complete two tasks and send a link to your fork of github repository. 

In order to run development environment please install node: https://nodejs.org/en/download/ and yarn: https://classic.yarnpkg.com/en/docs/install/. 

Rest of instruction can be found in README in front-end-internship folder. 

## Task One - validation of intern edition

You need to work on intern edit page. Please add:
* Load details of intern from API (http://localhost:3001/interns/:id) and display it in on the form
* Add missing fields: internshipStart, internshipEnd allowing to edit dates
* Add validation required validation for all of fields (name, email, internshipStart, internshipEnd )
* Validate that email is correct
* Validate that internshipEnd is after internshipStart
* Submit form, make changes to interns using API (PUT http://localhost:3001/interns/:id)

## Task Two - styling components
Please style two pages according to design: