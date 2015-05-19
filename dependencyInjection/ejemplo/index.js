var diContainerFactory = require('jimenez-di-container');
var di = diContainerFactory();

var alumnoFactory = require('./alumno');
var iteratorFactory = require('./iterator');

var arr = [];
arr.push(alumnoFactory("monse", "jimenez", 8));
arr.push(alumnoFactory("lau", "mendez", 4));
arr.push(alumnoFactory("lupe", "martinez", 7));

di.register('iterator', iteratorFactory(arr));//cuando vea una variable iterator,                                                       mandarle..registra dependencia, a todas                                                 las clases con array le manda este array

di.factory('grupo', require('./grupo')); //tiene dependencia en iterator, registra factory


var grupo = di.get('grupo');//instancia del grupo

grupo.imprimir();