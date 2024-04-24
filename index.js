const author = document.getElementById('author')
const crytopsEl = document.getElementById('crytops')
const timeEl = document.getElementById('time')

let cryptoElement = []

async function getRandomImage() {
    // const res = await fetch('https://api.unsplash.com/photos/random?orientation=landscape&query=nature?client_id=S_t6lYdKmSMtrIQaj72iYibQxW3qOSRhp-w_NcMZLXk')
    try {
        const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
        if (!res.ok) {
            throw Error(`Something went wrong. Error code: ${res.status}`)
        } else {
            const data = await res.json()
            console.log(data)
            console.log(data.urls.full)
            document.body.style.backgroundImage = `url(${data.urls.full})`
            author.textContent = `Photo By: ${data.user.name}`
        }
    }
    catch(err) {
        console.error(err)
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4OTkxMTN8&ixlib=rb-4.0.3&q=85)`
        author.textContent = `Photo By: David Marcu`
    }
}

async function getCrypto(id) {
    try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            cryptoElement = []
            setCryptoElement(data)
            crytopsEl.innerHTML = cryptoElement.join()
        } else {
            throw Error(`Something went wrong. Error code: ${res.status}`)
        }
    } catch(err) {
        console.error(err)
    }
}

function setCryptoElement(cryptoData) {
    cryptoElement.push (
        `<div class="cryptoUnit">
            <img src=${cryptoData.image.small} />
            <p>${cryptoData.name}</p>
        </div>
        <div class="price-info">
            <p>Update Time: ${cryptoData.last_updated}</p>
            <p>Current price: $${cryptoData.market_data.current_price.usd}</p>
            <p>24-hour high price: $${cryptoData.market_data.high_24h.usd}</p>
            <p>24-hour low price: $${cryptoData.market_data.low_24h.usd}</p>
        </div>`
    )
}

function displayCurrentTime() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    timeEl.textContent = hours > 12 ? `${hours - 12}:${minutes} PM` : `${hours}:${minutes} AM`
    /* 
    const date = new Date()
    console.log(date.toLocaleTimeString('en-us', {timeStyle: "short"}))
     */
}

getRandomImage()
getCrypto("dogecoin")

setInterval(displayCurrentTime, 1000)
