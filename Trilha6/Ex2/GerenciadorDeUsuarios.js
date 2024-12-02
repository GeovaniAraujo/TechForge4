"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerenciadorDeUsuarios = exports.NotificacaoEmail = void 0;
class NotificacaoEmail {
    enviar(email) {
        console.log(`Notificação enviada para o email: ${email}`);
    }
}
exports.NotificacaoEmail = NotificacaoEmail;
class GerenciadorDeUsuarios {
    constructor(notificacao) {
        this.usuarios = [];
        this.notificacao = notificacao;
    }
    criarUsuario(email) {
        this.usuarios.push(email);
        this.notificacao.enviar(email);
    }
    listarUsuarios() {
        return this.usuarios;
    }
}
exports.GerenciadorDeUsuarios = GerenciadorDeUsuarios;
