export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
function loadUsers() {
  const http = new XMLHttpRequest();
  http.onload = function() {
      const users = JSON.parse(this.response);
      const usersList = document.getElementById("userList");
      let dados = "";
      users.forEach ( u => dados += "<li>" + u.email + "</li>");
      usersList.innerHTML = dados
      console.log(users);

  }
  http.open('GET', 'https://jsonplaceholder.typicode.com/photos');
  http.send();
}
