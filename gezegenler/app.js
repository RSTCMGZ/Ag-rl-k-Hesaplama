const input = document.getElementById("number")
const select = document.getElementById("gezegen")
const btn = document.getElementById("btn")
const wrapper = document.querySelector(".wrapper")
console.log(btn);
const img = wrapper.querySelector("img")
const p = wrapper.querySelector("p")

let gezegenler = [
    {
        'adi': 'dünya',
        'yercekimi': 10,
        'resim': './img/earth.png'
    },
    {
        'adi': 'jupiter',
        'yercekimi': 25,
        'resim': './img/jupiter.png'
    },
    {
        'adi': 'mars',
        'yercekimi': 3.7,
        'resim': './img/mars.png'
    },
    {
        'adi': 'mercur',
        'yercekimi': 3.7,
        'resim': './img/mercury.png'
    },
    {
        'adi': 'ay',
        'yercekimi': 1.6,
        'resim': './img/moon.png'
    },
    {
        'adi': 'neptün',
        'yercekimi': 11.1,
        'resim': './img/neptune.png'
    },
    {
        'adi': 'pluto',
        'yercekimi': 0.6,
        'resim': './img/pluto.png'
    },
    {
        'adi': 'saturn',
        'yercekimi': 10.4,
        'resim': './img/saturn.png'
    },
    {
        'adi': 'uranus',
        'yercekimi': 8.8,
        'resim': './img/uranus.png'
    },
    {
        'adi': 'venus',
        'yercekimi': 8.8,
        'resim': './img/venus.png'
    },

]

// let gezegenler = ["dünya", "jüpiter", "mars", "merkür", "ay", "neptün", "pluton", "satürn", "uranüs", "venus"]

for (let i of gezegenler) {

    const option = document.createElement("option")
    option.textContent = i.adi[0].toUpperCase() + i.adi.slice(1)
    option.value = i.adi
    select.append(option)
}

btn.addEventListener("click", () => {

    if (!isNaN(input.value) && (select.value != "Bir Gezegen Seçiniz")) {
        let value = Number(input.value)
        let gezegen = select.value
        let kutle = value / 10

        for (let i of gezegenler) {
            if (i.adi == gezegen) {
                img.setAttribute("src", i.resim)
                img.className = "active"
                p.textContent = `${gezegen} gezegenindeki ağırlığın ${(kutle * i.yercekimi).toFixed(1)} KG'DIR`
            }
        }
    } else if (isNaN(input.value)) {
        p.textContent = `Sadece rakam ile hesap yapabiliriz.`
        img.setAttribute("src", "")
        img.classList = ("")
    } else if (select.value == "Bir Gezegen Seçiniz") {
        p.textContent = `Bir gezegen seçmen lazım.`
        img.setAttribute("src", "")
        img.classList = ("")
    }
})