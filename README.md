# Zestiox Angular Project Setup Guide

## Prerequisites
- Create a GitHub account if you do not have one.
- Install **Node.js v18.10.0** from [nodejs.org](https://nodejs.org/download/release/v18.10.0/)
  - Check current Node.js version using `node -v` command
  - If the version is not 18.10.0, uninstall the current Node.js version.
  - Search in google for "Node.js v18.10.0 download" and get it installed.
  - Open a new terminal and run again the command `node -v` to check the right version installed.
- Install **Git** from [git-scm.com](https://git-scm.com/downloads)
- Install **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com/)

## Fork the Repository
- This GitHub Repository (https://github.com/jjchandru/zestiox-ng) will be the base repository and it will be used for all the trainings to be held in the future, hence code must not be directly pushed into this repository.
- Identify the team member, who will hold this repository.
- The identified team member must fork the project, which will create a copy of this repository in their GitHub account.
- Steps to fork the project (Must be done by the identified team member)
  - Open https://github.com/jjchandru/zestiox-ng.git in the browser.
  - Click Fork and follow the steps, which will create new repository named zestiox-ng in your GitHub account.
- Once forked, copy the GitHub project URL from the browser address bar. It must look like the one below:
  - `http://github.com/<your-github-account-id>/zestiox-ng`
- Share the GitHub project repository URL to other team members.

## Add team members
- In the GitHub project in the browser go to Settings.
- Click Collaborators
- Click Add People
- Provide Email id of GitHub account of the team member and complete the process.
- The above step will send an email to the respective team member.
- The team member must open the email and follow the instructions in the mail to become the member of the project.

## Clone the Repository
 - The team member who forked the project must share the GitHub repository URL in the chat.
 - Other team members must bookmark the project URL in the browser.
 - Create a folder named `zestiox` in a convenient location in your desktop.
 - Open the `zestiox` folder in the command prompt.
 - Run the below command to create a copy of forked project in your desktop. This will be the Git local repository.
```sh
git clone http://github.com/<forked-github-account-id>/zestiox-ng
```
 - The above step will create a folder named `zestiox-ng` in `zestiox` folder and this folder will contain the angular project.

## Open the project in Visual Studio Code
 - Open Visual Studio Code.
 - In menu select, `File > Open Folder ...`
 - Select the `zestiox-ng` folder.

## Install Angular
- Run below command in terminal to install Angular.
```sh
npm install -g @angular/cli@16.2.16
```

## Install Dependencies
- Open terminal in Visual Studio Code (Menu > View > Terminal) and run below command.
```sh
npm install
```

## Switch to a Feature Branch
 - Run below command to view the existing branches.
```sh
git branch -a
```
 - Run below command in terminal to switch to your feature branch.
```sh
git checkout <feature-branch-name>
```
 - Replace `<feature-branch-name>` with the branch you want to work on.
 - The branch can be either one of `login`, `register`, `menu`, `cart`, `orders` and `profile`.


## Run the Angular App
 - Command to run the angular app.
```sh
ng serve
```
 - Above command will launch the angular app.
 - Open http://localhost:4200 in the browser to view the launch app.
 - Use `Ctrl+C` (`Command+C` in Mac) in the terminal to stop the app.


## Check GitHub Copilot in Visual Studio Code
  - Login into your GitHub account in the browser.
  - Go to Visual Studio Code.
  - Click on the GitHub Copilot icon available in the top, this will open the GitHub Copilot chat window in the right side.
  - Enable GitHub Copilot in Visual Studio Code by linking it with your GitHub account.
  - Once a chat prompt is visible, it means that GitHub Copilot is enabled.
