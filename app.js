
const textInput = document.getElementById('textInput');

        function clearPlaceholder() {
            textInput.placeholder = "";
        }

        function setPlaceholder() {
            if (textInput.value === "") {
                textInput.placeholder = "Coloca tu texto aquí";
            }
        }

 function copyText() {
            let textArea = document.getElementById("textarea");
            textInput.value = "";
            document.getElementById("textInput").value = textArea.value
        }  
function encripText() {
            let text = document.getElementById("textInput").value;
            let encripText = text
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            document.getElementById("textarea").value = encripText;
        }
function descripText() {
            let text = document.getElementById("textInput").value;
            let descripText = text
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            document.getElementById("textarea").value = descripText;
        }
