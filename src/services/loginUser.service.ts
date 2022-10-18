import { IUserLogin } from "../interfaces/users";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { compare, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const loginUserService = async({email, password}: IUserLogin) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({
        email: email
    });

    if (!user) {
        throw new Error("Wrong email/password");
    }

    const passwordMatch = compareSync(password, user.password);
    
    if (!passwordMatch) {
        throw new Error("Wrong email/password");
    }
    const token = jwt.sign(
        {isAdm: user.isAdm},
        process.env.SECRET_KEY as string,
        {
            expiresIn: '1d',
            subject: user.id
        }
    )
    return token;
}

export default loginUserService;
