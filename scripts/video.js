var sf = document.getElementById("games"); //cojo el todo el div
i = 0;
function myFunction() {

    if (i == 0) {
        sf.querySelector(".games-h3").innerHTML = "Soldier Front";
        document.getElementById("video1").src = "https://www.youtube.com/embed/OcKMV8kV3FY";
        sf.querySelector(".games-p").innerHTML = "When I was in school I remember playing this game alot with my friends, as soon as I got home this was the first thing to do in my computer. ";
        i = i + 1;
    } else
        if (i == 1) {
            sf.querySelector(".games-h3").innerHTML = "Dofus";
            document.getElementById("video1").src = "https://www.youtube.com/embed/GHgq1osKHW0";
            sf.querySelector(".games-p").innerHTML = "This game took like 4 years of my life, the first game that I actually put money into, it brings back good memories. But i don't think ill be playing this game ever again. ";
            i = i + 1;
        } else
            if (i == 2) {
                sf.querySelector(".games-h3").innerHTML = "league of legends";
                document.getElementById("video1").src = "https://www.youtube.com/embed/3Eu7NzzHC84";
                sf.querySelector(".games-p").innerHTML = "This is one of the games I have played in my life. I love this game and it's has alot of good memories.";
                i = 0;
            }

}
