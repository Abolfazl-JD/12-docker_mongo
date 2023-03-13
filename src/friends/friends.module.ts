import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Friend, FriendSchema } from './friend.schema';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: FriendSchema, name: Friend.name }])
  ],
  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
