import { CacheModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Friend, FriendSchema } from './friend.schema';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        store: await redisStore({
          url : configService.get<string>('REDIS_URI'),
          ttl: 10000
        })
      }),
      inject: [ConfigService]
    }),
    MongooseModule.forFeature([{ schema: FriendSchema, name: Friend.name }])
  ],
  controllers: [FriendsController],
  providers: [FriendsService]
})
export class FriendsModule {}
