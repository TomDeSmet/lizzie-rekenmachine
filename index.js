const rekenmachine = document.getElementById('rekenmachine');
const elCijfer1 = document.getElementById('cijfer1');
const elCijfer2 = document.getElementById('cijfer2');
const elBewerking = document.getElementById('bewerking');
const elUitkomst = document.getElementById('uitkomst');

rekenmachine.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const cijfer1 = Number(elCijfer1.value);
    const cijfer2 = Number(elCijfer2.value);
    const bewerking = elBewerking.value;
    let uitkomst = "?";
    
    switch (bewerking) {
        case 'delen':
            uitkomst = cijfer1 / cijfer2;
            break;
        case 'som':
            uitkomst = cijfer1 + cijfer2;
            break;
        case 'aftrekken':
            uitkomst = cijfer1 - cijfer2;
            break;
        case 'maal':
            uitkomst = cijfer1 * cijfer2;
            break;
        default:
            // Niks doen
    }
    
    elUitkomst.innerHTML = uitkomst;
})