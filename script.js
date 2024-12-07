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

function generateMonochromaticPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newLightness = lightness + 10 * i;
        if(newLightness > 100){
            newLightness -=100;
        }

        palette.push([hue, saturation, newLightness])
    }
    return palette;
}

function generateTriadicPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newHue = hue + 120 * i;
        if(newHue > 360){
            newHue -=360;
        }

        palette.push([newHue, saturation, lightness])
    }
    return palette;
}

function generateCompoundPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newHue = hue + 150 * i;
        if(newHue > 360){
            newHue -=360;
        }

        palette.push([newHue, saturation, lightness])
    }
    return palette;
}

function generateCompoundPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newHue = hue + 150 * i;
        if(newHue > 360){
            newHue -=360;
        }

        palette.push([newHue, saturation, lightness])
    }
    return palette;
}

function generateShadesPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newSaturation = saturation + 10 * i;
        if(newSaturation > 360){
            newSaturation -=360;
        }

        palette.push([hue, newSaturation, lightness])
    }
    return palette;
}

function generateTetradicPalette(hsl, count){
    const palette = [];
    const [hue, saturation, lightness] = hsl;

    for(let i=0; i < count; i++){
        let newHue = hue + 90 * i;
        if(newHue > 360){
            newHue -=360;
        }

        palette.push([newHue, saturation, lightness])
    }
    return palette;
}

let hsl = [155, 55, 55];

let palette = generateTetradicPalette(hsl, 6);

console.log(palette);
