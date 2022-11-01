
module.exports = generateMarkdown;
function renderLicenseBadge(license) {  
  
let yourLicense = ''
if(license === 'MIT') {
  yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
} else if (license === 'GPLv3') {
  yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
} else if (license === 'GPL') {
  yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
} 
return yourLicense;
};

function renderLicenseLink(license) {
  let licenseLink = ''
if(license === 'MIT') {
  licenseLink = `![License: MIT](https://www.mit.edu/~amini/LICENSE.md)`
} else if (license === 'GPLv3') {
  licenseLink = `![GPLv3 license](https://www.gnu.org/licenses/gpl-3.0.en.html)`
} else if (license === 'GPL') {
  licenseLink = `![GPL license](https://www.gnu.org/licenses/licenses.en.html)`
} else if (license === "n/a") {
  return ""
}
return licenseLink;
}

function renderLicenseSection(license) {
  if (license === "n/a") {
    return ""
  }
  return `## License \n ${license} License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} \n
  ## Table of contents \n
  - [Description](#description) \n
  - [License](#license) \n
  - [Installation](#installation) \n
  - [Credits](#credits) \n
  - [Usage](#usage) \n
  - [Contributors](#contributors) \n
  - [Tests](#tests) \n
  - [Questions](#questions) \n
  ## Description \n ${data.Description} \n
  ${renderLicenseSection(data.licenses)} \n
  ${renderLicenseLink(data.licenses)} \n
  ${renderLicenseBadge(data.licenses)} \n
  ## Installation \n ${data.Installation} \n
  ## Credits \n ${data.Credits} \n
  ## Usage \n ${data.Usage} \n
  ## Contributors \n ${data.Contributors} \n
  ## Tests \n ${data.Tests} \n
  ## Questions \n Email:${data.email} \n [${data.username}](https://www.github.com/${data.username}) \n
`;
}

