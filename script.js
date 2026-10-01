/* =========================================================
   LUMYNAQ DESIGN
   SINGLE PAGE JAVASCRIPT

   IMPORTANT:
   - No WhatsApp
   - No Instagram
   - No email
   - No mailto:
   - No intent://
   - No external redirect
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* ================= MENU ================= */

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", function () {

            const isOpen =
                mobileMenu.classList.toggle("open");

            menuBtn.classList.toggle(
                "active",
                isOpen
            );

            menuBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        /* Close menu after choosing an option */

        const menuItems =
            mobileMenu.querySelectorAll(
                "[data-target]"
            );


        menuItems.forEach(function (item) {

            item.addEventListener(
                "click",
                function () {

                    const targetId =
                        item.getAttribute(
                            "data-target"
                        );

                    goToSection(targetId);

                    mobileMenu.classList.remove(
                        "open"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

    }



    /* ================= SECTION NAVIGATION ================= */

    function goToSection(targetId) {

        const target =
            document.getElementById(targetId);


        if (!target) {
            return;
        }


        /*
            Native smooth scrolling.

            No external page.
            No URL redirect.
            No unknown URL scheme.
        */

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }



    /* ================= ALL INTERNAL BUTTONS ================= */

    const navigationButtons =
        document.querySelectorAll(
            "[data-target]"
        );


    navigationButtons.forEach(function (button) {

        /*
            Menu buttons already have their
            own click handler.
        */

        if (
            button.closest("#mobileMenu")
        ) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                const targetId =
                    button.getAttribute(
                        "data-target"
                    );

                goToSection(targetId);

            }
        );

    });



    /* ================= PREVENT EMPTY LINKS ================= */

    /*
        This prevents accidental jumps caused
        by href="#" links.

        External links are not affected.
    */

    document
        .querySelectorAll('a[href="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                });

        });



    /* ================= ESC KEY ================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (
                    mobileMenu &&
                    menuBtn
                ) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    menuBtn.classList.remove(
                        "active"
                    );

                    menuBtn.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }

        }
    );


});
