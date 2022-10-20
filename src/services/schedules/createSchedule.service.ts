import AppDataSource from "../../data-source";
import { ScheduleUSerProperty } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import {IScheduleRequest} from "../../interfaces/schedules"

const createScheduleService = async ({userId, propertyId, date, hour}: IScheduleRequest): Promise<ScheduleUSerProperty> => {
    const scheduleRepository = AppDataSource.getRepository(ScheduleUSerProperty);

    const schedulesDate = await scheduleRepository.findOneBy({
        date,
        hour
    });

    if (date && hour) {
        throw new AppError("This day and time already has an appointment.!")
    }

    if (hour < "08:00:00" || hour > "18:00:00") {
        throw new AppError("Scheduling outside of business hours!")
    }

    const schedule = scheduleRepository.save({
        

        
    })
    await categoryRepository.save(category);

    return category;
};

export default createCategoryService;