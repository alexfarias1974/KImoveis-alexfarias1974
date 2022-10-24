import AppDataSource from "../../data-source";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import AppError from "../../errors/appError";
import { Property } from "../../entities/properties.entity";
import { Category } from "../../entities/categories.entity";
import { Address } from "../../entities/addresses.entity";

const createPropertyService = async ({value, size, categoryId, address}: IPropertyRequest): Promise<Property> => {
    const propertyRepository = AppDataSource.getRepository(Property);
    const categoryRepository = AppDataSource.getRepository(Category);
    const addressRepository = AppDataSource.getRepository(Address);

    const categories = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!categories) {
        throw new AppError("Category is not found", 404)
    }

    const addressAlreadyExists = await addressRepository.findOne({
        where:{
            district: address.district
        }
    })

    if (addressAlreadyExists) {
        throw new AppError("address already exists!")
    }

    if (address.state.length > 2) {
        throw new AppError("state must be 2 characters")
    }
    
    if (address.zipCode.length > 8) {
        throw new AppError("zipcode must be 8 characters")
    }

    const newAddressObject: IAddressRequest = {
        district: address.district,
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state
    }

    const newAddress = await addressRepository.save(newAddressObject);

    const property = await propertyRepository.save({
        value,
        size,
        category: categories,
        address: newAddress
        })
        
    return property;
};

export default createPropertyService;