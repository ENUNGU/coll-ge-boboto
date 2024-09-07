// const res = prompt("Enter your age ? ");
// if (Number(res) >= 18)
//     alert("Majeur");
// else if (Number(res) < 1)
//     alert(res + " ans !? l'age ne doit pas etre < à 1");
// else if (Number(res) < 18)
//     alert("Mineur");
// else
//     alert("On ne reçoit que des chiffres");

// for
// let nom =[]

// const nbrEnfant = prompt("Enter le nombre d'enfant ? ");
// const n = 5;
// for (let i = 0; i < nbrEnfant; i++) {
// //   nom[i] = prompt("Nom de l'enfant " + Number(i+1) + " :");
//   nom.push(prompt("Nom de l'enfant " + Number(i+1) + " :"));
// }
// for (let i = 0; i < nbrEnfant; i++) {
//   console.log("L'enfant " + Number(i+1) + " est : " + nom[i]);
// }

// object
let tb = [];
const last = "E";
const last2 = 3;
let humain = {};

// humain = {
//   nom: "Joe",
//   poids: 55,
//   tail: 1.69,
//   teint: "sombre",
// };
// tb = ["A", "B", "C", "D", last, last2];
// let el = `
// Individu
// nom : ${humain.nom}
// poids : ${humain.poids}Kg
// taille : ${humain.tail}m
// teint : ${humain.teint}`;
// tb.push(humain)
// console.log(humain);
// console.log(tb);

// Fonction

function addition(){
    humain = {
        nom: "Joe",
        poids: 55,
        tail: 1.69,
        teint: "sombre",
      };
      tb = ["A", "B", "C", "D", last, last2];
      let el = `
      Individu
      nom : ${humain.nom}
      poids : ${humain.poids}Kg
      taille : ${humain.tail}m
      teint : ${humain.teint}`;
      tb.push(humain)
      console.log(humain);
      console.log(tb);
}

addition()