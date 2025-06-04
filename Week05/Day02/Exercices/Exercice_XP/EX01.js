const fetchGifs = async () => {
    const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const result = await response.json();
        console.log("Fetched Giphy Data:", result);

        const gifs = result.data;
        const container = document.getElementById("gif-container");

        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            img.alt = "GIF";
            container.appendChild(img);
        });

    } catch (error) {
        console.error("Failed to fetch Giphy data:", error);
    }
};

fetchGifs();
