 fetchData() 
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const imageelement = document.getElementById("pokemon-image");

        // 1. Basic validation
        if (!pokemonName) {
            alert("Please enter a name first!");
            return;
        } try {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error("Pokemon not found! Please check the name and try again.");
        }

        const data = await response.json();
        
        // 2. Update the image
        const pokemonsprite = data.sprites.front_default; 
        
        if (pokemonsprite) {
            imageelement.src = pokemonsprite;
            imageelement.style.display = "block";
        } else {
            alert("This Pokémon has no sprite available!");
        } }
        else {
            throw new Error("Pokemon not found! Please check the name and try again.");
        }   

    } catch (error) {
        console.error(error);
        // This catch handles BOTH network errors and your custom "not found" error
        alert("Error: " + error.message);
    } 
}