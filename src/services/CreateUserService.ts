import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {
    
   
    async execute({ name, email, admin}: IUserRequest) {
        const UsersRepository = getCustomRepository(UsersRepositories);

        if (!email) {
            throw new Error("Email incorreto");
        }

        const userAlreadyExists = await UsersRepository.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("Usuário já existe");
        }

        //salvar usuário
        const user = UsersRepository.create({
            name,
            email,
            admin,
        });

        await UsersRepository.save(user);

        return user;

    }
}

export {CreateUserService}