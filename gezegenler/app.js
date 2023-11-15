const input = document.getElementById("number")
const select = document.getElementById("gezegen")
const btn = document.getElementById("btn")
const wrapper = document.querySelector(".wrapper")
console.log(btn);
const img = wrapper.querySelector("img")
const p = wrapper.querySelector("p")

// let gezegenler = [
//     {
//         'adi': 'dünya',
//         'yercekimi': 10,
//         'resim': './img/earth.png'
//     },
//     {
//         'adi': 'jupiter',
//         'yercekimi': 25,
//         'resim': './img/jupiter.png'
//     },
//     {
//         'adi': 'mars',
//         'yercekimi': 3.7,
//         'resim': './img/mars.png'
//     },
//     {
//         'adi': 'mercur',
//         'yercekimi': 3.7,
//         'resim': './img/mercury.png'
//     },
//     {
//         'adi': 'ay',
//         'yercekimi': 1.6,
//         'resim': './img/moon.png'
//     },
//     {
//         'adi': 'neptün',
//         'yercekimi': 11.1,
//         'resim': './img/neptune.png'
//     },
//     {
//         'adi': 'pluto',
//         'yercekimi': 0.6,
//         'resim': './img/pluto.png'
//     },
//     {
//         'adi': 'saturn',
//         'yercekimi': 10.4,
//         'resim': './img/saturn.png'
//     },
//     {
//         'adi': 'uranus',
//         'yercekimi': 8.8,
//         'resim': './img/uranus.png'
//     },
//     {
//         'adi': 'venus',
//         'yercekimi': 8.8,
//         'resim': './img/venus.png'
//     },

// ]

let gezegenler = ["dünya", "jüpiter", "mars", "merkür", "ay", "neptün", "pluton", "satürn", "uranüs", "venus"]

for (let i of gezegenler) {
    const option = document.createElement("option")
    option.textContent = i[0].toUpperCase() + i.slice(1, i.length)
    option.value = i
    select.append(option)
}
