const express = require('express');
const axios = require('axios');
const { PrismaClient } = require('@prisma/client');
const cors = require("cors");

const app = express();
const frontend = 'http://192.168.100.39:3000';

app.use(cors());

const prisma = new PrismaClient();

app.use(express.json());

// Função para registrar ações no log de auditoria
const logAction = async (action, messageId) => {
    try {
        await prisma.auditLog.create({
            data: {
                action,
                messageId,
            },
        });
    } catch (error) {
        console.error('Erro ao registrar log de auditoria:', error);
    }
};

// Rota para criação de mensagens
app.post('/api/guestbook', async (req, res) => {
    const { name, message } = req.body;

    if (!name || !message) {
        return res.status(400).json({ error: 'Nome e mensagem são obrigatórios!' });
    }

    try {
        const newMessage = await prisma.message.create({
            data: {
                name,
                message
            },
        });

        await logAction('Message Created', newMessage.id);

        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar mensagem no banco de dados.' });
    }
});

// Rota para obter mensagens
app.get('/api/guestbook', async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao carregar mensagens.' });
    }
});

// Rota para exclusão de mensagens
app.delete('/api/guestbook/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: 'ID da mensagem é obrigatório para exclusão.' });
    }

    try {
        await prisma.message.delete({
            where: { id: Number(id) },
        });

        await logAction('Message Deleted', Number(id));

        res.status(200).json({ message: 'Mensagem excluída com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir mensagem do banco de dados.' });
    }
});

// Rota para atualização de mensagens
app.put('/api/guestbook', async (req, res) => {
    const { id, name, message } = req.body;

    if (!id || !name || !message) {
        return res.status(400).json({ error: 'ID, nome e mensagem são obrigatórios para atualização.' });
    }

    try {
        await prisma.message.update({
            where: { id },
            data: { name, message },
        });

        await logAction('Message Updated', id);

        res.status(200).json({ message: 'Mensagem atualizada com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar mensagem no banco de dados.' });
    }
});

app.get('/api/presents', async (req, res) => {
    try {
        // Buscar todos os presentes no banco de dados
        const presents = await prisma.weddingPresent.findMany({
            orderBy: { createdAt: 'desc' }, // Ordenar pela data de criação, mais recentes primeiro
        });

        // Verifica se há presentes e retorna
        if (presents.length === 0) {
            return res.status(404).json({ message: 'Nenhum presente encontrado.' });
        }

        res.status(200).json(presents);
    } catch (error) {
        console.error('Erro ao buscar presentes:', error);
        res.status(500).json({ error: 'Erro ao buscar presentes.' });
    }
});

// Inicia o servidor
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
