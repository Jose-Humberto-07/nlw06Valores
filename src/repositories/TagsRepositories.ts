import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/tag"



@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export {TagsRepositories};