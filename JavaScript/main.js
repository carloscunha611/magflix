function getGitHubProfileInfos() {
  const url = 'https://api.github.com/users/carloscunha611'

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
