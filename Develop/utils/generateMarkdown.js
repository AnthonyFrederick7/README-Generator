const licenseArr = ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause License", "BSD 3-Clause license", "Boost Software License 1.0",
"Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0",
"GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0",
"The Unlicense"]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArr[0]){
    return "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArr[1]){
    return "[![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0))"
  } else if (license===licenseArr[2]){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArr[3]){
    return "[![License: BSD 2-Clause License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license===licenseArr[4]){
    return "[![License: BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (license===licenseArr[5]){
    return "[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license===licenseArr[6]){
    return "[![License: Creative Commons Zero v1.0 Universal](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license===licenseArr[7]){
    return "[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)"
  } else if (license===licenseArr[8]){
    return "[![License: GNU Affero General Public License v3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license===licenseArr[9]){
    return "[![License: GNU General Public License v2.0](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if (license===licenseArr[10]){
    return "[![License: GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"
  } else if (license===licenseArr[11]){
    return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license===licenseArr[12]){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArr[0]){
    return `[${licenseArr[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArr[1]){
    return `[${licenseArr[1]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===licenseArr[2]){
    return `[${licenseArr[2]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArr[3]){
    return `[${licenseArr[3]}](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license===licenseArr[4]){
    return `[${licenseArr[4]}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license===licenseArr[5]){
    return `[${licenseArr[5]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license===licenseArr[6]){
    return `[${licenseArr[6]}](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license===licenseArr[7]){
    return `[${licenseArr[7]}](https://opensource.org/licenses/EPL-2.0)`
  } else if (license===licenseArr[8]){
    return `[${licenseArr[8]}](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license===licenseArr[9]){
    return `[${licenseArr[9]}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  } else if (license===licenseArr[10]){
    return `[${licenseArr[10]}](https://www.gnu.org/licenses/lgpl-2.1)`
  } else if (license===licenseArr[11]){
    return `[${licenseArr[11]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArr[12]){
    return `[${licenseArr[22]}](http://unlicenzse.org/)`
  }  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArr[0]){
    return `Read more about ${licenseArr[0]} here:`
  } else if (license===licenseArr[1]){
    return `Read more about ${licenseArr[1]} here:`
  } else if (license===licenseArr[2]){
    return `Read more about ${licenseArr[2]} here:`
  } else if (license===licenseArr[3]){
    return `Read more about ${licenseArr[3]} here:`
  } else if (license===licenseArr[4]){
    return `Read more about ${licenseArr[4]} here:`
  } else if (license===licenseArr[5]){
    return `Read more about ${licenseArr[5]} here:`
  } else if (license===licenseArr[6]){
    return `Read more about ${licenseArr[6]} here:`
  } else if (license===licenseArr[7]){
    return `Read more about ${licenseArr[7]} here:`
  } else if (license===licenseArr[8]){
    return `Read more about ${licenseArr[8]} here:`
  } else if (license===licenseArr[9]){
    return `Read more about ${licenseArr[9]} here:`
  } else if (license===licenseArr[10]){
    return `Read more about ${licenseArr[10]} here:`
  } else if (license===licenseArr[11]){
    return `Read more about ${licenseArr[11]} here:`
  } else if (license===licenseArr[12]){
    return `Read more about ${licenseArr[12]} here:`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contact](#contact)

  ## License

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Description

  ${data.description}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ### Contact 

  [${data.username}](https://github.com/${data.username}) 

  ${data.email}`;
}

module.exports = generateMarkdown;