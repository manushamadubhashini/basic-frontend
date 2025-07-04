# Git Tutorial

## Git is a tool that helps you:

 - save and manage different versions of your files and code.
 - work with others, keep track of changes, and undo mistakes.

 ## Where to use Git?

 Git works on your computer, but you also use it with online services like GitHub, GitLab, or Bitbucket to share your work with others. These are called remote repositories.

 ## Key Git Concepts
 
 - Repository: A folder where Git tracks your project     and  its history.

 - Clone: Make a copy of a remote repository on your  computer.

 - Stage: Tell Git which changes you want to save next.

 - Commit: Save a snapshot of your staged changes.

 - Branch: Work on different versions or features at the same time.

 - Merge: Combine changes from different branches.

 - Pull: Get the latest changes from a remote repository.

 - Push: Send your changes to a remote repository.


 ## Basic Git Command
  
## 1.Find Git Version

  In order to check if you already have Git installed on your computer.

    git --version

## 2. Initialize a Git Repository

In your project directory, initialize a new Git repository:

    git init

## 3. Add Files to the Staging Area

Stage all changes by running:

    git add .

Or add individual files:

    git add path/to/your/file

## 4. Commit Your Changes

After staging your files, create a commit with a descriptive message:

     git commit -m "Initial commit"

## 5. Add a Remote Repository

Link your local repository to a remote repository:

     git remote add origin https://github.com/your-username/your-repo.git

find already added remotes
    
      git remote -v


## 6. Push to the Remote Repository

      Push your commits to the remote repository’s main branch:

Adjust the branch name if you're using a different branch.


## 7. Check the Status of Your Repository

To see the current state of your working directory and staging area, use:

       git status

This command shows which files have been modified, staged, or are untracked. It's useful for reviewing changes before committing or pushing to a remote repository.

## 8. Clone the Remote Repository

To copy a remote repository to your local machine, use the git clone command:

    git clone https://github.com/your-username/your-repo.git
