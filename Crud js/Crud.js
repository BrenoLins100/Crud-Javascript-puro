

function consultaNoBanco(){

    var insereNome = document.querySelector("#inputNome").value;
    var insereProf = document.querySelector("#inputProf").value;
    var insereCarga = document.querySelector("#inputCarga").value;
    

    var btns = document.querySelectorAll('.btn');

    for(let i =0; i <btns.length; i++){
        btns[i].style.margin = "3px";
        btns[i].style.padding = "5px";
        btns[i].style.borderRadius = "3px";
        btns[i].style.outline = "none";
        btns[i].style.border = "2px solid #545454";
    }

    //console.log(insereNome)
    

    return {data:[ {nome: ""+insereNome, professor: ""+insereProf, carga:+insereCarga, botoes: "<button class='btn' onclick='alterar2(this)' >Alterar</button> <button class='btn' onclick='excluir(this)' >Excluir</button> <button style='visibility:hidden;' class='btn' class='btnConfirma' onclick='confirmar(this)'>Confirmar alteração</button>"},
                ] 
        
    };
}

function alterar2(obj){

    //obj é o button e com o parentNode.parentNode eu seleciono o elemento pai que é o tr
    var dado = obj.parentNode.parentNode;
    
    //pegando o conteudo do campo nome na celula da tabela
    var nome = document.querySelector("#nome").value = dado.cells[0].innerHTML;
    var prof = document.querySelector("#prof").value = dado.cells[1].innerHTML;
    var carga = document.querySelector("#carga").value = dado.cells[2].innerHTML;

    var inputNome = document.querySelector("#inputNome");
    var inputProf = document.querySelector("#inputProf");
    var inputCarga = document.querySelector("#inputCarga");

    inputNome.value = nome;
    inputProf.value = prof;
    inputCarga.value = carga;

    //trava o botao insererir:
    var btnInsere = document.querySelector("#btnInsere");

    btnInsere.style.visibility = "hidden";   

    //desbloqueia o botao confirmar
    //childNodes[x] mostra a posicao dos nós filhos
    btnConfirmar = obj.parentNode.childNodes[4];
    btnConfirmar.style.visibility = "Visible";
    
    

}

function confirmar(obj){

    //obj == button, button.parentNode = td button.parentNode.parentNode == tr

    // acessa a tr
    var linhaTabela = obj.parentNode.parentNode;
    

    var novoNome = document.querySelector("#inputNome").value;
    var novoProf = document.querySelector("#inputProf").value;
    var novoCarga = document.querySelector("#inputCarga").value;

    //só adiciona novo valor na <td> com o createTextNode
    var insereNovoNome = document.createTextNode(novoNome);
    var insereNovoProf = document.createTextNode(novoProf);
    var insereNovoCarga = document.createTextNode(novoCarga);

    //acessa os <td>
    var linhaNome = linhaTabela.childNodes[0];
    var linhaProf = linhaTabela.childNodes[1];
    var linhaCarga = linhaTabela.childNodes[2];

    //acessa o conteudo do <td>
    var conteudoLinhaNome = linhaNome.childNodes[0];
    var conteudoLinhaProf = linhaProf.childNodes[0];
    var conteudoLinhaCarga = linhaCarga.childNodes[0];

    //substitui os valores da <td>
    conteudoLinhaNome.parentNode.replaceChild(insereNovoNome, conteudoLinhaNome);
    conteudoLinhaProf.parentNode.replaceChild(insereNovoProf, conteudoLinhaProf);
    conteudoLinhaCarga.parentNode.replaceChild(insereNovoCarga, conteudoLinhaCarga);

    //limpa os inputs ao inserir valores
    document.querySelector("#inputNome").value = null;
    document.querySelector("#inputProf").value = null;
    document.querySelector("#inputCarga").value = null;

     //ativa botao insererir:
     var btnInsere = document.querySelector("#btnInsere");
     btnInsere.style.visibility = "Visible";   

    //bloqueia o botao confirmar
    //childNodes[x] mostra a posicao dos nós filhos
    btnConfirmar = obj.parentNode.childNodes[4];
    btnConfirmar.style.visibility = "hidden";
    

}
    
function excluir(obj2){

    var tBody = obj2.parentNode.parentNode.parentNode;
    var linhaTabela = obj2.parentNode.parentNode;

    tBody.removeChild(linhaTabela);

    //limpa os inputs
    document.querySelector("#inputNome").value = null;
    document.querySelector("#inputProf").value = null;
    document.querySelector("#inputCarga").value = null;

    //evitar bugar o botao inserir

    var btnInsere = document.querySelector("#btnInsere");

    if(btnInsere.style.visibility == "hidden"){
        btnInsere.style.visibility = "visible"
    }else{
        btnInsere.style.visibility == "hidden"
    }
}

function montarForm(){

    var btnInsere = document.querySelector("#btnInsere");
    btnInsere.style.position = "relative";
    btnInsere.style.left = "10px";
    btnInsere.style.width = "175px";
    btnInsere.style.margin = "3px";
    btnInsere.style.padding = "5px";
    btnInsere.style.borderRadius = "3px";
    btnInsere.style.outline = "none";
    btnInsere.style.border = "2px solid #545454";


    document.body.style.fontFamily = "arial";

    var form = document.createElement("form");
    form.style.margin = "30px 0";
    form.style.display = "flex";
    form.style.justifyContent = "flexStart";
    form.style.flexWrap = "wrap";

    var labelNome = document.createElement("label");
    var labelProf= document.createElement("label");
    var labelCarga = document.createElement("label");

    labelNome.innerHTML = "Nome:";
    labelProf.innerHTML = "Prof:";
    labelCarga.innerHTML = "Carga:";

    var inputNome = document.createElement("input");
    inputNome.setAttribute("id", "inputNome");

    var inputProf= document.createElement("input");
    inputProf.setAttribute("id", "inputProf");

    var inputCarga = document.createElement("input");
    inputCarga.setAttribute("id", "inputCarga");
    inputCarga.setAttribute("type", "number");
    

    labelNome.appendChild(inputNome);
    labelProf.appendChild(inputProf);
    labelCarga.appendChild(inputCarga);


    form.appendChild(labelNome);
    form.appendChild(labelProf);
    form.appendChild(labelCarga);
    


    document.body.appendChild(form);



    document.body.appendChild(btnInsere);

    var inputs = document.querySelectorAll("input");

    for(let i = 0; i < inputs.length; i++){
        inputs[i].style.margin = "10px";
        inputs[i].style.padding = "8px";
        inputs[i].style.borderRadius = "3px";
        inputs[i].style.outline = "none";
        inputs[i].style.border = "2px solid #545454";
        inputs[i].style.display = "block";
    }  
}

function montarTabela(){

    var table =  document.createElement("table");
    var thead =  document.createElement("thead");
    var trHead = document.createElement("tr");
    var thNome = document.createElement("th");
    var thProf = document.createElement("th");
    var thCarga = document.createElement("th");
    var thBotoes = document.createElement("th");


    thNome.innerHTML = "Nome";
    thProf.innerHTML = "Professor";
    thCarga.innerHTML = "Carga";
    thBotoes.innerHTML = "Ações";
    var tbody = document.createElement("tbody");



        var trBody = document.createElement("tr");

        var tdNome = document.createElement("td");
        tdNome.setAttribute("class", "nome");

        var tdProf = document.createElement("td");
        tdProf.setAttribute("class", "prof");

        var tdCarga = document.createElement("td");
        tdCarga.setAttribute("class", "carga");

        var tdBotoes = document.createElement("td");
        tdBotoes.setAttribute("class", "botoes");


        trBody.setAttribute("class", "linhaTabela");


        trBody.appendChild(tdNome);
        trBody.appendChild(tdProf);
        trBody.appendChild(tdCarga);
        trBody.appendChild(tdBotoes);
        
        //estilizar
        table.style.border = "2px solid #545454";
        table.style.borderRadius = "3px";
        table.style.overflow = "hidden";
        table.style.width = "80%";
        tbody.style.background = "#7bed9f";
    
        trHead.appendChild(thNome);
        trHead.appendChild(thProf);
        trHead.appendChild(thCarga);
        trHead.appendChild(thBotoes);
        thead.appendChild(trHead);
        table.appendChild(tbody);
        table.appendChild(thead);

        table.style.margin = "100px auto";
        document.body.style.fontFamily = "Arial, sans-serif";
        thead.style.backgroundColor = "lightblue";

        var btnInsere = document.querySelector("#btnInsere")

        btnInsere.style.maxWidth = "100px";

        document.body.appendChild(table);
}


function inserir(){

        var tbody = document.querySelector("tbody");

        var trBody = document.createElement("tr");
        trBody.setAttribute("class", "linhaTabela");

        var tdNome = document.createElement("td");
        tdNome.setAttribute("id", "nome");

        var tdProf = document.createElement("td");
        tdProf.setAttribute("id", "prof");

        var tdCarga = document.createElement("td");
        tdCarga.setAttribute("id", "carga");

        var tdBotoes = document.createElement("td");
        tdBotoes.setAttribute("id", "botoes");


        //consulta o banco para inserir na tabela
        var dados = consultaNoBanco().data;
        for (let i = 0; i < dados.length; i++){
            //verifica se os campos do inputs que inserem no banco estão vazios
            if(dados[i].nome == "" || dados[i].professor == "" || dados[i].carga == ""){
                alert("um ou mais campos não podem ficar vazios");
            }else{
                tdNome.innerHTML = dados[i].nome
                tdProf.innerHTML = dados[i].professor
                tdCarga.innerHTML = dados[i].carga
                tdBotoes.innerHTML = dados[i].botoes;
                trBody.appendChild(tdNome);
                trBody.appendChild(tdProf);
                trBody.appendChild(tdCarga);
                trBody.appendChild(tdBotoes);
                tbody.appendChild(trBody);

                //limpa os inputs ao inserir valores
                document.querySelector("#inputNome").value = null;
                document.querySelector("#inputProf").value = null;
                document.querySelector("#inputCarga").value = null;
            }
            
               
        }
        
        
}



