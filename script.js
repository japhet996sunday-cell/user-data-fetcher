let loadBtn = document.getElementById("loadBtn");
let userContainer = document.getElementById("userContainer");

async function loadUsers() {

  userContainer.innerHTML = "Loading users...";

  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  let data = await response.json();

  userContainer.innerHTML = "";

  data.forEach(function(user) {

    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>City: ${user.address.city}</p>
      <p>Company: ${user.company.name}</p>
    `;

    userContainer.appendChild(card);

  });

}

loadBtn.addEventListener("click", loadUsers);
