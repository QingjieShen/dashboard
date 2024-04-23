const author = document.getElementById('author')


async function getRandomImage() {
    // const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature?client_id=S_t6lYdKmSMtrIQaj72iYibQxW3qOSRhp-w_NcMZLXk')
    try {
        const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        const data = await res.json()
        console.log(data)
        console.log(data.urls.full)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        author.textContent = `Photo By: ${data.user.name}`
    }
    catch(err) {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4OTkxMTN8&ixlib=rb-4.0.3&q=85)`
        author.textContent = `Photo By: David Marcu`
    }
}

getRandomImage()

