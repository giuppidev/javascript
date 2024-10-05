let person = {
  name: "pippo",
  skill: {
    coding: {
      value: 10,
      languages: ["js", "ts"],
    },
  },
};

let { skill, name } = person;

let person2 = {
  ...person,
  name: "pluto",
};

const names = ["pippo", "pluto", "paperino"];

const [name1, ...otherNames] = names;

const newNames = [...names, "topolino"];

console.log(newNames);
