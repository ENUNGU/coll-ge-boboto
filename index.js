const formulaire = document.getElementById("formulaire");
const listInput = formulaire.querySelectorAll("input");
const listSelect = formulaire.querySelectorAll("select");
const tBody = document.querySelector("#t-body");

const aff = ["Papa", "Maman", "Oncle", "Tante", "Gd frère", "Gde soeur"];
aff.forEach((el) => {
  listSelect[2].innerHTML += `
    <option value="${el}">${el}</option>`;
});

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  const listEleve = takeForPrintList();
  const eleve = {
    prenom: listInput[0].value,
    nom: listInput[1].value,
    postnom: listInput[2].value,
    sex: listSelect[0].value,
    class: listSelect[1].value,
    date: listInput[3].value,
    aff: listSelect[2].value,
    nomTuteur: listInput[4].value,
    numTuteur: listInput[5].value,
  };
  listEleve.push(eleve);
  stockage(listEleve);
  addInTable(listEleve);
  formulaire.reset();
});

function addInTable(eleves) {
    while (tBody.childElementCount > 0) {
        tBody.removeChild(tBody.querySelector("tr"));
    }
    eleves.forEach((elv) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${elv.prenom} ${elv.nom} ${elv.postnom}</th>
        <th>${elv.sex}</th>
        <th>${elv.class}</th>
        <th>${elv.date}</th>
        <th>${elv.aff} ${elv.nomTuteur}</th>
        <th>${elv.numTuteur}</th>`;
        tBody.appendChild(tr);
    });
}

function takeForPrintList() {
    const list = localStorage.getItem("list");
    return list ? JSON.parse(list) : [];
}

function stockage(tb) {
    localStorage.setItem("tb", JSON.stringify(tb));
}

const listEleve = takeForPrintList();
addInTable(listEleve);
