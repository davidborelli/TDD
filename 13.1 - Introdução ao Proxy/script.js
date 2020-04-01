let obj = {
  name: "David",
  age: 30
};

let proxy = new Proxy(obj, {
  get(target, name) {
    console.log("Alguém está tentando mudar o nome");
    return target[name];
  },
  set(target, name, value) {
    console.log("Algué esta mudando o nome!");
    target[name] = value.toUpperCase();
  }
});
