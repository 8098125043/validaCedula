
function validar() {
 
    var cedula = document.getElementById('cedula').value;
    
    
    cedula = cedula.replace(/\s+/g, '').replace(/-/g, '');
    
   
    if (cedula.length !== 11) {
        alert('La cédula debe contener 11 dígitos.');
        return;
    }
    
    
    if (!/^\d{11}$/.test(cedula)) {
        alert('No se aceptan letras y/o caracteres especiales');
        return;
    }
    
   
    var suma = 0;
    for (var i = 0; i < 10; i++) {
        var digito = parseInt(cedula[i]);
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito -= 9;
            }
        }
        suma += digito;
    }
    
    var digitoVerificador = 10 - (suma % 10);
    
   
    if (digitoVerificador === parseInt(cedula[10])) {
        alert('su cedula esta correcta');
    } else {
        alert('Cédula introducida es invalida, vuelva a probar');
    }
}
