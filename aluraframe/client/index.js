// SELECIONANDO DO HTML OS CAMPOS.
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

// SELECIONANDO O tBody.
var tBody = document.querySelector('table tBody');

// ADICIONANDO EVENTO DE FORMULÁRIO COM SUBMIT
 document.querySelector('.form').addEventlisterner('submit', function(event) {

//  PREVININDO DE RECARREGAR A PÁGINA QUANDO O FORMULÁRIO FOR ENVIADO | CRIAÇÃO DA TR
    event.preventDefault();
    var tr = document.createElement('tr');

//  PRA CADA CAMPO CRIAR TD | CONTEXTO DE VALOR DE CADA CAMPO | TR ANEXANDO A TD
    campos.forEach(function(campos){
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })

//  CRIANDO A TD | CONTEXTO DE QUANTIDADE MULTIPLICANDO O VALOR | TR ANEXANDO O tdVolume | tBody ANEXANDO A TR
    var tdVolume = document.createElement('td');
    tdVolume.textContent = campo[1].value * campo[2].value;
    tr.appendChild(tdVolume);
    tBody.appendChild(tr);

//  APAGANDO O CAMPO DATA, QUANTIDADE E VALOR.
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

//  CAMPO DA DATA GANHA FOCO.
    campos[0].focus();
   
});
