const pokeName = document.getElementById("name");
const pokeId = document.getElementById("idNumber");

const newPoke = async () => {

    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
    const randomNum = Math.ceil(Math.random() * 898);

    fetch(pokeUrl + randomNum)
        .then(allPoke => allPoke.json())
        .then(poke => {
            const pokeN = poke["name"];
            const pokeUpper = pokeN.charAt(0).toUpperCase() + pokeN.slice(1);
            pokeName.innerHTML = "Name: " + pokeUpper;
            pokeId.innerHTML = "Pokédex ID: " + poke["id"];
            document.getElementById("sprite").src = poke["sprites"]["front_default"];
        })
        
}

newPoke();