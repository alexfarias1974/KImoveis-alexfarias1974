import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { ScheduleUSerProperty } from "../../entities/schedules_user_properties.entity";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/appError";
import {IScheduleRequest} from "../../interfaces/schedules"

const createScheduleService = async ({userId, propertyId, date, hour}: IScheduleRequest) => {
    const scheduleRepository = AppDataSource.getRepository(ScheduleUSerProperty);
    const idUserRepository = AppDataSource.getRepository(User);
    const idPropertyRepository = AppDataSource.getRepository(Property)

    const usersId = await idUserRepository.findOneBy({
        id: userId
    })

    if(!usersId){
        throw new AppError("User not found", 404)
    }

    const propertiesId = await idPropertyRepository.findOneBy({
        id: propertyId
    })

    if(!propertiesId){
        throw new AppError("User not found", 404)
    }

    const dateSchedule = new Date(`${date} ${hour}`)
    const weekDay = dateSchedule.getDay()
    const businessHours = dateSchedule.getHours()
    const businessMinutes = dateSchedule.getMinutes()
    
    const schedulesDate = await scheduleRepository.findOneBy({
        date,
        hour
    });

    if (schedulesDate) {
        throw new AppError("This day and time already has an appointment.!")
    }

    if ((businessHours < 8 || businessHours >= 18) && businessMinutes !== 0) {
        throw new AppError("Scheduling outside of business hours!")
    }
        
    if (weekDay == 0 || weekDay == 6) {
        throw new AppError("We only work on weekdays")
    }

    const schedule = scheduleRepository.create({
        user: usersId.id,
        property: propertiesId.id,
        date,
        hour        
    })

    await scheduleRepository.save(schedule);

    return {message: "Schedule created!"};
};

export default createScheduleService;