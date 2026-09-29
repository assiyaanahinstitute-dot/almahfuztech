document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PAGE LOADER
       ========================================= */

    const pageLoader =
        document.getElementById("pageLoader");


    if (pageLoader) {

        window.addEventListener(
            "load",
            () => {

                setTimeout(() => {

                    pageLoader.classList.add(
                        "loader-hidden"
                    );

                }, 350);

            }
        );

    }


    /* =========================================
       HERO IMAGE TILT
       ========================================= */

    const heroImage =
        document.querySelector(".hero-image");

    const imageFrame =
        document.querySelector(".image-frame");


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (
        heroImage &&
        imageFrame &&
        !prefersReducedMotion &&
        window.innerWidth > 700
    ) {

        heroImage.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroImage.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 8;


                const rotateX =
                    ((centerY - y) /
                        centerY) * 8;


                imageFrame.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)
                     scale(1.02)`;

            }
        );


        heroImage.addEventListener(
            "mouseleave",
            () => {

                imageFrame.style.transform =
                    `perspective(1000px)
                     rotateY(-5deg)
                     rotateX(0deg)
                     translateY(0)
                     scale(1)`;

            }
        );

    }


    /* =========================================
       BUTTON MAGNETIC HOVER
       ========================================= */

    const buttons =
        document.querySelectorAll(".btn");


    if (!prefersReducedMotion) {

        buttons.forEach((button) => {

            button.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(
                            ${x * 0.08}px,
                            ${y * 0.08}px
                        )`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "translate(0, 0)";

                }
            );

        });

    }


    /* =========================================
       MOBILE NAVIGATION
       ========================================= */

    const menuToggle =
        document.getElementById("menuToggle");


    const mobileMenu =
        document.getElementById("mobileMenu");


    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav-link"
        );


    if (
        menuToggle &&
        mobileMenu
    ) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.contains(
                        "active"
                    );


                if (isOpen) {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.style.overflow =
                        "";

                } else {

                    mobileMenu.classList.add(
                        "active"
                    );

                    menuToggle.classList.add(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    document.body.style.overflow =
                        "hidden";

                }

            }
        );


        mobileLinks.forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.style.overflow =
                        "";

                }
            );

        });

    }

});