const dogBtn = document.getElementById("dogButton");
const statusText = document.getElementById("status-text");
const imageContainer = document.getElementById("image-container");

async function fetchData() {
    statusText.textContent = "Loading...";
    dogBtn.disabled = true;

    try {
        let dogUrl = "";

        while (!dogUrl.match(/\.(jpg|jpeg|png|gif)$/i)) {
            const response = await fetch("https://random.dog/woof.json");

            if (!response.ok) {
                throw new Error("Could not fetch dog image");
            }

            const data = await response.json();
            dogUrl = data.url;
        }

        
        imageContainer.innerHTML = "";
        const imgElement = document.createElement("img");
        imgElement.src = dogUrl;
        imgElement.alt = "A random dog";
        imageContainer.appendChild(imgElement);

        statusText.textContent = "";
    } catch (error) {
        console.error(error);
        statusText.textContent = "Failed to load dog. Try again.";
    } finally {
        dogBtn.disabled = false;
    }
}

dogBtn.addEventListener("click", fetchData);