function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/carloscunha611`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
    })
}

getGitHubProfileInfos()
