const followers = document.getElementById('followers');
const following = document.getElementById('following');
const public_repos = document.getElementById('public_repos');

var html = '';

// For user informations
fetch('https://api.github.com/users/danny237')
    .then(response => response.json())
    .then(function(data) {
        followers.textContent = data['followers']
        following.textContent = data['following']
        public_repos.textContent = data['public_repos']
    })

//For list of repos
html = ''
fetch('https://api.github.com/users/danny237/repos')
    .then(response => response.json())
    .then(function(data) {
        for (let i = 0; i < 5; i++) {
            projectname = data[i].name
            link = data[i].html_url
            document.getElementById('list').innerHTML += `<div class="box">${i+1}.Project- ${projectname}<br>
            <a href="${link}" target=_blank>Click here</a>
            </div>`
        }
        document.getElementById('loading').hidden = true;
        document.querySelector('.main').hidden = false;
    });