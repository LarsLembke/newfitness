window.addEventListener("load", sidenVises);

const dropDown1 = document.querySelector("#dropdown1")
const dropDown2 = document.querySelector("#dropdown2")
const dropDown3 = document.querySelector("#dropdown3")
const dropDown4 = document.querySelector("#dropdown4")
const dropDown5 = document.querySelector("#dropdown5")
const dropDown6 = document.querySelector("#dropdown6")
const dropDown7 = document.querySelector("#dropdown7")
const tiderMandag = document.querySelector("#tider_mandag")
const tiderTirdag = document.querySelector("#tider_tirdag")
const tiderOnsdag = document.querySelector("#tider_onsdag")
const tiderTorsdag = document.querySelector("#tider_torsdag")
const tiderFredag = document.querySelector("#tider_fredag")
const tiderLordag = document.querySelector("#tider_lordag")
const tiderSondag = document.querySelector("#tider_sondag")


function sidenVises() {
    console.log("sidenVises");

    tiderMandag.classList.add("hidden");
    tiderTirdag.classList.add("hidden", "entid");
    tiderOnsdag.classList.add("hidden");
    tiderTorsdag.classList.add("hidden");
    tiderFredag.classList.add("hidden");
    tiderLordag.classList.add("hidden");
    tiderSondag.classList.add("hidden");

    dropDown1.addEventListener("click", dropDownMenu);


}

function dropDownMenu() {
    this.removeEventListener("click", dropDownMenu);

    tiderMandag.classList.add("show");
    tiderMandag.classList.remove("hidden");
}
