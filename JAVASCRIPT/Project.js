let demo = document.getElementById("submit");
demo.onclick = showMessage;

function showMessage() {
  alert("Untuk Permintaannya akan Kami Proses");
}

function check() {
  let fullname = document.getElementById("fullname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let massage = document.getElementById("massage");
  if (fullname !== "" && email != "" && phone != "" && massage != "") {
    return showMessage();
  } else {
    alert("Anda harus mengisi data dengan lengkap !");
  }
}
