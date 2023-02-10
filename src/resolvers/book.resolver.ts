import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthorDataSet } from "src/datasets/authors.dataset";
import { BooksDataSet } from "src/datasets/books.dataset";
import { Author } from "src/models/author.model";
import { Book } from "src/models/books.model";



@Resolver(() => Book)
export class BookResolver {

    constructor(
        private readonly bookRepo : BooksDataSet,
        private readonly authorRepo : AuthorDataSet
    ) {}

    @Query(returns => Book, { name : "book" })
    async getBooks(
        @Args("name", { 'nullable' : false }) name : string
    ) {

        return this.bookRepo.findBook(name);

    }


    @ResolveField("authors", returns => Author)
    async getAuthors(@Parent() book : Book) {
        return this.authorRepo.findAuthor(book.name)
    }
    

}