import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..' ,'public'),
    }),
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://chema:Chemaesmipastor.1@cluster0.pcdwu.mongodb.net/Dico>?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useFindAndModify: false
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
