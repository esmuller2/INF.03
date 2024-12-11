function zmianaCytatu(clickedId) {
    
    const cytat1 = document.getElementById('osoba1');
    const cytat2 = document.getElementById('osoba2');
    const cytat3 = document.getElementById('osoba3');
    
    
    if (clickedId === 'osoba1') {
        cytat1.style.display = 'none';  
        cytat2.style.display = 'block'; 
    } else if (clickedId === 'osoba2') {
        cytat2.style.display = 'none'; 
        cytat3.style.display = 'block'; 
    } else if (clickedId === 'osoba3') {
        cytat3.style.display = 'none';  
        cytat1.style.display = 'block'; 
    }
}

document.getElementById('osoba1').addEventListener('click', function() {
    zmianaCytatu('osoba1');
});
document.getElementById('osoba2').addEventListener('click', function() {
    zmianaCytatu('osoba2');
});
document.getElementById('osoba3').addEventListener('click', function() {
    zmianaCytatu('osoba3');
});
