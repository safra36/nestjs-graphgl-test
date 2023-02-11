import { Field, InputType, Int } from "@nestjs/graphql";
import { Author } from "src/models/author.model";
import { Book } from "src/models/books.model";



@InputType()
export class CreateAuthor {

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
