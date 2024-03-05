-- Criando banco de dados:
-- create database projeto_integrador

-- Selecionando o banco de dados criado:
-- use projeto_integrador

-- -------------------------------- Criando tabela CADASTRO_DOADOR: ------------------------------------------
/*
create table cadastro_doador (
id smallint PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(48) NOT NULL,
logradouro VARCHAR(48) NOT NULL,
numero VARCHAR(48) NOT NULL,
bairro VARCHAR(48) NOT NULL,
cidade VARCHAR(48) NOT NULL,
email VARCHAR(48) NOT NULL,
senha VARCHAR(48) NOT NULL
);
*/

-- select * from cadastro_doador;


-- -------------------------------- Criando tabela DOADOR: ------------------------------------------
/*
create table doador (
id smallint PRIMARY KEY AUTO_INCREMENT,
fk_id_cadastro_doador smallint NOT NULL,
CONSTRAINT fk_cadastro_doador FOREIGN KEY (fk_id_cadastro_doador) REFERENCES cadastro_doador(id) 
);
*/
-- select * from doador; 

-- -------------------------------- populando tabela CADASTRO_DOADOR: ------------------------------------------
/*
insert into cadastro_doador (nome, logradouro, numero, bairro, cidade, email, senha) values 
							('alex','rua 1', '130', 'Quintas das av','Juiz de fora','alex@email.com','123'),
                            ('João','rua 2', '160', 'Centro','São Paulo','joao@email.com','456'),
                            ('Maria','rua 3', '180', 'Esplanadas','Brasilia','maria@email.com','789'),
                            ('José','rua 4', '100', 'Bandeirantes','Curitiba','jose@email.com','321'),
                            ('Beto','rua 5', '10', 'Jardins','Rio de Janeiro','beto@email.com','654');

select * from cadastro_doador;
*/

-- -------------------------------- populando tabela DOADOR : ------------------------------------------
/*
insert into doador (fk_id_cadastro_doador) values 
							('1'),
                            ('2'),
                            ('3'),
                            ('4'),
                            ('5');

select * from doador; 
*/
-- -------------------------------- Testando relação das tabelas CADASTRO_DOADOR + DOADOR com INNER JOIN ------------------------------------------
/*
select nome,cidade fk_id_cadastro_doador from cadastro_doador
inner join doador
on doador.fk_id_cadastro_doador = cadastro_doador.id

*/

-- -------------------------------- Criando tabela MATERIAL_RECICLADO	: ------------------------------------------
/*
create table material_reciclado (
id smallint PRIMARY KEY AUTO_INCREMENT,
quantidade_latinhas int(100),
quantidade_papelao int(100),	
fk_id_doador smallint NOT NULL,
CONSTRAINT fk_doador FOREIGN KEY (fk_id_doador) REFERENCES doador(id) 
);

select * from material_reciclado;
*/

-- -------------------------------- populando tabela MATERIAL_RECICLADO : ------------------------------------------
/*
insert into material_reciclado (quantidade_latinhas, quantidade_papelao, fk_id_doador) values 
								(10,15,1),
                                (2,4,3),
                                (1,1,1),
                                (6,0,5),
                                (1,5,2),
                                (0,1,4),
                                (0,1,5),
                                (2,2,2),
                                (3,3,3),
                                (12,1,5);

select * from material_reciclado;
*/

-- -------------------------------- Acesso indireto da tabela CADASTRO_DOADOR com MATERIAL_RECICLADO com INNER JOIN ------------------------------------------
/*
select
cadastro_doador.nome,
cadastro_doador.cidade,
material_reciclado.quantidade_latinhas,
material_reciclado.quantidade_papelao
from 
	material_reciclado
join
	doador ON material_reciclado.fk_id_doador = doador.id
join
	cadastro_doador ON doador.fk_id_cadastro_doador = cadastro_doador.id

*/
-- -------------------------------- Criando tabela PONTUACAO: ------------------------------------------
/*
create table pontuacao (
id smallint PRIMARY KEY AUTO_INCREMENT,
pontos_doador_latinhas float,
pontos_doador_papelao float,
pontos_coletor_latinhas float,
pontos_coletor_papelao float

);

select * from pontuacao;

*/


-- -------------------------------- Criando tabela PONTUACAO_DOADOR: ------------------------------------------
/*
create table pontuacao_doador (
id smallint PRIMARY KEY AUTO_INCREMENT,
pontos_latinhas float,
pontos_papelao float,
saldo_atual float,	
fk_id_material_reciclado smallint NOT NULL,
fk_id_pontuacao smallint NOT NULL,
CONSTRAINT fk_material_reciclado FOREIGN KEY (fk_id_material_reciclado) REFERENCES material_reciclado(id),
CONSTRAINT fk_pontuacao FOREIGN KEY (fk_id_pontuacao) REFERENCES pontuacao(id) 
);

select * from pontuacao_doador;

*/


-- -------------------------------- populando tabela PONTUACAO : ------------------------------------------

-- insert into pontuacao (pontos_doador_latinhas, pontos_doador_papelao, pontos_coletor_latinhas,pontos_coletor_papelao) values (10,5,100,50);

-- select * from pontuacao;

-- -------------------------------- Criando uma função para calcular pontuação:  ------------------------------------------

/*
DELIMITER //
CREATE FUNCTION calcular_pontuacao(quantidade_latinhas float, pontos_doador_latinhas float) 
RETURNS FLOAT
DETERMINISTIC
BEGIN
    DECLARE resultado FLOAT;
    SELECT COALESCE(quantidade_latinhas, 1) * COALESCE(pontos_doador_latinhas, 1) INTO resultado 
    LIMIT 1;
    RETURN resultado;
END //
DELIMITER ;

*/

-- Realizando multiplicação do material reciclado com tabela pontuação ---------------------

/*
SELECT 
    material_reciclado.quantidade_latinhas,
    material_reciclado.fk_id_doador,
    pontuacao.pontos_doador_latinhas,
    calcular_pontuacao( material_reciclado.quantidade_latinhas, pontuacao.pontos_doador_latinhas) AS resultado_multiplicacao
FROM 
    material_reciclado
JOIN 
    pontuacao ON material_reciclado.id = pontuacao.id;

*/

-- Chamada da função e armazenamento do resultado em uma variável
-- SET @resultado = calcular_pontuacao();

-- Exibição do resultado
-- SELECT @resultado AS Resultado;

-- update pontuacao_doador set pontos_latinhas = calcular_pontuacao() where id=1;




-- select * from pontuacao_doador;









