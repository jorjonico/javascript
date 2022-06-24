let entrada = prompt("¿Queres que te cuente el cuento de la buena pipa?").toLowerCase()

while(entrada != "no quiero"){
    alert("¿NO QUIERES? Yo no te dije " + entrada);
    entrada = prompt("Te dije si... ¿queres que te cuente el cuento de la buena pipa?").toLowerCase();
} alert("perfecto!!!, por que no lo sabía")