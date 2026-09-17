const express = require('express');
const appInsights = require('applicationinsights');

// Configuração do Application Insights
if (process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    appInsights.setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
        .setAutoDependencyCorrelation(true)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true, true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .setUseDiskRetryCaching(true)
        .start();
    console.log("App Insights configurado.");
} else {
    console.log("App Insights connection string não encontrada.");
}

const sql = require('mssql');
const app = express();
const port = process.env.PORT || 8080;

// Configuração do Banco de Dados (Os alunos devem preencher as variáveis no Azure WebApp)
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, // Ex: meuserver.database.windows.net
    database: 'backloggddb',
    options: {
        encrypt: true, // Necessário para Azure SQL
        trustServerCertificate: false
    }
};

app.get('/', (req, res) => {
    res.send('<h1>Atividade DevOps - Azure CI/CD e App Insights!</h1><p>Deploy realizado com sucesso.</p><p><a href="/tema">Ver dados do Banco</a></p>');
});

app.get('/tema', async (req, res) => {
    try {
        // ALUNOS: Usem a configuração dbConfig para conectar no banco e fazer o SELECT na tabela do tema escolhido!
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT * FROM JOGOS`; // ALTERAR AQUI!
        
        res.json(result.recordset);
    } catch (err) {
        console.error("Erro ao conectar no banco:", err);
        res.status(500).send("Erro ao buscar os dados: " + err.message);
    }
});

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
});
