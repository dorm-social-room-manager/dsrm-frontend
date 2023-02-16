# Dorm social room manager (frontend)

This is a repository for the frontend part of the dorm social room manager. Made using React + MaterialUI and
Typescript.

## Requirements

Before you will use this repository make sure that you have installed:

- ***Git***

  - If you are a **Windows** or **macOS** user visit this link **[Downloading Git](https://git-scm.com/download)**
    then download appropriate installer and install it.
  - If you are a **Linux** (Arch-based distribution) user you can paste bellow scrip into your terminal or visit this
    page **[Installing Git](https://git-scm.com/download/linux)**

    ```bash
    sudo pacman -S git
    ```

- ***Node.js*** and ***npm***

  - If you are a **Windows** or **macOS** user visit this link **[Node.js download](https://nodejs.org/en/download/)**
    then download _LTS_ version for Windows and install it.
  - If you are a **Linux** (arch-based distribution) user you can paste bellow scrip into your terminal or visit this
    page **[Node installation instruction](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)**
    or use **[nvm](https://github.com/nvm-sh/nvm#install--update-script)**

    ```bash
    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
    # or if you are using paru
    paru -S nvm
    
    nvm install node
    nvm use node
    ```
    > Node.js version needs to be v17.0.0 minimum
If you followed every step, you should be ready to start using this repository. To make sure that you have installed
everything correctly open your terminal git-bash and run the following commands:

- To check **git**: *`git --version`* → you should see output with **git** version
- To check **node.js**: *`node --version`* → you should see output with **node.js** version
- To check **npm**: *`npm --version`* → you should see output with **npm** version

## Downloading the repository

	@@ -68,6 +68,12 @@ everything correctly open your terminal git-bash and run the following commands:
    npm run build
  ```

- To check all `.scss` files for errors, use the following command

  ```bash