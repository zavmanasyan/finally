const currentArray = document.querySelector(".currentArray");

let date = new Date().toLocaleDateString();

const myObj = {
  name: "Joe",
  role: "Choose a role",
  date,
  age: 27,
  status: "online",
};

const arr = [];

const role = ["Admin", "Client", "Saler"];

for (let i = 0; i < 10; i++) {
  arr.push(myObj);
}

function builder(dto) {
  const table = document.querySelector(".myTable");
  table.innerHTML = "";

  dto.forEach((item) => {
    const row = `<tr>
                     <td>
                        <p>${item.name}</p>
                        <div class="required">Input field must not be empty</div>
                        <div class="input">
                        <input class="inputName" type="text"/> 
                        <button class="btn">Change</button>
                        </div>
                     </td>
                     <td>
                        <select class="rl" name="role">
                            <option class="option" selected disabled id="option">${item.role}</option>
                            <option class="option" value="${role[0]}">${role[0]}</option>
                            <option class="option" value="${role[1]}">${role[1]}</option>
                            <option class="option" value="${role[2]}">${role[2]}</option>
                        </select>
                     </td>
                     <td>${item.date}</td>
                     <td>${item.age}</td>
                     <td>${item.status}</td>
                   </tr>`;
    table.innerHTML += row;
  });

  const stringify = JSON.stringify(arr, null, 2);

  currentArray.innerHTML = stringify;
   
  replace();
  change();
}

window.onload = builder(arr);

function replace(){
  const myBtn = document.querySelectorAll(".btn");
  const myInp = document.querySelectorAll(".inputName");
  const required = document.querySelectorAll(".required");
  myBtn.forEach((item, index) => {
    item.addEventListener("click", () =>{
      const value = myInp[index].value;
      if(value.trim()){
        const newObj = {
          name: value,
          role: "Choose a role",
          date,
          age: 27,
          status: "online",
        };

        arr.splice(index, 1, newObj);
        builder(arr); 
      }else{
        myInp[index].value = "";
        required[index].classList.add("active");
      };
    });
  });
  const option = document.querySelectorAll(".option");
  const select = document.querySelectorAll(".rl");
  select.forEach((select, index) => {
    select.addEventListener("change", () => {
      const selectValue = select.value;
      const obj = {
        name: "",
        role: selectValue,
        date,
        age: 27,
        status: "online",
      };
      option.innerHTML = select;
      arr.splice(index, 1, obj);
      builder(arr);
          
    })
  })
};

