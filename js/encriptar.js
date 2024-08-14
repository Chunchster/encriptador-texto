document.getElementById('bEncript').addEventListener('click', function() {
    const textArea = document.getElementById('iTextEntry');
    const divResult = document.getElementById('textbox-result');
    let texto = textArea.value;

    if (!texto || texto == ''){
        divResult.innerHTML = `<img src="assets/Muneco.png" alt="Alura">
        <h2>Ningún mensaje fue encontrado</h2>
        <p id='text-result'>Ingresa el texto que desees encriptar o desencriptar</p>
        <button class="inverted-button" id="bPortapapeles" style="display: none;">Copiar</button>`;

        textArea.placeholder = 'Ingresa un mensaje';
    } else {
        if (!/^[a-z\s]*$/.test(texto)) {
            divResult.innerHTML = "<p style='color: red;'>El mensaje a <b>Encriptar</b> debe contener solo letras minúsculas y sin acento</p>";
            textArea.value = '';
            return;
        }
    
        const encriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    
        divResult.innerHTML = `<p id='text-result'>${encriptado}</p>
        <button class="inverted-button" id="bPortapapeles">Copiar</button>`;
        textArea.value = '';
    }
});