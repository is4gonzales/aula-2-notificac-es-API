class InscricaoController {
  constructor() {
    this.inscricoes = [];
    this.idAtual = 1;
  }

  store(req, res) {
    const { eventoId, participanteId } = req.body;

    if (!eventoId || !participanteId) {
      return res.status(400).json({
        erro: "eventoId e participanteId são obrigatórios",
      });
    }

    const novaInscricao = {
      id: this.idAtual++,
      eventoId,
      participanteId,
      dataInscricao: new Date(),
      status: "confirmada",
    };

    this.inscricoes.push(novaInscricao);

    res.status(201).json(novaInscricao);
  }

  index(req, res) {
    res.json(this.inscricoes);
  }

  showByEvento(req, res) {
    const { eventoId } = req.params;

    const resultado = this.inscricoes.filter(
      (i) => i.eventoId == eventoId
    );

    res.json(resultado);
  }

  cancelar(req, res) {
    const { id } = req.params;

    const inscricao = this.inscricoes.find((i) => i.id == id);

    if (!inscricao) {
      return res.status(404).json({
        erro: "Inscrição não encontrada",
      });
    }

    inscricao.status = "cancelada";

    res.json(inscricao);
  }
}

module.exports = new InscricaoController();