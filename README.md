# 🌐 antoniobs.net
Source code and infrastructure configuration for antoniobs.net, a personal web project with automated CI/CD using GitHub Actions.


# About

Welcome to the official repository for my personal website **[antoniobs.net](https://antoniobs.net)**. Here you'll find the source code, design, and content.

---

### 🚀 Tech Stack

* **Frontend:** Astro, HTML5, CSS3
* **Backend:** ASP.NET Core 10, PostgreSQL
* **CI/CD:** GitHub Actions
* **Infraestructure:** Debian 13, Linux, Nginx, Microsoft Azure
* **Version Cotrol:** Git, GitHub, Git Flow
* **Observability:** Application Insights, ELK Stack
* **Analytics:** Google Analytics


---

### 🛠️ Local Development

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/tnlnx/antoniobs.net.git
 

## Project Creation

The following command was used to create the Astro project.

> **Note:** This command is for initial project creation only. Do not use it for normal development.

```bash
npm create astro@latest .
````

## GNU/Linux Debian 13 Development Environment

The project can be developed using a GNU/Linux Debian 13 environment, including Debian running under WSL2.

### Verify the environment

```bash
cat /etc/os-release
node --version
npm --version
```

### Install required packages

```bash
sudo apt update
sudo apt install -y curl git
```

### Install NVM

NVM (Node Version Manager) is used to install and manage Node.js versions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
```

Verify NVM:

```bash
nvm --version
```

### Install Node.js LTS

```bash
nvm install --lts
```

Verify the installed versions:

```bash
node --version
npm --version
```

### Install project dependencies

From the project root:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The Astro development server is normally available at:

```text
http://localhost:4321
```

## Windows Development Environment

The project can also be developed directly from Windows using Node.js and npm.

### PowerShell Execution Policy

If required, configure the PowerShell execution policy for the current user:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

> **Note:** This is only required if PowerShell prevents npm scripts from running. It is not an Astro-specific requirement.

### Install project dependencies

From the project root:

```powershell
npm install
```

### Start the development server

```powershell
npm run dev
```

The Astro development server is normally available at:

```text
http://localhost:4321
```

## Development

The project uses Astro for the web application and npm for dependency management.

### Install dependencies

After cloning the repository:

```bash
npm install
```

### Start the development server

```bash
npm run antoniobs.net
```

### Build the project

Create a production build:

```bash
npm run build
```

### Preview the production build

Preview the production build locally:

```bash
npm run preview
```
 

## CI/CD

The project uses GitHub Actions for automated CI/CD.

The CI/CD pipeline is responsible for validating changes and deploying approved changes to the production environment.

> **Note:** Production deployment should be performed through the configured CI/CD pipeline rather than manually from a development environment.
 

## 🚀 Project Structure

Inside of this project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.ico
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── (empty)
│   ├── components
│   │   └── Logo.astro
│   │   └── Logo.css
│   ├── layouts
│   │   └── Layout.astro
│   │   └── Layout.css
│   └── pages
│       └── index.astro
│       └── index.css
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [this guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run antoniobs.net`   | Starts local dev server at `localhost:4321`      |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [this documentation](https://docs.astro.build) or jump into this [Discord server](https://astro.build/chat).
