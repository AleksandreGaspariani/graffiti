
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
let commonGraffitiSize = 2;
let factionGraffitiSize = [];

//Max graffiti per faction
factionGraffitiSize[0] = 0; //None
factionGraffitiSize[1] = 0; //LSSD
factionGraffitiSize[2] = 0; //LSFD
factionGraffitiSize[3] = 0; //GOV
factionGraffitiSize[4] = 0; //NEWS
factionGraffitiSize[5] = 2; //OFFICIAL_TEST

function insertImages() {
    $('#images').empty();

    for(let i = 1; i < commonGraffitiSize + 1; i++) {
        $('#images').append(`
            <img src="common/str_dcl_${i}.png" alt="" width="`+size+`px" height="auto" class='m-1 graffiti-image' onclick="chooseGraffiti('str_dcl_${i}')">
        `);
    }

    //imageNames.forEach(image => {
    //    $('#images').append(`
    //        <img src="common/`+image+`" alt="" width="`+size+`px" height="auto" class='m-1 graffiti-image' onclick="chooseGraffiti('`+ image +`')">
    //    `)
    //});
}

function insertFactionImage(fid) {
    $('#images').empty();
    
    for(let i = 1; i < factionGraffitiSize[fid] + 1; i++) {
        $('#images').append(`
            <img src="faction/${fid}/f_dcl_${i}.png" alt="" width="`+size+`px" height="auto" class='m-1 graffiti-image' onclick="chooseGraffiti('f_dcl_${i}')">
        `);
    }
}

function chooseGraffiti(imageName){
    console.log(imageName);
    mp.trigger('selectedImage', imageName);
}

function exitGraffiti() {
    mp.trigger('exitGraffiti');
}

function increaseSize(){ size += 10; insertImages()}
function decreaseSize(){ size -= 10; insertImages() }

insertImages();