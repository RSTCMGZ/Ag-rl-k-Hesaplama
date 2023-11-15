const wrap = document.querySelector(".wrapper")
const input = document.querySelector("input")
wrap.style.display = "grid"
wrap.style.gridTemplateColumns = " repeat(6,1fr)";
wrap.style.gap = "20px";



for (let i of countries) {
    let p = document.createElement("p")
    p.textContent = i
    p.style.border = "1px solid black"
    p.style.padding = "20px"
    p.style.textAlign = "center"
    wrap.append(p)
}