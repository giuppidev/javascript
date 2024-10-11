const getValue = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("A");
    }, 1000);
  });
};

// getData()
//   .then((response) => {
//     console.log(response);
//     console.log("B");
//   })
//   .catch((error) => {
//     console.log("ERROR");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((responseJson) => console.log(responseJson))
//   .catch((error) => console.log("ERROREEE"));

async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log("ERROREEEE");
  }
}
getData();
