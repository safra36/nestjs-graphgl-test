import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Book {

    @Field({
        nullable : false
    })
    name : string

    @Field({
        nullable : false
    })
    author : string

    @Field(() => Date)
    release : Date

    @Field(() => Int)
    serial : number


}