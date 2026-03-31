function menu() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu__container').innerHTML = data;
        });

    console.log("<body> is fully loaded and parsed!");
}