const author = document.getElementById('author')


async function getRandomImage() {
    // const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature?client_id=S_t6lYdKmSMtrIQaj72iYibQxW3qOSRhp-w_NcMZLXk')
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    const data = await res.json()
    console.log(data)
    console.log(data.urls.full)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    author.textContent = `Photo By: ${data.user.name}`
}

getRandomImage()

