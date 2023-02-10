import { Injectable, NotAcceptableException } from "@nestjs/common";
import { Author } from "src/models/author.model";




@Injectable()
export class AuthorDataSet {


    private authors : Author[] = [];

    createAuthor(
        name : string,
        age : number,
        bookName : string
    ) : Author {

        const currentAuthor = this.authors.find((authorObject) => authorObject.name == name);

        if(currentAuthor) {
            throw new NotAcceptableException("Author already exists")
        } else {

            const author : Author = {
                age,
                name,
                bookName
            }

            this.authors.push(author);

            return author;

        }

    }


    findAuthor(
        name : string
    ) : Author {

        const author = this.authors.find(authorObject => authorObject.name == name);
        if(author) return author;
        else throw new NotAcceptableException("Author not found")

    }

    deleteAuthor(
        name : string
    ) : void {

        const author = this.findAuthor(name);
        const authorIndex = this.authors.indexOf(author);
        this.authors.splice(authorIndex, 1);

    }


    updateAuthor(
        name : string,
        age : number
    ) : boolean {

        const author = this.findAuthor(name);
        author.age = age;
        return true;

    }


}