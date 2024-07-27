document.addEventListener('DOMContentLoaded', () => {
    const textoEntrada = document.getElementById('textoEntrada');
    const textoSalida = document.getElementById('textoSalida');
    const btnEncriptar = document.getElementById('encriptar');
    const btnDesencriptar = document.getElementById('desencriptar');
    const btnCopiar = document.getElementById('copiar');
    const resultadoVacio = document.getElementById('resultadoVacio');
    const resultadoLleno = document.getElementById('resultadoLleno');

    const llaves = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const encriptar = (texto) => {
        return texto.replace(/[aeiou]/g, letra => llaves[letra]);
    };

    const desencriptar = (texto) => {
        return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => {
            return Object.keys(llaves).find(key => llaves[key] === palabra);
        });
    };

    const mostrarResultado = (texto) => {
        if (texto) {
            resultadoVacio.classList.add('oculto');
            resultadoLleno.classList.remove('oculto');
            textoSalida.value = texto;
        } else {
            resultadoVacio.classList.remove('oculto');
            resultadoLleno.classList.add('oculto');
        }
    };

    const validarEntrada = (texto) => {
        return /^[a-z\s]*$/.test(texto);
    };

    btnEncriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.trim();
        if (validarEntrada(texto)) {
            mostrarResultado(encriptar(texto));
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        }
    });

    btnDesencriptar.addEventListener('click', () => {
        const texto = textoEntrada.value.trim();
        if (validarEntrada(texto)) {
            mostrarResultado(desencriptar(texto));
        } else {
            alert('Por favor, ingrese solo letras minúsculas sin acentos.');
        }
    });

    btnCopiar.addEventListener('click', () => {
        textoSalida.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });

    textoEntrada.addEventListener('input', () => {
        if (textoEntrada.value.trim() === '') {
            mostrarResultado('');
        }
    });
});