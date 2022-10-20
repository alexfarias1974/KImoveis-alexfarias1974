import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./user.entity";

@Entity("categories")
export class Category{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({unique: true})
    name: string

    @OneToMany(() => Property, property => property.category)
    category: Category[]
}