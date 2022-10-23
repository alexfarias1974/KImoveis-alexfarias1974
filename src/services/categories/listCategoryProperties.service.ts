import { FindOperator } from "typeorm";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import AppError from "../../errors/appError";

const listCategoryPropertiesService = async(id: string) => {
    const categoryRepository = AppDataSource.getRepository(Category);

    const categoryProperties = await categoryRepository.findOne({
        where: {
            id,
        },
        relations: {
            properties: true
        }
    });

    if (!categoryProperties) {
        throw new AppError("Property not found", 404)
    }

    return categoryProperties;

}

export default listCategoryPropertiesService;
