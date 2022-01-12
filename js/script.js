const api = 'https://api.github.com/users/';
const btn = document.getElementById('btn')
const form = document.querySelector('.search__name')
const output = document.querySelector('.output')

const getUsers = async () => {
    const input = document.getElementById('inp')
    const url = api + input.value
    const request = await fetch(url)
    const response = await request.json()
    console.log(response);
    input.value = ''
    renderUserNames(response)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    getUsers()
});

const renderUserNames = (data) => {
    output.innerHTML = ''
    const avatar = document.createElement('img')
    avatar.classList.add('avatar')
    avatar.addEventListener('click', () => document.location.href = data.html_url)
    avatar.src = data.avatar_url
    const name = document.createElement('h2')
    name.textContent = 'Name: ' + data.name
    const login = document.createElement('h2')
    login.textContent = 'Login: ' + data.login
    const location = document.createElement('h3')
    location.textContent = 'Location: ' + data.location
    const divFollow = document.createElement('div')
    divFollow.classList.add('follow')
    const followers = document.createElement('span')
    followers.textContent = 'followers: ' + data.followers
    const following = document.createElement('span')
    following.textContent = 'following: ' + data.following
    divFollow.append(followers, following)
    const text = document.createElement('p')
    text.textContent = 'Для перехода к профилю, нажмите на аватар.'


    output.append(avatar, name, login, location, divFollow, text)


}

