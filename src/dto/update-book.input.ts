import { Field, InputType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql/dist/scalars";



@InputType()
export class updateBookSerial {


    @Field({
        nullable : false
    })
    name : string

    @Field( ()  => Int, { nullable : false } )
    serial : number

    @Field(() => [String] ,{ nullable : false })
    authors : string[]

}


