function menjanjeBoje(boja){
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
   
}

//menjanjeBoje("green");

let menjanjeBojeA=(boja)=>{
    let obrisiDugmad=documet.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

// menjanjeBojeA("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=>dugme.style.backgroundColor=boja)
menjanjeBojeB("purple");

let obrisiDugmad=document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje = this.parentNode;
        //elementZaBrisanje.remove();
        document.getElementById("lista").removeChild(elementZaBrisanje);
    })
}

function obrisiRed(){
    this.parentNode.remove();
}

for(const dugme of obrisiDugmad){
    dugme.addEventListener("click",obrisiRed);
}

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");

    let nnd = inputPolje.value;

    if(nnd){
        let ul=document.getElementById("lista");
        let noviListItem=document.createElement("li");

        noviListItem.innerHTML=`<span class="naziv">${nnd}</span>
        <span class="obrisi">obriši</span>`;

        ul.appendChild(noviListItem);

        inputPolje.value="";
    }
}
function poziv(){
    let forma=document.forms["dodaj-destinaciju"];
    forma.addEventListener("submit",dodajDestinaciju);
}
document.addEventListener("DOMContentLoaded",poziv);