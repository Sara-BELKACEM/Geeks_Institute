const fetchStarshipData = async () => {
    const url = "https://www.swapi.tech/api/starships/9/";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Starship Data:", data.result); 
    } catch (error) {
        console.error("Failed to fetch starship:", error.message);
    }
};

fetchStarshipData();
