"use strict";
const arrayIcons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

// Creo un oggetto: per ogni type corrisponde un colore
const colorXtype = {
    "animal": "blue",
    "vegetable": "orange",
    "user": "purple"
};

const iconContainer = document.querySelector(".icon-container");

// Ciclo le icone 
for (let i = 0; i < arrayIcons.length; i++) {
    const icon = arrayIcons[i];
    // Recupero il colore 
    const color = colorXtype[icon.type];
    // Creo le col con le card per ogni icona 
    iconContainer.innerHTML += `<div class="col">
                                    <div class="card shadow">
                                        <div class="card-img-top justify-content-center align-items-center d-flex fs-1 pt-4">
                                            <i class="${icon.family} ${icon.prefix + icon.name}" style="color: ${color}"></i>
                                        </div>
                                        <div class="card-body">
                                            <div class="card-title text-center">${icon.name}</div>
                                        </div>
                                    </div>
                                </div>`;
}

// Funzione per gruppare In base alla KEY
// list è l'array di ogetti e key è la chiave per gruppare
function groupByType(list, key)
{
    return list.reduce(function (storage, item)
    {
        // la prima chiave che sto gruppando
        let group = item[key];
        // storage se non è vuoto
        storage[group] = storage[group] || [];
        // aggiungo l'emento dentro storage
        storage[group].push(item);
        // ritorna lo storage aggiornato 
        return storage;
    }, {});
    // {} è il valore iniziale di storage 
};

let grouppedType = groupByType(arrayIcons, "type");
console.log(grouppedType);
