
let imageNames = [
    'png-transparent-binary-number-binary-code-random-number-generation-others-miscellaneous-angle-building-thumbnail.png',
    'png-transparent-daft-punk-random-access-memories-song-daft-punk-ring-motorcycle-helmet-protective-gear-in-sports-thumbnail.png',
    'png-transparent-dice-computer-icons-random-buttons-game-dice-gambling-thumbnail.png',
    'png-transparent-github-pages-random-icons-white-logo-monochrome-thumbnail.png',
    'png-transparent-humidity-rain-temperature-moisture-random-icons-text-cloud-area-thumbnail.png',
    'png-transparent-paper-box-computer-icons-symbol-random-icons-miscellaneous-angle-text-thumbnail.png',
    'png-transparent-randomness-pattern-nubes-text-cloud-heart-thumbnail.png',
    'png-transparent-unicorn-kawaii-jump-kavaii-drawing-that-random-game-unicorn-thumbnail.png',
]

let size = 120;

function insertImages() {
    $('#images').empty();
    imageNames.forEach(image => {
        $('#images').append(`
                <img src="common/`+image+`" alt="" width="`+size+`px" height="auto" class='m-1 graffiti-image' onclick="chooseGraffiti('`+ image +`')">
        `)
    });
}

function chooseGraffiti(imageName){
    console.log(imageName);
}

function increaseSize(){ size += 10; insertImages()}
function decreaseSize(){ size -= 10; insertImages() }

insertImages();