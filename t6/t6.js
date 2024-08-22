'use strict';

const kohde = document.querySelector('#target');

const elokuvat = [];

const lkm = prompt('elokuvien lkm');

for(let i = 0; i < lkm; i++) {
    const title = prompt('Syötä elokuvan nimi');
    const rating = prompt('syötä arvio 1-5');
    const elokuva = {
        title,
        rating,
    };
    elokuvat.push(elokuva);
}


elokuvat.sort((a, b) => b.rating - a.rating);

console.log(elokuvat);


//kun tekee for looppia MITÄ halutaan toistaa
//halutaan toistaa html sijaitsevaa 
//<tr>
//<td>Avatar</td>
//<td>2.5</td>
//</tr> katso alhaalta toteutus:

for(const elokuva of elokuvat) {  //let voi muuttua const on vakio
    const html = `<tr>
                    <td>${elokuva.title}</td>
                    <td>${elokuva.rating}</td>
                </tr>`;
    kohde.insertAdjacentHTML('beforeend', html)

}