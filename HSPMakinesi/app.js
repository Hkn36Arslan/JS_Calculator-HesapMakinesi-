// HTML'de "button" etiketlerini toplar
var _buttonlar = document.getElementsByTagName("button");

// Toplam buton sayısını alır
var _uzunluk = _buttonlar.length;

// Hesap makinesi sonucu için HTML'de "sonuç" id'ye sahip olan elementi alır
var _sonuç = document.getElementById("sonuç");

// Döngü için sayaç değişkeni
var i = 0;

// Butonlara tıklama olayını "hesapla" fonksiyonuna bağlamak için döngü
for (i = 0; i < _uzunluk; i++) {
    _buttonlar[i].onclick = hesapla;
}

// Hesaplama işlemlerini yapan "hesapla" fonksiyonu
function hesapla() {
    // Butonun içeriğini alır (butonun üzerinde yazan metin)
    var _deger = this.innerHTML;

    // Eğer tıklanan buton "=" ise:
    if (_deger == "=") {
        try {
            // Hesap makinesi ekranındaki ifadeyi değerlendir ve sonucu ekrana yazar
            _sonuç.value = eval(_sonuç.value);
        } catch (e) {
            // Hesaplama hatası oluşursa ekrana "0" yazar
            _sonuç.value = "0";
        }
        return; // İşlemi bitir ve çık
    }

    // Eğer tıklanan buton "clearAll" ise:
    else if (_deger == "clearAll") {
        // Hesap makinesi ekranını tamamen temizler (tüm içeriği siler)
        _sonuç.value = "";
    }

    // Eğer tıklanan buton "clear" ise:
    else if (_deger == "clear") {
        // Hesap makinesi ekranındaki en son karakteri siler
        _sonuç.value = _sonuç.value.slice(0, -1);
    }

    // Eğer tıklanan buton ne "=" ne de "clearAll" ne de "clear" ise:
    else {
       
        // (yani sayı butonları ise), butonun değerini hesap makinesi ekranına ekler
        _sonuç.value += _deger;
    }
}
