export declare class Bcrypt {
    criptografarSenha(senha: string): Promise<string>;
    compararSenhas(senhaDigitada: string, senhaBanco: string): Promise<boolean>;
}
