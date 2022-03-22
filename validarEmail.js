
function validarEmail(email) {
    var email = cliente.email.value;
    if (email=='') {
        alert('Preencher Email')
        return;
    } 
    if (cliente.mensagem.value =='') {
        alert('Preencher Mensagem')
        return;
    } 


    testarEmail(email);     // chama a função para o teste de validação

    if (valido) document.getElementById('resultado').innerHTML = resultado;
    else {
        resultado = 'Endereço de email inválido'; 
        alert(resultado);
    }      
}

function testarEmail(email) {
    // verificar se termina com ".com"
    if (!email.endsWith('.com')) { 
        // se o email digitado não terminar com ".COM" já retorna invalidado 
        valido = false;
        resultado = 'Endereço de email inválido'; 
        return resultado;
    }
    // e = email sem a categoria do domínio (.com)
    e = email.slice(0, -4);  
    // separar usuario e dominio 
    separaUsuarioDominio(e);    // chama a função que separa o USER e o DOMAIN  
    usuario = lista[0];         // usuario 
    dominio = lista[1];         // dominio
    // verificar tamanho das strings usuario e dominio 
    if (usuario.length < 1 || usuario.length > 32 || dominio.length < 1 || dominio.length > 16 ) {
        // se o tamanho está fora do padrão, já retorna invalidado 
        valido = false;
        resultado = 'Endereço de email inválido'; 
        return resultado;
    } 
    const domainValidos = '1234567890abcdefghijklmnopqrstuvwxyz';
    const userValidos = (domainValidos+'.').toUpperCase(); //tudo maiúscula para comparar

    // validar usuario
    for (i=0; i<usuario.length; i++) {  
        valido = userValidos.includes(usuario[i].toUpperCase()); // testa um a um
        if (!valido) {            // achando um inválido, já retorna a mensagem
            resultado = 'Endereço de email inválido'; 
            return resultado;
        }                
    }
    // validar dominio
    for (i=0; i<dominio.length; i++) {  
        valido = domainValidos.includes(dominio[i]); // testa um a um
        if (!valido) {            // achando um inválido, já retorna a mensagem
            resultado = 'Endereço de email inválido'; 
            return resultado;
        }
    }       
    // Não sendo invalidado
    resultado = `Obrigado pelo contato, ${usuario}!`;
    return valido = true;  
}

function separaUsuarioDominio(e) {
    var i=0;
    var usuario ='';
    var dominio = '';
    while (e[i]!="@") { 
        usuario += e[i];
        i++;
    } 
    var n = i+1;   // para pular o @     
    for (i=n; i<e.length; i++) dominio += e[i];
 // Como o JS não retorna mais de um valor, criar Array e depois separar 
    lista = [usuario, dominio]
    return lista;
}


