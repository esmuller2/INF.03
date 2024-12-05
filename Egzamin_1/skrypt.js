function zastosuj() {
    const img = document.getElementById('pszczola');
    const blur = document.getElementById('blur').checked;
    const sepia = document.getElementById('sepia').checked;
    const negatyw = document.getElementById('negatyw').checked;
    
    let filterValue = '';

    if (blur) {
        filterValue += 'blur(6px) ';
    }
    if (sepia) {
        filterValue += 'sepia(100%) ';
    }
    if (negatyw) {
        filterValue += 'invert(100%) ';
    }

    img.style.filter = filterValue.trim();
}

function kolorowy() {
    const img = document.getElementById('owoce');
    img.style.filter = 'none';
}

function czarnobialy() {
    const img = document.getElementById('owoce');
    img.style.filter = 'grayscale(100%)';
}

function przezroczystosc() {
    const img = document.querySelector('#blok3 img');
    const przezroczystoscValue = document.getElementById('przezroczystosc').value;
    img.style.filter = `opacity(${przezroczystoscValue}%)`;
}

function jasnosc() {
    const img = document.querySelector('#blok4 img');
    const jasnoscValue = document.getElementById('jasnosc').value;
    img.style.filter = `brightness(${jasnoscValue}%)`;
}
