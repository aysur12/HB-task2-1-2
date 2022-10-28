const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  const searchValue = searchInput.value;
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {

      let { data } =  res;
      let {name} = data

      if ( searchValue !== name) {
        resultsContainer.innerHTML = "Такого пользователя нет";
      }

      data.forEach(element => {
        let { name, username, email, phone } =  element;

        if (searchValue === name) {
          resultsContainer.innerHTML = `<div class="response-container">
                                          <p> Имя: <span>${name}</span><p>
                                          <p> Имя пользователя: <span>${username}</span><p>
                                          <p> Электронная почта: <span>${email}</span><p>
                                          <p> Телефон: <span>${phone}</span><p>
                                        </div>`
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
});

