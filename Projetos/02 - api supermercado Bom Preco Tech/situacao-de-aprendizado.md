Situação de Aprendizagem

Título: API de Cadastro e Consulta de Produtos do Supermercado Bom Preço Tech

O Supermercado Bom Preço Tech está em fase de modernização e precisa digitalizar seu sistema de cadastro e consulta de produtos. Atualmente, o controle é feito manualmente, o que gera erros e perda de informações.
A equipe de TI do supermercado decidiu criar uma API em Node.js para gerenciar os produtos de forma mais ágil e segura, permitindo o cadastro, consulta, atualização e exclusão de itens. Além disso, a API deve oferecer filtros de consulta usando req.query, possibilitando que os clientes internos (funcionários) encontrem rapidamente produtos por nome, categoria ou faixa de preço.
Você foi contratado como desenvolvedor para liderar a implementação dessa solução.

Desafio: O sistema deve permitir o cadastro de produtos com as seguintes informações obrigatórias:

id (identificação única)
nome (nome do produto)
preço (valor unitário, em reais)
categoria (alimentos, bebidas, limpeza, higiene, etc.)

Sua tarefa será desenvolver uma API RESTful que atenda aos seguintes requisitos:

Listar todos os produtos.
Possibilitar filtragem por nome, categoria ou faixa de preço usando req.query.

Consultar um produto específico pelo id.
Cadastrar um novo produto, garantindo que não haja duplicidade.
Atualizar os dados de um produto existente (nome, preço ou categoria).
Excluir um produto pelo id.
