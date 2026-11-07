# Activity #2: Your First Push to dev

**Deadline:** Wednesday, November 11, 11:59 PM · **Individual** · **20 points**

## Why GitHub

You already know why I asked for your GitHub username: so we can work together like a real software team.
From now on, you push all your work and progress to this **private repository**. I'm the **Project Manager**,
you're the **Developer**. I created the repo; you work in it.

Each of you has your **own assigned system**, explained in **PROJECT.md**. Everyone builds with the same tools:

- **React (Vite)** for the frontend: the pages people see and click
- **PHP API** for the backend: the logic and the rules
- **MySQL through XAMPP** for the database: where your data is saved

Same tools, different system for each of you.

## What you'll do

Copy this repository to your laptop, create **README.md** with your system's requirements, and send it back to
GitHub on the `dev` branch. This is the loop you'll repeat until your system is done:
**clone once, then edit → commit → push to `dev`**.

You need **Git**, **VS Code** and **XAMPP** on your laptop, and my invitation to this repo **accepted**.

## Steps

### 1. Tell Git who you are (first time only)

In VS Code: **Terminal → New Terminal**, then run with your own details:

```
git config --global user.name "Juan Dela Cruz"
git config --global user.email "the-email-of-your-github-account@example.com"
```

Use the **same email as your GitHub account**, so your commits show under your username.

### 2. Clone this repository and switch to dev

Clone it into XAMPP's **htdocs** folder, so you can keep working on it there for your project.
Go to htdocs first, then run (use your own repository name, shown at the top of this page):

```
cd C:\xampp\htdocs
git clone https://github.com/mit-adrian/it304-3a-delacruz-juan.git
cd it304-3a-delacruz-juan
git checkout dev
git pull
```

On a Mac, the first line is `cd /Applications/XAMPP/xamppfiles/htdocs` instead.
When Git asks you to sign in, use **your** GitHub account, the one I invited.

### 3. Open it and read PROJECT.md

```
code .
```

Read **PROJECT.md** fully: the problem, the modules, the rules and how you'll be graded.

### 4. Create README.md

In VS Code, create a new file named exactly **README.md** in the top folder of the repository, next to PROJECT.md
(not inside `api` or `frontend`). On `dev` there is no README.md yet: you're making it.
If you already see a README.md, you're still on the `main` branch: run `git checkout dev` first.
Paste this and fill in every part **in your own words**:

```
## My system: <system MILA from PROJECT.md>

**Developer:** <your HONEY JOY> (<your BSIT-3e>)

### The problem in my own words
2 to 4 sentences: who has the problem, what goes wrong today, and what your system will fix.

### Roles
| Role | What they can do |
| --- | --- |
| <role 1> | ... |
| <role 2> | ... |

### Resources (my database tables)
| Resource | Fields |
| --- | --- |
| <resource 1> | id, ... |
| <resource 2> | id, ... |
| <resource 3> | id, ... |

### Key feature
1 to 2 sentences: what the system computes or blocks, and why it has to be checked in PHP, not only in React.

### Rules (who can do what)
- <rule 1>
- <rule 2>
- <rule 3>
```

Save it (**Ctrl+S**, or **Cmd+S** on a Mac).

### 5. Commit and push to dev

```
git add README.md
git commit -m "Activity 2: system requirements"
git push
```

The last line should end with `dev -> dev`.

### 6. Check it on GitHub

Open this repository on github.com, click the branch menu (it says **main**) and choose **dev**.
You should see your README, and your commit with **your** username. If it's on `dev`, you're done.

## Rules

- **Clone it.** Editing on the GitHub website doesn't count.
- **Push to `dev` only.** `main` is protected; GitHub will refuse it.
- **Use your own GitHub account.** I check whose username is on the commit.
- **Don't delete or rename** PROJECT.md or this file.
- **Your own words.** Copying PROJECT.md word for word, or a classmate's README, gets no credit for that part.

## How it's graded (20 points)

| Criterion | Points |
| --- | --- |
| README.md committed on `dev`, from your own account, by Nov 11, 11:59 PM | 6 |
| Problem in your own words | 3 |
| Roles: at least 2, each with what they can do | 3 |
| Resources: at least 3, each with its fields | 4 |
| Key feature, and why it's checked in PHP | 2 |
| Rules: at least 3 "who can do what" | 2 |

## If something goes wrong

| You see | Do this |
| --- | --- |
| `Repository not found` or `403` when cloning | Accept the invitation first. If you did, Git is signed in to another GitHub account: sign out (Windows: Credential Manager → remove github.com) and clone again. |
| `Cannot find path 'C:\xampp\htdocs'` | XAMPP isn't installed, or it's in another folder. Install XAMPP, or `cd` to the htdocs folder where your XAMPP is. |
| `error: pathspec 'dev' did not match` | Run `git fetch`, then `git checkout dev` again. |
| `Author identity unknown` | Do step 1, then commit again. |
| `nothing to commit` | README.md isn't saved, or it's in the wrong folder. Save it next to PROJECT.md, then `git add` and commit again. |
| A README.md is already there before you create one | You're on `main`. Run `git checkout dev`; it disappears, then create yours. |
| `rejected ... main` or `protected branch` | You're on `main`. Run `git checkout dev`, then push. |
| `rejected ... fetch first` | Run `git pull`, then `git push` again. |
| Your commit shows a name with no profile picture | Your Git email isn't your GitHub email. Fix step 1; your next commit will show correctly. |

Still stuck? Send me a screenshot of the full terminal message, not just the last line.
