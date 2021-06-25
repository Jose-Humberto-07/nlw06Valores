import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/compliment";


@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export {ComplimentsRepositories};