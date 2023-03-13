import { IsNotEmpty, IsPositive, IsString } from "class-validator"

export class CreateFriendDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsPositive()
    age: number
}