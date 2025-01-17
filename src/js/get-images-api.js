const API_KEY = "48225405-5dd56fa809ed0a2375f53541a";

const pageSize = 12;

export const getImages = (page) => {
    const API = `https://pixabay.com/api/?key=${API_KEY}&q=race-car&image_type=photo&page=${page}&per_page=${pageSize}&callback=callbackFunction`;

    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = API;

        window.callbackFunction = (data) => {
            resolve(data.hits);
            document.body.removeChild(script);
        };

        document.body.appendChild(script);
    });
};