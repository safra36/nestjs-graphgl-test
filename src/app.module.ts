import { ApolloDriver } from '@nestjs/apollo';
import { ApolloDriverConfig } from '@nestjs/apollo/dist/interfaces';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorDataSet } from './datasets/authors.dataset';
import { BooksDataSet } from './datasets/books.dataset';
import { BookResolver } from './resolvers/book.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver : ApolloDriver,
      autoSchemaFile : true,
      playground : true
    })
  ],
  controllers: [],
  providers: [
    AuthorDataSet,
    BooksDataSet,
    BookResolver
  ],
})
export class AppModule {}

