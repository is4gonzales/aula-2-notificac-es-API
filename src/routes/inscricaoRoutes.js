const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/InscricaoController");

/**
 * @swagger
 * components:
 *   schemas:
 *     Inscricao:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         eventoId:
 *           type: integer
 *         participanteId:
 *           type: integer
 *         dataInscricao:
 *           type: string
 *         status:
 *           type: string
 *           enum: [confirmada, cancelada]
 */

/**
 * @swagger
 * /inscricoes:
 *   post:
 *     summary: Criar inscrição
 *     tags: [Inscricoes]
 *     responses:
 *       201:
 *         description: Inscrição criada
 */
router.post("/", (req, res) => InscricaoController.store(req, res));

/**
 * @swagger
 * /inscricoes:
 *   get:
 *     summary: Listar todas as inscrições
 *     tags: [Inscricoes]
 *     responses:
 *       200:
 *         description: Lista de inscrições
 */
router.get("/", (req, res) => InscricaoController.index(req, res));

/**
 * @swagger
 * /inscricoes/evento/{eventoId}:
 *   get:
 *     summary: Listar inscrições por evento
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: eventoId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista filtrada
 */
router.get("/evento/:eventoId", (req, res) =>
  InscricaoController.showByEvento(req, res)
);

/**
 * @swagger
 * /inscricoes/{id}/cancelar:
 *   patch:
 *     summary: Cancelar inscrição
 *     tags: [Inscricoes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Inscrição cancelada
 */
router.patch("/:id/cancelar", (req, res) =>
  InscricaoController.cancelar(req, res)
);

module.exports = router;