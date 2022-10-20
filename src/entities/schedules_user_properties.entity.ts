import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./user.entity";

@Entity("schedules_user_properties")
export class ScheduleUSerProperty{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "date"})
    date: string

    @Column({type: "time"})
    hour: string

    @ManyToOne(() => Property)
    property: Property

    @ManyToOne(() => User)
    user: User
}
