# Fetch Post Lab: Github API
You will be creating a front-end web app that allows the user to interface with Github. If a user gives your app their Github personal access token, they'll be able to see, create, and delete their repositories. Here is a demo of the app:

![demo](./assets/app.gif)

## Create your personal access token

In order to test out this app while building it, you will need to create a peronal access token on Github. This will act like an API key. **DO NOT PUSH THIS TOKEN** up to Github. Otherwise, someone will be able to create and delete the repositories on your account. [Follow these instructions](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). You may already have personal access tokens. Do not delete those as they are likely being used by the terminal on your computer. 

For scopes/permissions, you should grant this token `repo`, `user`, and `delete_repo` access. See the screenshots below:

![token1](./assets/token1.png)
![token2](./assets/token2.png)

If you make a mistake, you can always delete the token you created and create a new one. Once you have successfully created your token, copy and paste it somewhere aside. You will need it later.

You can read about [Github Authorization](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api#repositories) here. Your personal access token will be used in an `Authorization` header with a value of `token <ACCESS_TOKEN>`. Here is an example `cURL` command:

```shell
$ curl -i -H "Authorization: token 5199831f4dd3b79e7c5b7e0ebe75d67aa66e79d4" \
    https://api.github.com/user/repos
```

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
3. The access token and username should be displayed on the DOM.

Read the documentation on [Get the authenticated user](https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
) to get the username of a user. You will need to make a `GET` fetch with a header of `{"Authorization": "token <ACCESS TOKEN>"}`. 

## Feature 2: Getting Repositories Data

![repos](./assets/get.gif)

Once the `#options` div is displayed. Clicking on the `Get My Repos` button should get all the public repos for the authenticated Github user and diplay them as an unordered list **in order of newest to oldest**. Read the documentation on [List repositories for a user](https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user). You do not need `headers` for this request. 

## Feature 3: Creating a New Repo

![create](./assets/post.gif)

The user should be able to create a new repo by filling out the Repo's name and description. When they submit the form, this new repo should exist on Github and the repo's name should appear at the top of your web app's unordered list **without having to refresh the page**. Read the documentation on [Create a repository for the authenticated user](https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user
). You will need to make a `POST` fetch with a header of `{"Authorization": "token <ACCESS TOKEN>"}`. 

## Feature 4: Deleting a Repo

![delete](./assets/delete.gif)

The user should be able to delete one of their repos by filling out the last form. If the API is unable to delete the repo, the user should see an [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) error message.  If the API successfully deletes the repo, the use should still see an [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) message that tells them the repo has been deleted. If the user goes to Github, the delete repo should no longer exists. Finally, the `li` for the deleted repo should be removed from the DOM **without having to refresh the page**. Read the documentation on [Delete a repository](https://docs.github.com/en/rest/reference/repos#delete-a-repository). You will need to make a `DELETE` fetch with a header of `{"Authorization": "token <ACCESS TOKEN>"}`. 

## Clean Up

As a safety precaution, you should going into you developer settings and delete the Personal Access Token you created for this lab. Commit and push your your finished code. 


