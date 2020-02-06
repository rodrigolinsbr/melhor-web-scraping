



// Passo 1

    // Passo 2
    url = 'https://pe.olx.com.br/imoveis/venda/apartamentos';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
        
            // Objeto que irá armazenar a tabela
            var resultado = [];
        
            // Passo 3
            // Manipulando o seletor específico para montar nossa estrutura
            // Escolhi não selecionar a primeira linha porque faz parte do header da tabela
            // $('#listagem tr:not(:first-child)').each(function(i) {
                $('.section_listing').each(function(i) {
                // Obtendo as propriedades da tabela. 
                // O método .trim() garante que irá remover espaço em branco
                 var titulo = $(this).find('list').text().trim();
                //  var img = $(this).find('img').text().trim();
                    // orgao = $(this).find('td').eq(1).text().trim(),
                    // valorTotal = $(this).find('td').eq(2).text().trim();
                console.log(titulo)
                // Inserindo os dados obtidos no nosso objeto
                // resultado.push({
                //     codigo: codigo,
                //     orgao: orgao,
                //     total: valorTotal
                // });
            });
        }
    })
