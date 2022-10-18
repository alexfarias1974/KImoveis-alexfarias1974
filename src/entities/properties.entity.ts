import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./addresses.entity";

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
}
