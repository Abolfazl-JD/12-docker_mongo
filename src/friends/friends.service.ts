import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Friend, FriendDocument } from './friend.schema';
import { Cache } from 'cache-manager';

@Injectable()
export class FriendsService {
    constructor(
        @InjectModel(Friend.name) private friendModel: Model<FriendDocument>,
        @Inject(CACHE_MANAGER) private readonly cache: Cache
    ){}

    getFriends(){
        console.log('not cached')
        return 'here are friends of mine'
    }

    getKey(key: string){
        console.log(`getting key ${key} from redis`)
        return this.cache.get(key)
    }

    addFriend(createFriendDto: CreateFriendDto){
        return this.friendModel.create(createFriendDto)
    }
}
