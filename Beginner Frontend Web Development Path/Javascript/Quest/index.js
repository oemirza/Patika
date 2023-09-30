const clockDOM = document.querySelector("#clock")
const messageDOM = document.querySelector("#message")
let username = prompt("Patika Kullanıcı adınızı giriniz: ","")

messageDOM.innerHTML = `Hoşgeldin ${username}`

function saatGuncelle() {
    var suAn = new Date();
    var saat = suAn.getHours();
    var dakika = suAn.getMinutes();
    var saniye = suAn.getSeconds();
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;
    var zaman = saat + ":" + dakika + ":" + saniye;
    clockDOM.innerHTML = zaman 
}
setInterval(saatGuncelle, 1000);
