'use strict'

var namesList = [];

window.onload = function () {
    let buttonTime = document.getElementById('button-timer'),
        buttonName = document.getElementById('button-name');
      
    buttonTime.addEventListener('click', getTime);
    buttonName.addEventListener('click', getNames);
};

function getTime () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/get-time', true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                createWatch(xhr.responseText);
            }
        }
    });
    xhr.send();
}

function createWatch (serverTime) {
    let time = document.getElementById('time');

    time.innerHTML = `${serverTime}`;
}

function getNames () {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', '/get-names', true);
    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                pushNames(xhr.responseText);
            }
        }
    });
    xhr.send();
}

function pushNames (responseText) {
    let names,
        start,
        end,
        tmp;

    start = responseText.indexOf('[');
    end = responseText.indexOf(']');
    tmp = responseText.slice(start + 1, end);
    names = tmp.split(',');

    if (namesList.length < 7) {
        for (let i = 0; i < names.length; i++) {
            if (namesList.indexOf(names[i]) === -1) {
                namesList.push(names[i]);
            }
        }
        addNames(namesList);
    }    
}

function addNames (names) {
    let name = document.getElementById('name');

    name.innerHTML = `${names}`;
}