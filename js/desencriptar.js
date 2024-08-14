document.getElementById('bDesencript').addEventListener('click', function() {
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
            divResult.innerHTML = "<p style='color: red;'>El mensaje a <b>Desencriptar</b> debe contener solo letras minúsculas y sin acento</p>";
            textArea.value = '';
            return;
        }
    
        const desencriptado = texto.replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ai/g, "a")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");
    
        divResult.innerHTML = `<p id='text-result'>${desencriptado}</p>
        <button class="inverted-button" id="bPortapapeles">Copiar</button>`;
        textArea.value = '';
    }
    
});