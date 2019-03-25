var x = document.getElementById("comida"); //cojo el todo el div
j = 0;
function myFunction2() {

    if (j == 0) {
        x.querySelector(".lbl").innerHTML = "Lasagna";
        document.getElementById("img-food").src = "pasta.jpg";
        j = j + 1;
    } else
        if (j == 1) {
            x.querySelector(".lbl").innerHTML = "Hamburger";
            document.getElementById("img-food").src = "hamburger.jpg";
            j = j + 1;
        } else
            if (j == 2) {
                x.querySelector(".lbl").innerHTML = "Pizza";
                document.getElementById("img-food").src = "pizza.jpg";
                j = 0;
            }

}
