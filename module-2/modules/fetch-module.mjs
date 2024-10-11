async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  return json;
}

async function getPluto() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const json = await response.json();
  return json;
}

export default { getData, getPluto };
