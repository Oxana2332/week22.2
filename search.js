"use strict";
(function () {
    let gifs = [];
    let container = document.querySelector('.container');

    function onBtnclick() {
        let q = document.getElementById("input").value;
        fetch("https://api.giphy.com/v1/gifs/search?api_key=lAvIDsMHwKqLJQCQbeALtiGzT0gU06RW&q=" + q + "&limit=5&offset=0&rating=g&lang=en")
            .then(response => response.json())
            .then(data => {
                getGifs(data);
            })
            .catch(error => alert("Сервер не доступен. Подробнее: " + error.name + error.message));
    }

    function getGifs(data) {
        container.innerHTML = "";
        gifs = data.data
        gifs.forEach(element => {
            container.innerHTML += `<img style="width:250px" src=${element.images.original.url}>`
        });
    }
    document.querySelector('#search').addEventListener('click', onBtnclick);
})();