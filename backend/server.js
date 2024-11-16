const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes (json, urlencoded)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route pour afficher le formulaire (par exemple, si tu veux afficher une page HTML)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Route pour gérer la soumission du formulaire
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Configuration de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail', // ou un autre service comme Outlook, etc.
        auth: {
            user: 'mariaintweb@gmail.com',
            pass: 'intweb2024',
        },
    });

    const mailOptions = {
        from: email,
        to: 'mariaintweb@gmail.com', // Ton adresse email de réception
        subject: `Message de ${name}`,
        text: message,
    };

    // Envoi de l'email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Erreur lors de l\'envoi du message.');
        }
        res.status(200).send('Message envoyé avec succès!');
    });
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
