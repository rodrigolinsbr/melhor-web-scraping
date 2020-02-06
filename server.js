var express = require('express'),
    fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio'),
    app = express();

// Passo 1
app.get('/raspagem', function(req, res) {
    // Passo 2
    url = 'https://www.submarino.com.br/categoria/livros/auto-ajuda?ordenacao=relevance';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
        
            // Objeto que irá armazenar a tabela
            var resultado = [];
        
            // Passo 3
            // Manipulando o seletor específico para montar nossa estrutura
            // Escolhi não selecionar a primeira linha porque faz parte do header da tabela
            // $('#listagem tr:not(:first-child)').each(function(i) {
                $('.product-grid').each(function(i) {
                // Obtendo as propriedades da tabela. 
                // O método .trim() garante que irá remover espaço em branco
                 var titulo = $(this).find('h2').text().trim();
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
})

app.get('/olx', function(req, res) {

    console.log('olx')
    url = 'https://pe.olx.com.br/imoveis/venda/apartamentos';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
        
            // Objeto que irá armazenar a tabela
            var result = [];
        
            // Passo 3
            // Manipulando o seletor específico para montar nossa estrutura
            // Escolhi não selecionar a primeira linha porque faz parte do header da tabela
            // $('#listagem tr:not(:first-child)').each(function(i) {
                $('.section_OLXad-list  ul').each(function(i) {
                    
                // Obtendo as propriedades da tabela. 
                // O método .trim() garante que irá remover espaço em branco
                 var title = $(this).find('.OLXad-list-title').text().trim();
                 var price = $(this).find('.OLXad-list-price').text().trim();
                //  var img = $(this).find('img').text().trim();
                    // orgao = $(this).find('td').eq(1).text().trim(),
                    // valorTotal = $(this).find('td').eq(2).text().trim();
                console.log(price)
                // Inserindo os dados obtidos no nosso objeto
                result.push({
                    title: title,
                    value: price
                });
            });
            res.json({ result });
        }
    })


})

app.listen('8080')
console.log('Executando raspagem de dados na porta 8080...');
exports = module.exports = app;

