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


## CI/CD

The project uses GitHub Actions to automate the build, validation, and production deployment of antoniobs.net.

The CI/CD pipeline is structured around the following flow:

```text
Pull Request
    │
    ▼
Continuous Integration
    │
    ├── Checkout source
    ├── Install dependencies
    └── Build application
    │
    ▼
Merge to main
    │
    ▼
Release
    │
    ▼
Build release artifact
    │
    ▼
Production Environment
    │
    ▼
Self-hosted Azure Runner
    │
    ▼
Deploy to production
```

### Continuous Integration

Every change submitted through a pull request is validated through GitHub Actions. The application is installed and built in a clean GitHub-hosted environment to ensure that the source code can be successfully compiled before it reaches production.

### Continuous Deployment

Production deployments are triggered by published GitHub Releases. The release is built independently and stored as a versioned GitHub Actions artifact.

The production deployment then:

1. Downloads the artifact associated with the release.
2. Executes on a dedicated self-hosted runner hosted on Azure.
3. Deploys the generated static files to the configured production path.
4. Uses the `production` GitHub Environment for deployment-specific configuration and protection rules.

This separates the **build environment** from the **production environment** and ensures that production receives the exact artifact generated for the released version.

### Infrastructure

The production deployment uses a dedicated Linux service account for the GitHub Actions runner. The runner does not have `sudo` privileges and only has the filesystem permissions required to update the website.

Deployment paths and other non-sensitive configuration values are managed through GitHub Actions Environment Variables rather than being hard-coded in the workflow.

### Release Strategy

Releases are versioned using Git tags, for example:

```text
v1.0.6
```

The corresponding build artifact is versioned using the release tag:

```text
antoniobs.net-v1.0.6
```

This provides traceability between the source code, GitHub Release, build artifact, and production deployment. :-)
