
// Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  const licenseType = `${data.license}`;
  let licenseString = " ";
  if (licenseType === "MIT") {
    licenseString = `![GitHub license](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "APACHE 2.0") {
    licenseString = `![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GPl-v3") {
    licenseString = `![GitHub license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  return licenseString;
};

// function to Generate Readme Markdown
function generateMarkdown(data) {
  return `
  Professional README.md Generator
  ## ${data.Title}
   https://github.com/${data.username}/${data.Title}
  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#usage)  
  3. [Contributors](#Contributors)
  4. [Tests](#Tests)
  5. [License](#License)
  6. [Preview](#Preview)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)
  ## Description
  This professional README.md generator uses node.js and npm package on Command Line Interface (CLI) for projects hosted on Github. 
  It also uses inquirer to prompt project questions in this application and generates a markdown file with dynamic data generated 
  from the user's interaction through terminal actions.
  ${data.description} 
  ## Installation
  The following dependencies needed to be installed to run the application are ${data.installation}
  ## Usage
  After installing in your project directory, simply run ${data.usage} in the terminal.
  Answering all the prompts , "README.md" will be created with all of your responses.
  Click on the video for a quick walkthrough of the repo.
  
  ## Contributors
  Contributors: ${data.contributors}
  ## Tests
  The following needed to run the test:${data.Tests}
  ## License
  The Project is licensed under: ${data.license}  
  LICENCE:${renderLicenseBadge(data)}
  ## Preview
  ## GitHub
  ${data.username}
  ## E-mail
  ${data.Email}
  ## Questions:
  If you have any questions about the repo, open an issue or contact at ${data.username}/${data.Email}

 `;
}

module.exports = generateMarkdown;
