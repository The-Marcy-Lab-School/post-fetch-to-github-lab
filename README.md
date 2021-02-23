# Fetch Post Lab: Github API
You will be creating a front-end web app that allows the user to interface with Github. If a user gives your app their Github personal access token, they'll be able to see, create, and delete their repositories. Here is a demo of the app:

![demo](./assets/app.gif)

## Create your personal access token

In order to test out this app while building it, you will need to create a peronal access token on Github. This will act like an API key. **DO NOT PUSH THIS TOKEN** up to Github. Otherwise, someone will be able to create and delete the repositories on your account. [Follow these instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). You may already have personal access tokens. Do not delete those as they are likely being used by the terminal on your computer. 

For scopes/permissions, you should grant this token `repo`, `user`, and `delete_repo` access. See the screenshots below:

![token1](./assets/token1.png)
![token2](./assets/token2.png)

If you make a mistake, you can always delete the token you created and create a new one. Once you have successfully created your token, copy and paste it somewhere aside. You will need it later.

## Starter code

You will need to create all the project files for this lab, but you can copy this code as a starting point. You can (and should) add `id`s where you see fit to make selecting elements easier.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .third {
            display: inline-block;  
            width: 30%;
            margin: 5px;
            vertical-align: top;
        }
    </style>
    <title>Github App</title>
</head>
<body>
    <h1>Github App</h1>
    <div id="container">
        <form>
            <input type="text" />
            <input type="submit" placeholder="Access Token" value="Submit"/>
        </form>
    </div>
    <div id="options" style="display: none">
        <div id="show-repos" class="third">
            <button>Get My Repos</button>
            <ul>
            </ul>
        </div>
        <div id="make-repo" class="third">
            <form>
                <input type="text" placeholder="Repo name"/>
                <br>
                <input type="text" placeholder="Repo description"/>
                <br>
                <input type="Submit" value="Create a Repo"/>
            </form>
        </div>
        <div id="delete-rep" class="third">
            <form>
                <input type="text" placeholder="Name of repo to delete"/>
                <br>
                <input type="Submit" value="Delete Repo"/>
            </form>
        </div>
    </div>
</body>
</html>
```

## Feature 1: Getting User Data

![user](./assets/user.gif)

Initially, the `#options` div is not displayed when the page loads. Your user should be able to enter their Github access token. When they submit the form, three things should happen:

1. The form dissapears.
2. The `#options` div should be displayed on the DOM.
3. The access token and username should be displayed.

Read the documentation on [Get the authenticated user](https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
). You will need to make a `GET` fetch with a header of `{"Authorization": "Bearer <ACCESS TOKEN>"}`



https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user
https://docs.github.com/en/rest/reference/repos#delete-a-repository