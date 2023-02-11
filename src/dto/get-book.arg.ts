import { ArgsType, Field } from "@nestjs/graphql";



@ArgsType()
export class GetBookRequestArg {

    @Field({ name : "name", nullable : false })
    name : string
    

}