import { Field, InputType, Int } from "@nestjs/graphql";
import { Author } from "src/models/author.model";
import { Book } from "src/models/books.model";



@InputType()
export class CreateBook {

    @Field({
        nullable : false
    })
    name : string

    @Field(() => [String], {
        nullable : "items"
    })
    authorIds : string[]

    @Field(() => Int, {
        nullable : false
    })
    serial : number

}
