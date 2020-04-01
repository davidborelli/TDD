/*
  Set é um obejto que permite guardar valores unicos de um tipo,
    primitivo ou objeto.
  Ele é muito prático quando termos um array, e queremos garantir, 
    que o mesmo não tenh valaores duplicados, como exemplo abaixo.
*/

let valores = [1, 1, 2, 2, 3, 4, 5, 6, 6, 6, 7];
valores = [...new Set(valores)];

console.log(typeof valores, valores);

/*
  Para resgatar os valores, do Set utilizamos .values()
  Ele retorna um iterator, no qual podemos utilizar o 
    .next() caso for preciso, ou for of
  Exemplo abaixo...
*/

let mySet = new Set(["David", "Allan", "Borelli"]).values();
console.log(mySet.next());

for (nome of mySet) {
  console.log(nome);
}

/*********************/
const objetos = [
  {
    name: "David Borelli",
    age: 30,
    cpf: "36055397854"
  },
  {
    name: "Erick Borelli",
    age: 22,
    cpf: "36099736498"
  },
  {
    name: "David Borelli",
    age: 30,
    cpf: "36055397854"
  },
  {
    name: "Karen Borelli",
    age: 29,
    cpf: "17299453412"
  }
];

// let valoresObjetos = new Set([...objetos].filter(x => x.age === 30)).values();
let valoresObjetos = new Set([objetos.map(x => x.cpf)]).values();

for (obj of valoresObjetos) {
  console.log(obj);
}
