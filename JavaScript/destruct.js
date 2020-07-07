let myObject = {
    name: "Cody",
    age: 29,
    favoriteShow: "Futurama",
    favoriteSport: "Baseball",
    favoriteColor: "Midnight green",
    favoritePassword: "password123",
    favoriteBank: "Pokemon Bank",
    favoritePokemon: [
      {
          name: "Greninja", 
          type1: "Water",
          type2: "Dark"
      },
      {
          name: "Araquanid",
          type1: "Water",
          type2: "Bug"
      },
      {
          name: "Salamence",
          type1: "Dragon",
          type2: "Flying"
      }
    ],
    mothersMaidenName: "Josephine",
    favoriteCreditCardNumber: 1234567812345678,
    favoriteBand: "The Butthole Surfers",
    favoriteDigimon: "No",
    favoriteBoolean: false,
    favoriteFuturamCharacter: "Bender"
};


let { favoriteCreditCardNumber, favoritePassword, favoriteBank, ...safeInfo } = myObject;

console.log(safeInfo);