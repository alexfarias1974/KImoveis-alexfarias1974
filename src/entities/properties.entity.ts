import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { ScheduleUSerProperty } from "./schedules_user_properties.entity";

@Entity("properties")
export class Property{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({default: false})
    sold: boolean

    @Column("decimal", {precision: 12, scale: 2})
    value: number

    @Column("integer")
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address) @JoinColumn()
    address: Address

    @ManyToOne(() => Category)
    category: Category

    @OneToMany(() => ScheduleUSerProperty, scheduleUSerProperty => scheduleUSerProperty.property)
    schedules: ScheduleUSerProperty[]
}
