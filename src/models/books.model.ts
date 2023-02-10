import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "./author.model";


@ObjectType()
export class Book {

    @Field({
        nullable : false
    })
    name : string

    @Field(() => [Author], {
        nullable : "items"
    })
    authors : Author[]

    @Field(() => Int, {
        nullable : false
    })
    serial : number

}