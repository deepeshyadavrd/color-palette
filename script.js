const searchInput = document.querySelector(".search-input"),
    searchColor = document.querySelector(".search-color"),
    searchImage = document.querySelector("#search-image"),
    typeSelect = document.querySelector("#palette-type"),
    countSelect = document.querySelector("#palette-count"),
    randomBtn = document.querySelector("#random-btn"),
    paletteContainer = document.querySelector("#palette"),
    relatedContainer = document.querySelector("#related");

    let currentColor = "skyblue",
        currentType = "analogous",
        currentCount = 6,
        imageColors = [];


// all functions to generate different color palette

function generateAnalogousPalette(hsl, count) {
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newHue = hue + 30 * i;
        if(newHue > 360){
            newHue -=360;
        }

        palette.push([newHue, saturation, lightness])
    }
    return palette;
}

let hsl = [150, 60, 60];

let palette = generateAnalogousPalette(hsl, 6);

console.log(palette);
