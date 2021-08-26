import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [UsersModule, PostsModule, SharedModule],
    controllers: [],
    providers: [],
=======
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> 30ab1a157395971c39daf4fb5915b9a6e904ffee
})
export class AppModule {}
