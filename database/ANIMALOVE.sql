-- DROP DATABASE ANIMALOVE;

CREATE DATABASE ANIMALOVE;

USE ANIMALOVE;

CREATE TABLE ANIMAIS (
    ID INT PRIMARY KEY NOT NULL,
    FOTO BLOB,
    NOME VARCHAR(100),
    DESCRICAO VARCHAR(500),
    IDADE VARCHAR(30),
    COMPORTAMENTO VARCHAR(500),
    HISTORIA VARCHAR(500),
    HISTORICO_DOENCAS VARCHAR(500),
    VACINAS VARCHAR(500),
    VACINAS_PENDENTES VARCHAR(500),
    ALIMENTACAO VARCHAR(200),
    OUTROS VARCHAR(500),
    ATIVO BOOLEAN
);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (1, NULL, 'Cachorro', 'Cachorro dócil e brincalhão', '2 anos', 'Alegre e sociável', 'Foi resgatado da rua', '', 'Vacina V10', 'Vacina contra raiva', 'Ração balanceada', 'Nenhum', true);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (2, NULL, 'Gato', 'Gato tranquilo e carinhoso', '3 anos', 'Calmo e independente', 'Foi abandonado e resgatado', 'Problemas de pele', 'Vacina V4', 'Vacina contra leucemia felina', 'Ração especial', 'Nenhum', true);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (3, NULL, 'Coelho', 'Coelho dócil e sociável', '1 ano', 'Amigável e curioso', 'Foi entregue por um criador', '', 'Vacina VH', 'Vacina contra mixomatose', 'Vegetais e ração especial', 'Nenhum', true);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (4, NULL, 'Pássaro', 'Pássaro colorido e cantante', '6 meses', 'Alegre e cantante', 'Foi resgatado de maus tratos', '', 'Vacina Polivitamínica', '', 'Sementes e frutas', 'Gaiola espaçosa', true);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (5, NULL, 'Tartaruga', 'Tartaruga calma e curiosa', '5 anos', 'Pacífica e observadora', 'Foi adotada de um abrigo', '', '', '', 'Vegetais e ração especial', 'Aquário grande', true);

INSERT INTO ANIMAIS (ID, FOTO, NOME, DESCRICAO, IDADE, COMPORTAMENTO, HISTORIA, HISTORICO_DOENCAS, VACINAS, VACINAS_PENDENTES, ALIMENTACAO, OUTROS, ATIVO)
VALUES (6, NULL, 'Hamster', 'Hamster ativo e explorador', '8 meses', 'Energético e curioso', 'Foi adotado de uma petshop', '', '', '', 'Ração para hamster', 'Gaiola com rodinha', true);


CREATE TABLE CONTATO (
    NOME VARCHAR(100),
    EMAIL VARCHAR(100),
    MENSAGEM VARCHAR(600)
);