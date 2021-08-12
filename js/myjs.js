let text = '{ "users" : [' +
    '{ "userName":"anh123" , "fullName":"Ngoc Anh" , "email":"ngocAnh2@gmail.com" , "password":"123" } ,' +
    '{ "userName":"anh1233" , "fullName":"Ngoc Anh 1" , "email":"ngocAnh2@gmail.com" , "password":"123" } ]}';

const userList = JSON.parse(text);



// var tables = document.getElementById("tables");

// var row = document.createElement("tr");
// var col_userName = document.createElement("td");
// var col_fullName = document.createElement("td");
// var col_email = document.createElement("td");
// var col_password = document.createElement("td");

// col_userName.innerHTML = "linh123";
// col_fullName.innerHTML = "Thuy Linh";
// col_email.innerHTML = "linhCute@gmail.com";
// col_password.innerHTML = "123";

// row.appendChild(col_number);
// row.appendChild(col_userName);
// row.appendChild(col_fullName);
// row.appendChild(col_password);

// tables.appendChild(row);

var tables = document.getElementById("tables");

for (var u in userList.users) {
    console.log(userList.users[u].fullName);
    var row = document.createElement("tr");
    var col_userName = document.createElement("td");
    var col_fullName = document.createElement("td");
    var col_email = document.createElement("td");
    var col_password = document.createElement("td");

    col_userName.innerHTML = userList.users[u].userName;
    col_fullName.innerHTML = userList.users[u].fullName;
    col_email.innerHTML = userList.users[u].email;
    col_password.innerHTML = userList.users[u].password;

    row.appendChild(col_userName);
    row.appendChild(col_fullName);
    row.appendChild(col_email);
    row.appendChild(col_password);

    tables.appendChild(row);
}
