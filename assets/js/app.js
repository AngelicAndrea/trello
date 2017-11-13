// primera parte de añadir una lista
var section = document.createElement("section");
section.setAttribute("id","container");

var label = document.createElement("label");
label.setAttribute("id","textLabel");

var texto = document.createTextNode("Añadir una lista...");

document.body.appendChild(section); 

// segunda parte al momento de añadir una lista.
var div = document.createElement("div");
div.setAttribute("id","container-3");

var input = document.createElement("input");
input.setAttribute("id","titulo");
input.setAttribute("placeholder","Añadir una lista...")

var boton = document.createElement("button");
var guardar = document.createTextNode("Guardar");
boton.setAttribute("id","boton");

var icono = document.createElement("i");
icono.classList.add("fa","fa-times");

section.appendChild(label);
label.appendChild(texto);
boton.appendChild(guardar);



function trello(){
    //el div es el padre de todos
    div.appendChild(input);
    div.appendChild(boton);
    div.appendChild(icono);
   

    section.appendChild(div);   

    label.style.display= "none"; // desaparezca al momento de hacer click
    boton.addEventListener("click",anadir);
}
var llamarFunction = document.getElementById("textLabel"); // llamo a la lista.

llamarFunction.addEventListener("click",trello);

function anadir(){// tarjeta de añadir
    //rescato el valor de input anteior
    var nuevoText = document.getElementById("titulo").value;//llamo el valor de input
    var divNuevo = document.createElement("div");// creo un div que contenga la función 
    divNuevo.setAttribute("id","divpequeño");//atributo para arreglar en css

    // cree un div grande en donde contenga toda esta función
    var divGrande = document.createElement("div");
    divGrande.setAttribute("id","container-grande");

    //se convierte en titulo el input anterior 
    var newLabel = document.createElement("label");//el label en donde se guarda lo rescatado en input
    var titulo = document.createTextNode(nuevoText);//el input se transforma en texto.
    newLabel.setAttribute("id","newLabel");

    //el label en donde recupero el texto del textarea
    var labelDos = document.createElement("label")// contendra el texto de textarea.
    labelDos.setAttribute("id","newtext");

    var textarea = document.createElement("textarea");//información del textarea.
    textarea.setAttribute("id","titulo2");
    // Boton añadir 
    var btn = document.createElement("a");// es un link ya que es una forma simple.
    btn.setAttribute("href","#");// para que no me redicciona a ninguna parte.
    btn.setAttribute("id","btn");// para arreglar en css.
    var texto = document.createTextNode("añadir tarjeta");

    var icono2 = document.createElement("i");
    icono2.classList.add("fa","fa-times");

    //llamar a los hijos:
    btn.appendChild(texto);
    newLabel.appendChild(titulo);//el texto de input pasa a ser hijo newLabel.
    divNuevo.appendChild(newLabel);
    divGrande.appendChild(labelDos);
    divNuevo.appendChild(textarea);
    divNuevo.appendChild(btn);
    divNuevo.appendChild(icono2);
    
    


    divGrande.appendChild(divNuevo);
    section.appendChild(divGrande);
        
}


//tercer cuadrado un div y un label.value -textarea-button y el icono.