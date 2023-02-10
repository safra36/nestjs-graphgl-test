import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Author {

    @Field({
        nullable : false
    })
    name : string

    @Field(() => Int, {
        nullable : false
    })
    age : number

    @Field({
        nullable : false
    })
    bookName : string

}


