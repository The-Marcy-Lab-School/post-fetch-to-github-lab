document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#token-form").addEventListener("submit", handleForm)
    document.querySelector("#get-repos").addEventListener("click", handleGet)
    document.querySelector("#post-form").addEventListener("submit", handlePost)
    document.querySelector("#delete-form").addEventListener("submit", handleDelete)
})

function getToken(){
    return document.querySelector("#token").innerText
}

function getUserName(){
    return document.querySelector("#username").innerText
}

function handleDelete(e){
    e.preventDefault();
    let name = e.target[0].value
    e.target.reset()
    deleteRepo(name)
}

function deleteRepo(name){
    let token = document.quer
    fetch(`https://api.github.com/repos/${getUserName()}/${name}`, {
        method: "DELETE",
        headers: {"Authorization" : `token ${getToken()}`},
    }).then(res => {
        if(res.status === 204){
            alert("Sucessfully deleted")
            removeFromDOM(name)
        } else if(res.status === 404){
            alert("ERROR, could not find repo")
        }
    })

}

function removeFromDOM(id){
    document.querySelector(`#${id}`).remove()
}

function handlePost(e){
    e.preventDefault()
    let name = e.target[0].value;
    let desc = e.target[1].value;
    e.target.reset()
    postRepo(name, desc)
}

function postRepo(name, desc){
    fetch(`https://api.github.com/user/repos`, {
        method: "POST", 
        headers: {"Authorization" : `token ${getToken()}`},
        body: JSON.stringify({
            name: name,
            description: desc
        })
    }).then(res => res.json()) 
    .then(data => {
        let li = document.createElement("li")
        li.innerText = data.name
        li.id = data.name
        document.querySelector("ul").prepend(li)
    })
}

function handleForm(e){
    e.preventDefault()
    token = e.target[0].value
    fetchUser(token)
}

function fetchUser(token){
    fetch(`https://api.github.com/user`, {
        headers: {"Authorization" : `token ${token}`}
    }).then(res => res.json())
    .then(data => {
        removeFromDOM("token-form")
        document.querySelector("#token-container").innerHTML = `
            <p>Access token: <span id="token">${token}</span></p>
            <p><b>Welcome, <span id="username">${data.login}</span></b></p>
        `
        document.querySelector("#options").style.display = "block"
    })
}

function handleGet(){
    fetch(`https://api.github.com/users/${getUserName()}/repos?sort=created`)
    .then(res => res.json())
    .then(data => {
        data.forEach(repo => {
            let li = document.createElement("li")
            li.innerText = repo.name
            li.id = repo.name
            document.querySelector("ul").append(li)
        })
    })
}