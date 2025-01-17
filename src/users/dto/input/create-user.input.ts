import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";

@InputType()
export class CreateUserInput {

    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field(() => Int)
    @IsNotEmpty()
    age: number

    @Field(() => Boolean)
    @IsNotEmpty()
    isSubscribed: boolean

}