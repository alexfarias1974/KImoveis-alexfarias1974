import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { ScheduleUSerProperty } from "../../entities/schedules_user_properties.entity";
import AppError from "../../errors/appError";

const listSchedulesInPropertyService = async (id: string) => {
    const propertyRepository = AppDataSource.getRepository(Property)
    const scheduleUSerPropertyRepository = AppDataSource.getRepository(ScheduleUSerProperty)

    const schedulesProperty = await propertyRepository.findOne({
        where: {
            id,
        },
        relations: {
            schedules: true,
            // eager: true,
        },
    });

    if (!schedulesProperty) {
        throw new AppError("Property not found", 404)
    }

    return schedulesProperty;
}

export default listSchedulesInPropertyService;