import {
    data
} from './data';
import {
    addMarkerOnMap,
    visitDreamOnMap
} from './map'

const dreamsContainer = document.querySelector("#dreams-container");

export const buildAllDreams = () => {
    while (dreamsContainer.hasChildNodes()) {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
    addDreamsListeners();
}


const buildOneDream = (dream) => {
    const dreamElement = document.createElement("div");
    dreamElement.innerHTML =
        `<div class="card text-center" id="${dream.id}">
        <h4 class="card-header">${dream.description}</h4>
        <img class="card-img-top" src="${dream.imagePath}" alt="">
        <div class="card-body">
        <a href="#" class="button-action btn btn-${dream.done?"secondary":"primary"} btn-block">${dream.done?"Je veux le refaire":"Je me lance"}</a>
    </div>
    <div class="card-footer text-muted text-right">
        <a href="#" class="button-visit btn btn-outline-primary btn-sm ">visiter</a>
        <a href="${dream.link}" target="_blank" class="btn btn-outline-primary btn-sm">Plus d'infos</a>
    </div>
</div>
`;
    dreamsContainer.appendChild(dreamElement);
    addMarkerOnMap(dream);
}

const addDreamsListeners = () => {
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", () => {
            visitDream(item.parentElement.parentElement.getAttribute("id"));
        });
    });

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", () => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
            buildAllDreams();
        });
    });
}

const visitDream = (dreamId) => {
    let position = data.filter(item => item.id == dreamId)[0].coordinates;
    visitDreamOnMap(position);
}

const toggleDreamDone = (dreamId) => {
    let dream = data.filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
}