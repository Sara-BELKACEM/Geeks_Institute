const fetchSunGifs = async () => {
    const endpoint = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Giphy Sun GIFs JSON:", result);

        const gifs = result.data;
        const container = document.getElementById("gif-container");

        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = gif.title || "Sun GIF";
            container.appendChild(img);
        });

    } catch (error) {
        console.error("Error fetching Giphy Sun GIFs:", error);
    }
};

fetchSunGifs();
