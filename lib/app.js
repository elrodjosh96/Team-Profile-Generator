const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./employee');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

const employeeArray = []
const html = []

function displayEmployeeCards(array) {
    array.forEach(element => {
        const role = element.getRole()

        switch (role) {
            case 'Manager':
                const manager = `
                <article class='message'>
                <div class='message-body'>
                <p class='title'>${element.name}</p>
                <span class='tag is-black mb-1'>${element.getRole()}</span>
                <p>Employee ID: ${element.id}</p>
                <p>Office Number: ${element.officeNumber}</p>
                <a href='mailto:${element.email}'>${element.email}</a>
                </div>
                </article>
                `

                html.push(manager);
                break;

            case 'Engineer':
                const engineer = `
                <article class='message'>
                <div class='message-body'>
                <p class='title'>${element.name}</p>
                <span class='tag is-black mb-1'>${element.getRole()}</span>
                <p>Employee ID: ${element.id}</p>
                <p>Github: <a href="https://github.com/${element.github}"> ${element.github}</a></p>
                <a href='mailto:${element.email}'>${element.email}</a>
                </div>
                </article>
                `

                html.push(engineer);
                break;


            case 'Intern':
                const intern = `
                <article class='message'>
                <div class='message-body'>
                <p class='title'>${element.name}</p>
                <span class='tag is-black mb-1'>${element.getRole()}</span>
                <p>Employee ID: ${element.id}</p>
                <p>School: ${element.school}</p>
                <a href='mailto:${element.email}'>${element.email}</a>
                </div>
                </article>
                `

                html.push(intern);

                break;
        }
    });
}

function renderHtml(html) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <section class="hero is-dark">
        <div class="hero-body">
          <p class="title">
            Team Profile Generator
          </p>
          <p class="subtitle">
          </p>
        </div>
      </section>
      <section class="section is-large p-5 mx-5">
        ${html.join("\r\n")}
      </section>
    
</body>
</html>
    `
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the Managers name?'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the Managers Company ID #?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the Managers email address?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the Managers Office #?'
            },
        ])
        .then((answers) => {
            const { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
            const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
            employeeArray.push(manager);
            addMenu();
        });
};

function addMenu() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Choose from the following:',
            name: 'menu',
            choices: ['Add Engineer', 'Add Intern', 'Dream team is finished.']
        }])
        .then((answers) => {
            switch (answers.menu) {
                case 'Add Engineer':
                    addEngineer();
                    break;
                case 'Add Intern':
                    addIntern();
                    break;
                case 'Finished assembling the dream team.':
                    displayEmployeeCards(employeeArray);
                    const returnHtml = renderHtml(html);

                    fs.writeFile('./dist/GeneratedHtml.html', renderHtml, (err) =>
                        err ? console.log(err) : console.log('Page rendered!')
                    );
                    break;
            }
        })
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the Engineers name?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the Engineers Company ID #?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the Engineers email address?'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the Engineers github username?'
            },
        ])
        .then((answers) => {
            const { engineerName, engineerId, engineerEmail, engineerOfficeNumber } = answers;
            const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerOfficeNumber);
            employeeArray.push(engineer);
            addMenu();
        });
};


function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the Interns name?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the Interns Company ID #?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the Interns email address?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What school did the Intern attend?'
            },
        ])
        .then((answers) => {
            const { internName, internId, internEmail, internSchool } = answers;
            const intern = new Intern(internName, internId, internEmail, internSchool);
            employeeArray.push(intern);
            addMenu();
        });
};

module.exports = addManager;
