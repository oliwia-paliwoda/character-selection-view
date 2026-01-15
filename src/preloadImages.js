import characters from "./characters.json";

export function preloadImages() {
    characters.forEach(name => {
        const normalized = name.toLowerCase().replace(/[ \-]/g, "_");
        const img = new Image();
        img.src = `assets/characterIcons/${normalized}.png`;
    });
}
