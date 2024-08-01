/*  Ini Javascript */

function formValidation() {    
    let name = document.getElementById('input-name').value;
    console.log(name);

    // ini adalah  pengecekan dimana name tidak boleh kosong ''
    if (name == '') {
        // Code ini iakan di eksekusi ketika name = kosong ''
        alert("Maaf inputan anda kosong");
    } else {
        // Code ini iakan di eksekusi ketika name tidak kosong ''
        alert('Sukses menginput');
    }

}

showSlide();
function showSlide() {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);
}
