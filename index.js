const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.get('/authorization', async (req, res) => {

    const randomNumber = Math.random();

    response = new Promise((resolve) => {
        setTimeout(() => {
            const isAuthorized = randomNumber < 0.98;
            const message = isAuthorized ? "Autorizado" : "Não autorizado";
            resolve({ message, isAuthorized });
        }, (Math.floor(Math.random() * 10) + 1) * 1000);
    }).catch(() => {
        response = { message: "Não autorizado", isAuthorized: false };
    });

    res.send(await response)
})
app.get('/notification', async (req, res) => {
    const randomNumber = Math.random()

    response = new Promise((resolve) => {
        setTimeout(() => {
            const isAuthorized = randomNumber < 0.98;
            resolve({ "message": isAuthorized });
        }, (Math.floor(Math.random() * 10) + 1) * 1000);
    }).catch(() => {
        response = { "message": false };
    });

    res.send(await response)

})

app.listen(port, () => {
    console.log(`App de exemplo esta rodando na porta ${port}`)
})