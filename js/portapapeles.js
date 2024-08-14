document.getElementById('bPortapapeles').addEventListener('click', function() {
    const textToCopy = document.getElementById('text-result').innerText;

    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Texto copiado al portapapeles');
        //alert('Texto copiado al portapapeles');
    }).catch(function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});
