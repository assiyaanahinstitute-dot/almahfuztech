document.addEventListener("DOMContentLoaded", () => {

    const contactForm =
        document.getElementById("contactForm");

    const whatsappButton =
        document.querySelector(".whatsapp-button");


    if (!contactForm || !whatsappButton) {
        return;
    }


    whatsappButton.addEventListener("click", (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const serviceSelect =
            document.getElementById("service");

        const service =
            serviceSelect.value
                ? serviceSelect.options[
                    serviceSelect.selectedIndex
                ].text
                : "Not specified";

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            contactForm.reportValidity();

            return;
        }


        const whatsappMessage =
`Hello AlmahfuzTech,

My name is ${name}.

Email: ${email}

Service needed: ${service}

Project details:
${message}

I would love to discuss this project with you.`;


        const whatsappNumber =
            "2347050243678";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage
            )}`;


        window.open(
            whatsappURL,
            "_blank"
        );

    });

});