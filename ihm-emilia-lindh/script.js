const temaknapp = document.querySelector("#tema");
temaknapp.hidden = false;

function bytTema() {
    document.body.classList.toggle("morkt");
    if (document.body.classList.contains("morkt")) {
        temaknapp.textContent = "Byt till ljust läge";
    } else {
        temaknapp.textContent = "Byt till mörkt läge";
    }
}

temaknapp.addEventListener("click", bytTema);

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
});

document.querySelectorAll(".kompetens-toggle").forEach((knapp) => {
    knapp.addEventListener("click", () => {
        const rad = knapp.closest("li");
        const oppen = rad.classList.toggle("is-open");
        knapp.setAttribute("aria-expanded", String(oppen));
        knapp.querySelector("span").textContent = oppen ? "−" : "+";
    });
});
