/* function rot13(str) {
  return str.replace(/[A-Z]/g, c =>
    String.fromCharCode((c.charCodeAt(0) - 65 + 13) % 26 + 65)
  );
} */
/* 
charCodeAt(0) obtiene el código ASCII de la letra.

code - 65 convierte A-Z a 0-25.

+13 aplica el desplazamiento ROT13.

%26 evita salir del alfabeto.

+65 vuelve al rango ASCII de A-Z.

fromCharCode convierte el número nuevamente a letra.
*/