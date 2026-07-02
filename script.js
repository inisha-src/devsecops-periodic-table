const search = document.getElementById("search");
const tools = document.querySelectorAll(".tool");

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    tools.forEach(tool => {
        const text = tool.innerText.toLowerCase();

        if(text.includes(value)){
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }
    });
});
