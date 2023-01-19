# Front-End-Internship-Task

This is a Front-end task used in the recruitment process at **Forte Digital**. This repo is created based on the `create-react-app`. It consists of a list of interns. For now it has two pages:
​

1. Intern List page
1. Edit Intern page

To check your Front-end skills please complete three tasks specified in this document and send us zipped repo to an address you have received in the email. Before zipping the repo remember to remove `node_modules` directory.
<br>
<br>
To run the development environment please install node: https://nodejs.org/en/download/ and yarn: https://classic.yarnpkg.com/en/docs/install/.
<br>
<br>
API is implemented using json-server. It's configured to serve the content from the db.json file. For details of json-server please go to https://github.com/typicode/json-server.
​<br>
<br>
The rest of the instructions can be found in README in the `front-end-internship` folder.

## Remark

We do not expect that you will implement all of the features on your own. You are free to install external libraries. However, you should show us that you can do some styling on your own. Also, try not to over-engineer this task.

## Task One - Validation of intern editing

You need to work on the `Edit Intern` page.

- Load details of an intern from API (http://localhost:3001/interns/:id) and display it in the form
- Add Missing fields: `internshipStart`, `internshipEnd` allowing to edit dates
- Make all fields required (name, email, internshipStart, internshipEnd)
- Validate if the email is correct
- Validate if `internshipEnd` date is after `internshipStart` date
- Update intern data in `db.json` on form submit using API endpoint (PUT http://localhost:3001/interns/:id)

## Task Two - Add `Add intern` page

You should create new page for adding a new intern.

- Link to the page should be in the `Intern List` page heading
- `Add intern` page should have the same form fields and validation as `Edit Intern` page
- Add intern to `db.json` on form submit using API endpoint (POST http://localhost:3001/interns)
- Consider reusing components added in the "Task One"

## Task Three - Page styling and semantic HTML

​You need to work on `Intern List`, `Add Intern` and `Edit Intern` page.

- Change the HTML markup to the more semantic one.
- Style both pages according to the design:
  https://www.figma.com/file/DNF5oDSn7NTO4Ls1kVkK1K/Task?node-id=1%3A2
- Remember about accessibility and RWD
