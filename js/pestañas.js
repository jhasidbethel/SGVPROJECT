function showOptionTab() {
    let optionTab = document.getElementById("option-tab");
    if (optionTab.style.display === "block") {
       optionTab.style.display = "none";
    } else {
       optionTab.style.display = "block";
    }
}

function goToFile(file) {
   window.location.href = file;
}

