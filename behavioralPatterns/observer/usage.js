var semaforo = require('./semaforo');

var s = semaforo();

s.on('antesDeCambiar', function(actual) {
    console.log('Cuidado, el semaforo esta en ' + actual + ' y esta a punto de cambiar');
});

s.on('despuesDeCambiar', function(actual) {
    console.log('**************************');
});
s.on('antesDeCambiar', function(actual) {
    console.log('__________________________');
});

s.on('despuesDeCambiar', function(actual) {
    console.log('Cuidado, el semaforo acaba de cambiar a ' + actual);
});

s.cambiarEstado();
s.cambiarEstado();
s.cambiarEstado();