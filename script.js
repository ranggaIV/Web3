function validateForm() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (!nama || !email || !alamat) {
    alert("Harap isi semua kolom!");
    return false;
  }

  // tambahkan validasi lainnya sesuai kebutuhan
  if (nama || email || alamat) {
    alert("Terima kaish sudah mengisi kolom");
    return true;
  }
}
