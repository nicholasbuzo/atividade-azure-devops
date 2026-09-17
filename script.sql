CREATE TABLE JOGOS (
    ID_JOGO CHAR(4) NOT NULL PRIMARY KEY,
    NOME_JOGO VARCHAR(80),
    GENERO VARCHAR(40),
    PRODUTORA VARCHAR(40),
    DATA_LANCAMENTO DATE
);

INSERT INTO JOGOS (ID_JOGO, NOME_JOGO, GENERO, PRODUTORA, DATA_LANCAMENTO)
VALUES
    ('0001', 'Minecraft',  'Sandbox',       'Mojang',   '2011-11-18'),
    ('0002', 'GTA VI',     'Acao-Aventura', 'Rockstar', '2026-11-19'),
    ('0003', 'God Of War', 'Acao-Aventura', 'Sony',     '2005-03-22'),
    ('0004', 'Valorant',   'FPS',           'Riot',     '2020-06-02'),
    ('0005', 'Terraria',   'Sandbox',       'Re-Logic', '2011-05-16');