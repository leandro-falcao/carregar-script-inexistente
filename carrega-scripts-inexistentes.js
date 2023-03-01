let scripts = ['caminho-file.js', 'novo-script.js', 'script-test.js', 'https://code.jquery.com/jquery-3.6.3.min.js'];

// vamos verificar se cada script do array está carregado
scripts.forEach((el)=>{
  if (!document.querySelector(`script[src=" ${el} "]`)) {
    // Cria o elemento script e definir o caminho(src)
    let scriptElement = document.createElement('script');
    scriptElement.src = el;

    // Adiciona cada escript no head da pagina
    document.head.appendChild(scriptElement);
  }
});
