function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Username / Password Tidak Boleh Kosong");
        return false
    }
    else if (username == "siti pujayansyah" && password == "12345678910") {
        window.location = "loginSukses.html";
        return false
    }else{
        alert("Login Gagal");
    }
}