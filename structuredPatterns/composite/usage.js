var menuFactory = require("./menu");
var cmdFactory = require("./command");

var menu = menuFactory("Menu", null);
//General Menu
var file = menuFactory("File", null);
var edit = menuFactory("Edit", null);

//File Menu
var nuevo = menuFactory("New", cmdFactory("Hola soy New"));
var open = menuFactory("Open", cmdFactory("Hola soy Open")); 
var close = menuFactory("Close", cmdFactory("Hola soy Close"));
var subEdit = menuFactory("SubEdit", cmdFactory("Hola soy SubEdit"));

//Edit Menu
var copy = menuFactory("Copy", cmdFactory("Hola soy Copy"));
var cut = menuFactory("Cut", cmdFactory("Hola soy Cut")); 
var paste = menuFactory("Paste", cmdFactory("Hola soy Paste"));

menu.subMenu.push(file, edit);
file.subMenu.push(nuevo, open, close, subEdit);
edit.subMenu.push(copy, cut, paste);

/* The composite pattern trata a todos los objetos por igual y tienen una interfaz en comun tanto el padre como los hijos. Se usa generalmente con la estructura de arbol, asi se puede mandar llamar una hoja desde el menu general, el menu rama o incluso desde la misma hoja ya que el conjunto de objetos es igual, desde la jerarquia mas alta hasta la mas baja.
*/
var search = function (menu, nombreMenu) {
    if(menu.name === nombreMenu) {
        return menu.command.ejecutar();
    }
    else {
        menu.subMenu.forEach(function (menu){
            search(menu, nombreMenu);
        }) 
    }
}

search(file, "New");
search(menu, "New");
search(nuevo, "New");
console.log("search edit");
search(edit, "New");

