const table = document.querySelector(".table");
const search = document.getElementById("search");

let toolsData = [];

// Load JSON
fetch("tools.json")
    .then(res => res.json())
    .then(data => {
        toolsData = data;
        renderTools(data);
    });

// Render tools
function renderTools(data){
    table.innerHTML = "";

    data.forEach(tool => {
        const div = document.createElement("div");
        div.classList.add("tool", tool.category);

        div.innerHTML = `
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
        `;

        // CLICK → OPEN MODAL
        div.addEventListener("click", () => {
            document.getElementById("modal").style.display = "flex";
            document.getElementById("modal-title").innerText = tool.name;
            document.getElementById("modal-desc").innerText = tool.desc;

            document.getElementById("visit-btn").onclick = () => {
                window.open(tool.url, "_blank");
            };
        });

        table.appendChild(div);
    });
}

// SEARCH
search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    const filtered = toolsData.filter(tool =>
        tool.name.toLowerCase().includes(value) ||
        tool.desc.toLowerCase().includes(value)
    );

    renderTools(filtered);
});
