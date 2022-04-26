function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Crowded")) {
        image.src = "./img/EmptyFuneral.jpg";
        document.getElementById("h2").innerHTML = "Without our Help"
        document.getElementById("Funeral").style.backgroundColor = `rgb(${250}, ${245}, ${236})`;
    }
    else {
        image.src = "./img/Crowded.jpg";
        document.getElementById("h2").innerHTML = "With our Help"
        document.getElementById("Funeral").style.backgroundColor = `rgb(${247}, ${221}, ${177})`;
    }
}
