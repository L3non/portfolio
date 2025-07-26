let pendingLang = localStorage.getItem("selectedLang") || "br"; // default
let appliedLang = null;

// Visually mark the selected language
function highlightSelectedButton() {
    $(".lang_btn").removeClass("selected");
    $(`.lang_btn.${pendingLang}`).addClass("selected");
}

// Apply translation
function applyLanguage(lang) {
    appliedLang = lang;

    const translations = {
        br: {
            title: "Uma página simples",
            langText: "Português",
            class: "change_br"
        },
        en: {
            title: "A simple page",
            langText: "English",
            class: "change_en"
        },
        es: {
            title: "Una página sencilla",
            langText: "Español",
            class: "change_es"
        }
    };

    const data = translations[lang];

    $("#home h1").text(data.title);
    $(".language_selected")
        .text(data.langText)
        .removeClass("change_br change_en change_es")
        .addClass(data.class);
}

// Click on language button (only check mark)
$(".lang_btn").click(function () {
    pendingLang = $(this).data("lang");
    highlightSelectedButton(); // apply visual class
});

// Save button: apply language and save
$("#save_button").click(function () {
    localStorage.setItem("selectedLang", pendingLang);
    applyLanguage(pendingLang);
    document.getElementById("language_modal").classList.remove("show"); // Closes with transition
});


// Closes the modal on X
$("#close_modal").click(function () {
    $("#language_modal").removeClass("show");
});

// On load, apply saved language (if any)
$(document).ready(function () {
    highlightSelectedButton();
    applyLanguage(pendingLang);
});
