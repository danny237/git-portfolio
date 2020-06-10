const followers = document.getElementById('followers');
const projects = document.getElementById('projects');

var html = '';


//console.log("Hi")
fetch('https://api.github.com/users/danny237')
    .then(response => response.json())
    .then(function(data) {
        //        console.log(data['followers'])
        followers.textContent = data['followers']
        projects.textContent = data['public_repos']
    })



//for repos
html = ''
fetch('https://api.github.com/users/danny237/repos')
    .then(response => response.json())
    .then(function(data) {
        for (let i = 0; i < 5; i++) {
            projectname = data[i].name
            document.getElementById('list').innerHTML += `<div class="box">${i+1}.Project- ${projectname}</div>`


        }
    })

//     document.getElementById('projectName').textContent = data[0].name
// //    document.getElementById('commits').textContent = data[0].
//     document.getElementById('fork').textContent = data[0].forks
// //    document.getElementById('star').textContent = data[0].





// })
document.getElementById('loading').hidden = true;
document.querySelector('.main').hidden = false;