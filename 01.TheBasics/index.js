console.log("erro");

const Gon = {
  name: "gon",
  age: "20",
  playGame: function () {
    console.log("Lien Minh Huyen Thoai");
  },
};

Gon.playGame();

const names = ["Gon", "Tran", "GonVaTran", "laptop"];

for (const name of names) {
  console.log(name);
}

names.forEach((name) => console.log(name));

for (const key in Gon) {
  if (Gon.hasOwnProperty(key)) {
    const element = Gon[key];
    console.log(element);
  }
}
