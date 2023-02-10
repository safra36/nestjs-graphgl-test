import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorDataSet } from './datasets/authors.dataset';
import { BooksDataSet } from './datasets/books.dataset';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile : true
    })
  ],
  controllers: [],
  providers: [
    AuthorDataSet,
    BooksDataSet
  ],
})
export class AppModule {}
