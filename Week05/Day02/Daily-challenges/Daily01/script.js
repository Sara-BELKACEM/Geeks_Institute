const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const form = document.getElementById('gifForm');
const input = document.getElementById('categoryInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const category = input.value.trim();
    if (!category) return;

    try {
        const gifUrl = await fetchRandomGif(category);
        displayGif(gifUrl);
        input.value = '';
    } catch (err) {
        console.error(err);
        alert('Error fetching GIF. Try a different category.');
    }
});

async function fetchRandomGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(category)}&rating=g`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const gifUrl = data?.data?.images?.fixed_height?.url;
        if (!gifUrl) throw new Error('No GIF found for this category');
        return gifUrl;
    } catch (error) {
        throw error;
    }
}

function displayGif(url) {
    const gifItem = document.createElement('div');
    gifItem.className = 'gif-item';

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Random GIF';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', () => {
        gifItem.remove();
    });

    gifItem.appendChild(img);
    gifItem.appendChild(deleteBtn);
    gifContainer.appendChild(gifItem);
}

deleteAllBtn.addEventListener('click', () => {
    gifContainer.innerHTML = '';
});
