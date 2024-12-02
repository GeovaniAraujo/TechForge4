"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviadorDeEmails = exports.ValidadorDeContato = void 0;
class ValidadorDeContato {
    validar(contato) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(contato);
    }
}
exports.ValidadorDeContato = ValidadorDeContato;
class EnviadorDeEmails {
    constructor(validador) {
        this.validador = validador;
    }
    enviarEmail(contato) {
        if (this.validador.validar(contato)) {
            console.log(`Email enviado para: ${contato}`);
        }
        else {
            console.log("Contato inválido!");
        }
    }
}
exports.EnviadorDeEmails = EnviadorDeEmails;
