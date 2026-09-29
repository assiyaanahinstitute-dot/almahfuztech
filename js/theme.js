/* =========================================
   PORTFOLIO THEME SYSTEM
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle =
        document.getElementById("themeToggle");


    if (!themeToggle) {
        return;
    }


    /* =========================================
       APPLY SAVED THEME
       ========================================= */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "light") {

        document.body.classList.add(
            "light-mode"
        );

        themeToggle.textContent = "☀";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    } else {

        document.body.classList.remove(
            "light-mode"
        );

        themeToggle.textContent = "☾";

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    }


    /* =========================================
       TOGGLE THEME
       ========================================= */

    themeToggle.addEventListener(
        "click",
        () => {

            const isLight =
                document.body.classList.toggle(
                    "light-mode"
                );


            if (isLight) {

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

                themeToggle.textContent = "☀";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );

            } else {

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

                themeToggle.textContent = "☾";

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );

            }

        }
    );

});