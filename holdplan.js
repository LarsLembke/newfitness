window.addEventListener("load", sidenVises);

const dropDown1 = document.querySelector("#dropdown1")
const dropDown2 = document.querySelector("#dropdown2")
const dropDown3 = document.querySelector("#dropdown3")
const dropDown4 = document.querySelector("#dropdown4")
const dropDown5 = document.querySelector("#dropdown5")
const dropDown6 = document.querySelector("#dropdown6")
const dropDown7 = document.querySelector("#dropdown7")
const tiderMandag = document.querySelector("#tider_mandag")
const tiderTirsdag = document.querySelector("#tider_tirsdag")
const tiderOnsdag = document.querySelector("#tider_onsdag")
const tiderTorsdag = document.querySelector("#tider_torsdag")
const tiderFredag = document.querySelector("#tider_fredag")
const tiderLordag = document.querySelector("#tider_lordag")
const tiderSondag = document.querySelector("#tider_sondag")




function sidenVises() {
    console.log("sidenVises");

    tiderMandag.classList.add("hidden");
    tiderTirsdag.classList.add("hidden");
    tiderOnsdag.classList.add("hidden");
    tiderTorsdag.classList.add("hidden");
    tiderFredag.classList.add("hidden");
    tiderLordag.classList.add("hidden");
    tiderSondag.classList.add("hidden");

    dropDown1.addEventListener("click", dropDownMenu1);
    dropDown2.addEventListener("click", dropDownMenu2);
    dropDown3.addEventListener("click", dropDownMenu3);
    dropDown4.addEventListener("click", dropDownMenu4);
    dropDown5.addEventListener("click", dropDownMenu5);
    dropDown6.addEventListener("click", dropDownMenu6);
    dropDown7.addEventListener("click", dropDownMenu7);


}

function dropDownMenu1() {
    console.log("dropDownMenu1");

    let hidden = tiderMandag.classList.contains("hidden");

    if (hidden == true) {
        tiderMandag.classList.remove("hidden");
        tiderMandag.classList.add("shown");
    } else {
        tiderMandag.classList.add("hidden");
        tiderMandag.classList.remove("shown");
    }
}

function dropDownMenu2() {
    console.log("dropDownMenu2");

    let hidden = tiderTirsdag.classList.contains("hidden");

    if (hidden == true) {
        tiderTirsdag.classList.remove("hidden");
        tiderTirsdag.classList.add("shown");
    } else {
        tiderTirsdag.classList.add("hidden");
        tiderTirsdag.classList.remove("shown");
    }
}

function dropDownMenu3() {
    console.log("dropDownMenu3");

    let hidden = tiderOnsdag.classList.contains("hidden");

    if (hidden == true) {
        tiderOnsdag.classList.remove("hidden");
        tiderOnsdag.classList.add("shown");
    } else {
        tiderOnsdag.classList.add("hidden");
        tiderOnsdag.classList.remove("shown");
    }
}

function dropDownMenu4() {
    console.log("dropDownMenu4");

    let hidden = tiderTorsdag.classList.contains("hidden");

    if (hidden == true) {
        tiderTorsdag.classList.remove("hidden");
        tiderTorsdag.classList.add("shown");
    } else {
        tiderTorsdag.classList.add("hidden");
        tiderTorsdag.classList.remove("shown");
    }
}

function dropDownMenu5() {
    console.log("dropDownMenu5");

    let hidden = tiderFredag.classList.contains("hidden");

    if (hidden == true) {
        tiderFredag.classList.remove("hidden");
        tiderFredag.classList.add("shown");
    } else {
        tiderFredag.classList.add("hidden");
        tiderFredag.classList.remove("shown");
    }
}

function dropDownMenu6() {
    console.log("dropDownMenu6");

    let hidden = tiderLordag.classList.contains("hidden");

    if (hidden == true) {
        tiderLordag.classList.remove("hidden");
        tiderLordag.classList.add("shown");
    } else {
        tiderLordag.classList.add("hidden");
        tiderLordag.classList.remove("shown");
    }
}

function dropDownMenu7() {
    console.log("dropDownMenu7");

    let hidden = tiderSondag.classList.contains("hidden");

    if (hidden == true) {
        tiderSondag.classList.remove("hidden");
        tiderSondag.classList.add("shown");
    } else {
        tiderSondag.classList.add("hidden");
        tiderSondag.classList.remove("shown");
    }
}
