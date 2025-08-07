const displayPoem = (response) => {
    const poemHeading = document.querySelector("#poem-heading");
    poemHeading.classList.remove("hidden");
    // display the poem
    new Typewriter('#poem-text', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
    });
}

const generatePoem = (event) => {
    event.preventDefault();
    let userInstructions = document.querySelector("#user-instructions");
    // build the api url
    let apiKey = "02060cacd430ctof7d20b656741fc18d";
    let prompt = `Create a poem in German which is about ${userInstructions.value}.`;
    let context = "You are a poet and love to write short poems in 4 lines. Behave and be polite. Make a line break after each sentence with a <br />. And display the author <b>SheCodes AI</b> in bold at the end of the poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    // make the api call
    axios.get(apiUrl).then(displayPoem);

    // optimizing the display
    const poemText = document.querySelector("#poem-text");
    const poemSection = document.querySelector("#poem-section");
    poemText.innerHTML = "<p class='blink'>Generating your poem</p>";
    poemSection.classList.remove("hidden");
}

const inputForm = document.querySelector("#input-form");
inputForm.addEventListener("submit", generatePoem);