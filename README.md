# Front-End-Internship-Task

This is a front-end task for your internship in Forte Digital. This repo is created based on `create-react-app`. It consists of a list of interns. It has two pages:
​
1. List of interns
1. Edit intern page

To check your front-end skills please complete two tasks specified in this document and send us zipped repo to an address you have received in the email. Before zipping repo remember to remove `node_modules` directory.
​
To run the development environment please install node: https://nodejs.org/en/download/ and yarn: https://classic.yarnpkg.com/en/docs/install/.

API is implemented using json-server. It's configured to serve content from db.json file. For details of json-server please go to https://github.com/typicode/json-server.   
​
The rest of the instructions can be found in README in the `front-end-internship` folder.

## Remark

We do not expect that you will implement all of the features on your own. You are free to install external libraries. However, you should show us that you can do some styling on your own. Also, try not to over-engineer this task.

## Task One - validation of intern editing
​
You need to work on the intern edit page.
​
- Load details of an intern from API (http://localhost:3001/interns/:id) and display it in the form
- Add Missing fields: `internshipStart`, `internshipEnd` allowing to edit dates
- Make all fields required (name, email, internshipStart, internshipEnd)
- Validate if the email is correct
- Validate if `internshipEnd` after `internshipStart`
- Update intern data in `db.json` on form submit using API endpoint (PUT http://localhost:3001/interns/:id)
​
## Task Two - Style components
​
Please style pages according to the design: https://www.figma.com/file/DNF5oDSn7NTO4Ls1kVkK1K/Task?node-id=1%3A2