const fullNames = (names) => {
  let arr = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i].firstname + " " + names[i].lastname;
    arr.push(name);
  }

  return arr;
};

const names = [
  { firstname: "Bruce", lastname: "Wayne" },
  { firstname: "Clark", lastname: "Kent" },
];
const output = fullNames(names);
console.log(output);
