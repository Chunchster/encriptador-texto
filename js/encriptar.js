document.getElementById('bEncript').addEventListener('click', function() {
    const textArea = document.getElementById('iTextEntry');
    let texto = textArea.value;

    if (!texto || texto == ''){
        document.getElementById("textbox-img").classList.remove("setHide");
        document.getElementById("textbox-title").classList.remove("setHide");

        document.getElementById("text-result").classList.remove("setWarning");
        document.getElementById("text-result").textContent = "Ingresa el texto que desees encriptar o desencriptar";
        document.getElementById("bPortapapeles").classList.remove("setHide");
        document.getElementById("bPortapapeles").classList.add("setHide");

        textArea.placeholder = 'Ingresa un mensaje';
    } else {
        document.getElementById("textbox-img").classList.remove("setHide");
        document.getElementById("textbox-img").classList.add("setHide");

        document.getElementById("textbox-title").classList.remove("setHide");
        document.getElementById("textbox-title").classList.add("setHide");

        if (!/^[a-z\s]*$/.test(texto)) {
            document.getElementById("text-result").textContent = "El mensaje a ENCRIPTAR debe contener solo letras minúsculas y sin acento";
            document.getElementById("text-result").classList.remove("setWarning");
            document.getElementById("text-result").classList.add("setWarning");

            document.getElementById("bPortapapeles").classList.remove("setHide");
            document.getElementById("bPortapapeles").classList.add("setHide");

            textArea.value = '';
            return;
        }
    
        const encriptado = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");
    
        document.getElementById("text-result").textContent = encriptado;
        document.getElementById("bPortapapeles").classList.remove("setHide");
        textArea.value = '';
    }
});
