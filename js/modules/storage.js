function validaSecao(chaveLogin){
    let usuarioLogado = localStorage.getItem(chaveLogin);
    if(usuarioLogado == null ){
        return false
    }else{
        usuarioLogado = JSON.parse(usuarioLogado);
        return true
    }
}

function usuarioLogado(chaveLogin){
    return JSON.parse(localStorage.getItem(chaveLogin));
}

function encerarSecao(){
    localStorage.removeItem("playerLogadoOE");
}

function cadastrarUsuario(loginDigitado, senhaDigitada, chaveUsuariosCadastrados){
    let usuariosCadastrados = localStorage.getItem(chaveUsuariosCadastrados);
    if(usuariosCadastrados == null){
        usuariosCadastrados = []
    }else{
        usuariosCadastrados = JSON.parse(usuariosCadastrados);
    }

    usuariosCadastrados.push({id: Date.now(), login: loginDigitado, senha: senhaDigitada});

    localStorage.setItem(chaveUsuariosCadastrados);

    return "Usuario cadastrado com sucesso!";

}

function validaCadastro(loginDigitado, senhaDigitada, chaveUsuariosCadastrados){
    let usuariosCadastrados = localStorage.getItem(chaveUsuariosCadastrados);
    if(usuariosCadastrados == null){
        usuariosCadastrados = []
    }else{
        usuariosCadastrados = JSON.parse(usuariosCadastrados);
    }

    if(loginDigitado == "" || senhaDigitada == ""){
        return false
    }else{

        const cadastroDuplicado = usuariosCadastrados.some(function(usuario){
            return usuario.login != loginDigitado  
        })
        
        return cadastroDuplicado;
    }
}

export default{
    validaSecao,
    usuarioLogado,
    encerarSecao,
    cadastrarUsuario,
    validaCadastro
}