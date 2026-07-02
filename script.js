const searchInput = document.getElementById("search");
const tools = document.querySelectorAll(".tool");

searchInput.addEventListener("keyup", function () {

    const searchValue = searchInput.value.toLowerCase();

    tools.forEach(function (tool) {

        const toolText = tool.innerText.toLowerCase();

        if (toolText.includes(searchValue)) {
            tool.style.display = "flex";
        } else {
            tool.style.display = "none";
        }

    });

});
