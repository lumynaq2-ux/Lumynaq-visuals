"use strict";

/*
    Nobel Academy - Website JavaScript

    IMPORTANT:
    WhatsApp is opened using HTTPS:
    https://wa.me/919452543751

    Do NOT change this to:
    whatsapp://send

    The whatsapp:// scheme causes:
    ERR_UNKNOWN_URL_SCHEME
*/


/* --------------------------------
   WHATSAPP NUMBER
-------------------------------- */

const WHATSAPP_NUMBER = "919452543751";


/* --------------------------------
   CREATE WHATSAPP URL
-------------------------------- */

function createWhatsAppUrl() {

    const message =
        "Hello Nobel Academy,\n\n" +
        "I found your coaching centre online and would like to know " +
        "more about your courses, current batches and admissions.\n\n" +
        "Thank you.";

    return "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);
}


/* --------------------------------
   OPEN WHATSAPP
-------------------------------- */

function openWhatsApp() {

    const url = createWhatsAppUrl();

    /*
        Using HTTPS instead of whatsapp://
        makes it compatible with normal browsers
        and Android WebViews such as Acode preview.
    */

    window.location.href = url;
}


/* --------------------------------
   WHATSAPP BUTTONS
-------------------------------- */

const whatsappButtons =
    document.querySelectorAll("[data-whatsapp]");

whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        openWhatsApp();

    });

});


/* --------------------------------
   ENQUIRY FORM
-------------------------------- */

const enquiryForm =
    document.getElementById("enquiryForm");

const formStatus =
    document.getElementById("formStatus");


if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const exam =
            document.getElementById("exam").value;

        const phone =
            document.getElementById("phone").value.trim();

        const query =
            document.getElementById("message").value.trim();


        /* BASIC VALIDATION */

        if (!name) {

            formStatus.textContent =
                "Please enter your name.";

            document.getElementById("name").focus();

            return;
        }


        if (!exam) {

            formStatus.textContent =
                "Please select the exam.";

            document.getElementById("exam").focus();

            return;
        }


        /* CREATE PERSONALIZED MESSAGE */

        let whatsappMessage =
            "Hello Nobel Academy,\n\n" +
            "My name is " +
            name +
            ".\n\n" +
            "I am interested in " +
            exam +
            " preparation.\n";


        if (phone) {

            whatsappMessage +=
                "\nMy phone number: " +
                phone +
                "\n";

        }


        if (query) {

            whatsappMessage +=
                "\nMy query:\n" +
                query +
                "\n";

        }


        whatsappMessage +=
            "\nI would like to know about the current batch " +
            "and admission process.\n\n" +
            "Thank you.";


        /* BUILD SAFE HTTPS WHATSAPP LINK */

        const whatsappUrl =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        formStatus.textContent =
            "Opening WhatsApp...";


        /*
            IMPORTANT:
            No whatsapp:// scheme here.
            Only https://wa.me
        */

        window.location.href = whatsappUrl;

    });

}


/* --------------------------------
   FAQ
-------------------------------- */

const faqItems =
    document.querySelectorAll(".faq-list details");


faqItems.forEach(function (item) {

    item.addEventListener("toggle", function () {

        if (item.open) {

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {
                    otherItem.removeAttribute("open");
                }

            });

        }

    });

});


/* --------------------------------
   YEAR
-------------------------------- */

const yearElement =
    document.querySelector(".footer-bottom span");

if (yearElement) {

    yearElement.textContent =
        "© 2026 Nobel Academy. All rights reserved.";

    }
