//Variáveis
var ipt_valor = document.getElementById('id_valor');
var ipt_prazo = document.getElementById('id_prazo');
var ipt_juros = document.getElementById('id_juros');

var resultPrazo = document.getElementById('id_resultPrazo');
var resultJuros = document.getElementById('id_resultJuros');
var resultJurosAcumulados = document.getElementById('id_resultJurosAcumulados');


function calc(){
    // Prazo(meses)
    var prazo = ipt_prazo.valueAsNumber * 12;
    // Juros ao mês
    var jurosAoMes = (((1 + ipt_juros.valueAsNumber)**(1/12)) - 1);
    
    // Amortização
    var amortizacao = ipt_valor.valueAsNumber / prazo;

    var juros = [];
    var total = [];
    var jurosAcumulados = 0;
    for(var i = 0; i < prazo; i++){
        juros[i] = ((ipt_valor.valueAsNumber - (i*amortizacao)) * jurosAoMes);
        total[i] = juros[i] + amortizacao;
        jurosAcumulados = jurosAcumulados + juros[i];
    }

    //let table = document.getElementById("tb");
    let tbody = document.getElementById("tCorpo");

    // Limpando a tabela
    tbody.innerHTML="";

    for(var i=0; i < 5; i++){
        tbody.innerHTML += `<tr><td>${i+1}</td><td>${amortizacao.toFixed(2)}
        </td><td>${juros[i].toFixed(2)}</td><td>${total[i].toFixed(2)}</td></tr>`;
    }
    
    /*for(let i = 0; i< 5; i++){
        let row = table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.textContent = juros[i];
    }*/


    resultPrazo.textContent = prazo;
    resultJuros.textContent = jurosAoMes.toFixed(15);
    resultJurosAcumulados.textContent = jurosAcumulados.toFixed(2);
}