const wrap = document.querySelector(".wrapper")
const input = document.querySelector("input")
wrap.style.display = "grid"
wrap.style.gridTemplateColums = "repeat(6,1fr)"
wrap.style.gap = "20px"


function ekranaYazdır(x) {

    for (let i of x) {
        let p = document.createAttribute("p")
        p.style.border = "1px solid black"
        p.style.padding = "20px"
        p.style.textAlign = "center"
        p.textContent = i
        wrap.append(p)
    }
}

ekranaYazdır(countries)
input.addEventListener("keyup", () => {
    wrap.innerHTML = " "
    let dizi = []
    for (let i of countries) {
        if (i.toLowerCase().includes(input.value.toLowerCase)) {
            dizi.push(i)
        }
    }
    ekranaYazdır()
})