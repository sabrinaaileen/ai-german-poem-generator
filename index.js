const generatePoem = (event) => {
    event.preventDefault();

    new Typewriter('#poem-text', {
        strings: "Die Nacht ist kalt <br /> doch kälter noch im Wald",
        autoStart: true,
        delay: 1,
    });
}


const inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", generatePoem);