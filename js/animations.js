document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SHARED SCROLL REVEAL
       ========================================= */

    const revealElements = document.querySelectorAll(
        `
        .about-section .section-heading,
        .about-content,
        .skills-card,
        .stat-card,
        .projects-section-top,
        .featured-project-card,
        .showcase-project,
        .projects-cta-content,
        .service-card,
        .contact-intro,
        .contact-card,
        .contact-form
        `
    );


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefersReducedMotion) {

        revealElements.forEach((element) => {

            element.style.opacity = "1";
            element.style.transform = "none";

        });

    } else {

        revealElements.forEach((element, index) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(45px)";

            element.style.transition =
                "opacity 0.9s ease, " +
                "transform 0.9s " +
                "cubic-bezier(0.16, 1, 0.3, 1)";

            element.style.transitionDelay =
                `${Math.min(index * 0.06, 0.35)}s`;

        });


        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (!entry.isIntersecting) {
                            return;
                        }


                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";


                        observer.unobserve(
                            entry.target
                        );

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -70px 0px"
                }
            );


        revealElements.forEach((element) => {

            revealObserver.observe(element);

        });

    }



    /* =========================================
       SKILL BAR ANIMATION
       ========================================= */

    const skillBars =
        document.querySelectorAll(
            ".skill-bar span"
        );


    skillBars.forEach((bar) => {

        const originalWidth =
            bar.style.width;


        if (!prefersReducedMotion) {

            bar.style.width = "0";


            const skillObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach((entry) => {

                            if (!entry.isIntersecting) {
                                return;
                            }


                            setTimeout(() => {

                                bar.style.transition =
                                    "width 1.4s " +
                                    "cubic-bezier(" +
                                    "0.16, 1, 0.3, 1" +
                                    ")";

                                bar.style.width =
                                    originalWidth;

                            }, 150);


                            observer.unobserve(
                                entry.target
                            );

                        });

                    },
                    {
                        threshold: 0.5
                    }
                );


            skillObserver.observe(bar);

        }

    });



    /* =========================================
       PROJECT CARD HOVER DEPTH
       ========================================= */

    const projectCards =
        document.querySelectorAll(
            ".showcase-project"
        );


    if (!prefersReducedMotion) {

        projectCards.forEach((card) => {

            card.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        card.getBoundingClientRect();


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


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -1.5;


                    const rotateY =
                        ((x - centerX) /
                            centerX) * 1.5;


                    card.style.transform =
                        `
                        translateY(-8px)
                        perspective(1000px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        `;
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "translateY(0)";

                }
            );

        });

    }



    /* =========================================
       FEATURED PROJECT MOUSE DEPTH
       ========================================= */

    const featuredCard =
        document.querySelector(
            ".featured-project-card"
        );


    if (
        featuredCard &&
        !prefersReducedMotion &&
        window.innerWidth > 700
    ) {

        featuredCard.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    featuredCard.getBoundingClientRect();


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


                const rotateX =
                    ((y - centerY) /
                        centerY) * -0.4;


                const rotateY =
                    ((x - centerX) /
                        centerX) * 0.4;


                featuredCard.style.transform =
                    `
                    perspective(1600px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    `;
            }
        );


        featuredCard.addEventListener(
            "mouseleave",
            () => {

                featuredCard.style.transform =
                    "perspective(1600px) rotateX(0deg) rotateY(0deg)";

            }
        );

    }



    /* =========================================
       FEATURE TAG STAGGER
       ========================================= */

    const featureTags =
        document.querySelectorAll(
            ".project-features span"
        );


    if (!prefersReducedMotion) {

        featureTags.forEach((tag, index) => {

            tag.style.opacity = "0";

            tag.style.transform =
                "translateY(10px)";

            tag.style.transition =
                "opacity 0.5s ease, " +
                "transform 0.5s " +
                "cubic-bezier(0.16, 1, 0.3, 1)";

            tag.style.transitionDelay =
                `${index * 0.05}s`;

        });


        const featureContainer =
            document.querySelector(
                ".project-features"
            );


        if (featureContainer) {

            const featureObserver =
                new IntersectionObserver(
                    (entries, observer) => {

                        entries.forEach((entry) => {

                            if (!entry.isIntersecting) {
                                return;
                            }


                            featureTags.forEach(
                                (tag) => {

                                    tag.style.opacity =
                                        "1";

                                    tag.style.transform =
                                        "translateY(0)";

                                }
                            );


                            observer.unobserve(
                                entry.target
                            );

                        });

                    },
                    {
                        threshold: 0.25
                    }
                );


            featureObserver.observe(
                featureContainer
            );

        }

    }



    /* =========================================
       SMOOTH CTA ENTRANCE
       ========================================= */

    const cta =
        document.querySelector(
            ".projects-cta"
        );


    if (
        cta &&
        !prefersReducedMotion
    ) {

        cta.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    cta.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const glow =
                    cta.querySelector(
                        ".projects-cta-glow"
                    );


                if (!glow) {
                    return;
                }


                glow.style.left =
                    `${x}px`;

                glow.style.top =
                    `${y - 200}px`;

                glow.style.transform =
                    "translateX(-50%)";

            }
        );

    }

});