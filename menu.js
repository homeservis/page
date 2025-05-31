document.addEventListener('DOMContentLoaded', function() {
    const mulai = document.getElementById('mulai');
    const popup1 = document.getElementById('popup1');
    const tutup1 = document.getElementById('tutup1');
    const start = document.getElementById('start');
    const layanan = document.getElementById('layanan');
    const produk = document.getElementById('produk');
    const sosmed = document.getElementById('sosmed');
    const popupl = document.getElementById('popupl');
    const tutupl = document.getElementById('tutupl');
    const popupp = document.getElementById('popupp');
    const tutupp = document.getElementById('tutupp');
    const popups = document.getElementById('popups');
    const tutups = document.getElementById('tutups');

    if (mulai && tutup1) {
    mulai.addEventListener('click', function() {
      popup1.style.visibility = 'visible';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });

    tutup1.addEventListener('click', function() {
      popup1.style.visibility = 'hidden';
      overlay.style.visibility = 'hidden';
      start.style.visibility = 'visible';
    });
    }

    if (sosmed && tutups) {
    sosmed.addEventListener('click', function() {
      popups.style.visibility = 'visible';
      popup1.style.visibility = 'hidden';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });

    tutups.addEventListener('click', function() {
      popups.style.visibility = 'hidden';
      popup1.style.visibility = 'visible';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });
    }

    if (produk && tutupp) {
    produk.addEventListener('click', function() {
      popupp.style.visibility = 'visible';
      popup1.style.visibility = 'hidden';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });

    tutupp.addEventListener('click', function() {
      popupp.style.visibility = 'hidden';
      popup1.style.visibility = 'visible';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });
    }

    if (layanan && tutupl) {
    layanan.addEventListener('click', function() {
      popupl.style.visibility = 'visible';
      popup1.style.visibility = 'hidden';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });

    tutupl.addEventListener('click', function() {
      popupl.style.visibility = 'hidden';
      popup1.style.visibility = 'visible';
      overlay.style.visibility = 'visible';
      start.style.visibility = 'hidden';
    });
    }

    else {
    console.log('Elemen tidak ditemukan');
    }
});
