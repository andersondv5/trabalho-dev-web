const input = document.getElementById("meuInput");
const resultado = document.getElementById("resultado");

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        resultado.textContent = input.value;
        input.value = "";
    }
});

// mudar as cor
document.querySelector("#mudarCor").addEventListener("click", () => {
  const cores = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33A1",
    "#A133FF",
    "#33FFF3",
    "#F3FF33",
    "#FF8C33",
    "#8C33FF",
    "#33FF8C",
    "#FF3333",
    "#33FFA1",
    "#A1FF33",
    "#5733FF",
    "#FF5733",
    "#FF4500",
    "#00FF7F",
    "#1E90FF",
    "#FFD700",
    "#8A2BE2",
    "#DC143C",
    "#7FFF00",
    "#FF1493",
    "#00CED1",
    "#FF6347",
    "#9400D3",
    "#FF8C00",
    "#00FA9A",
    "#4682B4",
    "#D2691E",
  ];
  document.body.style.backgroundColor =
    cores[Math.floor(Math.random() * cores.length)];
});

// apaga tudo
document.querySelector("#exluiTudo").addEventListener("click", () => {
  document.body.innerHTML = "";
});
