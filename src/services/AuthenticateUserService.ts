import { getCustomRepository } from "typeorm";

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";



interface IAthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        //verificar se email existe
        const user = await usersRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        //verificar se senha está correta
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }
        //gerar token
        const token = sign({
            email: user.email
        }, "gçldfkgçldfkj9jdflkjfg9o9iojdfj00", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export {AuthenticateUserService};