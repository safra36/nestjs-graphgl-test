import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { GetBookRequestArg } from "src/dto/get-book.arg";
import { AuthorDataSet } from "src/datasets/authors.dataset";
import { BooksDataSet } from "src/datasets/books.dataset";
import { Author } from "src/models/author.model";
import { Book } from "src/models/books.model";
import { Mutation } from "@nestjs/graphql/dist/decorators";
import { updateBookSerial } from "src/dto/update-book.input";
import { CreateBook } from "src/dto/creare-book.input";
import { CreateAuthor } from "src/dto/creare-author.input";



@Resolver(() => Book)
export class BookResolver {

    constructor(
        private readonly bookRepo : BooksDataSet,
        private readonly authorRepo : AuthorDataSet
    ) {}

    @Query(returns => Book, { name : "book" , description : "get a book information"})
    async getBook(
        @Args() args : GetBookRequestArg
    ) {

        return this.bookRepo.findBook(args.name);

    }


    @ResolveField("authors", returns => [Author])
    async getAuthors(@Parent() book : Book) {
        return this.authorRepo.findAuthors(book.name)
    }


    @Query(returns => [Author], { 'nullable' : false, name : "authors", description : "get a list of authors" })
    async getAllAUthors() {
        return this.authorRepo.findAll();
    }


    @Mutation(() => Book)
    async updateBookSerial(
        @Args('updateBook') updateBook : updateBookSerial
    ) {

        const book = this.bookRepo.findBook(updateBook.name);
        if(book) {
            this.bookRepo.updateBook(updateBook.name, {
                serial : updateBook.serial
            })
        }

    }


    @Mutation(() => Author)
    async createAuthor(
        @Args('createAuthor') createAuthor : CreateAuthor
    ) {

        return this.authorRepo.createAuthor(
            createAuthor.name,
            createAuthor.age,
            createAuthor.bookName
        )

    }


    @Mutation(() => Book)
    async createBook(
        @Args('createBook') createBook : CreateBook
    ) {

        const authors = this.authorRepo.findAuthorsByNames(
            createBook.authorIds
        )

        return this.bookRepo.createBook(
            createBook.name,
            authors,
            createBook.serial
        )

    }
    

}