import AppDataSource from "../../data-source";
import { ICategoryRequest } from "../../interfaces/categories";
import AppError from "../../errors/appError";
import { Category } from "../../entities/categories.entity";

const createCategoryService = async ({name}: ICategoryRequest): Promise<Category> => {
    const categoryRepository = AppDataSource.getRepository(Category);

    const categories = await categoryRepository.find();

    const categoryAlreadyExists = categories.find(category => category.name === name);

    if (categoryAlreadyExists) {
        throw new AppError("category already exists!")
    }

    const category = categoryRepository.create({
        name,
        
    })
    await categoryRepository.save(category);

    return category;
};

export default createCategoryService;