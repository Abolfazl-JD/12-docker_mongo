import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendsModule } from './friends/friends.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password123@database:27017'),
    FriendsModule
  ],
})
export class AppModule {}
