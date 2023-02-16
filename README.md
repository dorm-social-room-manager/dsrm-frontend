# Dorm social room manager (frontend)

This is a repository for the frontend part of the dorm social room manager. Made using React + MaterialUI and Typescript.

## Requirements

Before you will use this repository make sure that you have installed:

- **_Git_**

  - If you are a **Windows** or **macOS** user visit this link **[Downloading Git](https://git-scm.com/download)** then download appropriate installer
    and install it.
  - If you are a **Linux** (Arch-based distribution) user you can paste bellow scrip into your terminal or visit this page
    **[Installing Git](https://git-scm.com/download/linux)**

    ```bash
    sudo pacman -S git
    ```

- **_Node.js_** and **_npm_**

  - If you are a **Windows** or **macOS** user visit this link **[Node.js download](https://nodejs.org/en/download/)** then download _LTS_ version for
    Windows and install it.
  - If you are a **Linux** (arch-based distribution) user you can paste bellow scrip into your terminal or visit this page
    **[Node installation instruction](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)** or use
    **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

    ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
    # or if you are using paru
    paru -S nvm

    nvm install node
    nvm use node
    ```

    > Node.js version needs to be v17.0.0 minimum

If you followed every step, you should be ready to start using this repository. To make sure that you have installed everything correctly open your
terminal git-bash and run the following commands:

- To check **git**: _`git --version`_ → you should see output with **git** version
- To check **node.js**: _`node --version`_ → you should see output with **node.js** version
- To check **npm**: _`npm --version`_ → you should see output with **npm** version

## Downloading the repository

- Open your terminal / git-bash in location where you create a directory which will contain this repository

- Run the following command in your terminal / git-bash

  ```bash
  git clone https://github.com/dorm-social-room-manager/dsrm-frontend.git
  cd ./dsrm-frontend
  ```

## Available scripts

- To run the application locally, start the server using the following command

  ```bash
    npm run start
  ```

- To build an application without starting the server, use the following command

  ```bash
    npm run build
  ```

- To check all `.scss` files for errors, use the following command

  ```bash
    npm run lint-scss
  ```

- To check all `.scss` files for errors, use the following command

  ```bash
    npm run lint-scss:fix
  ```

- To check all `.ts` and `.tsx` files for errors, use the following command

  ```bash
    npm run lint-ts
  ```

- To check all `.ts` and `.tsx` files for errors, and fix them afterwards, use the following command

  ```bash
    npm run lint-ts:fix
  ```

- To check all .ts and .tsx files for errors, and make it run continuously in watch mode, use the following command

  ```bash
    npm run lint-ts:watch
  ```

- To check the formatting of all files, use the following command

  ```bash
    npm run prettyprint
  ```

- To check the formatting of all files, and run prettyprint on them afterwards, use the following command

  ```bash
    npm run prettyprint:fix
  ```
