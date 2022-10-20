import { Request, Response } from "express";
import { IPropertyRequest, IAddressRequest } from "../../interfaces/properties";
import { instanceToPlain } from "class-transformer";
import createPropertyService from "../../services/properties/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
    
    const {address, categoryId, size, value}: IPropertyRequest = req.body;
    const createdProperty = await createPropertyService({value, size, categoryId, address})
    return res.status(201).json(instanceToPlain(createdProperty))
   
};

export default createPropertyController;