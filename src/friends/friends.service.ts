import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFriendDto } from './dto/create-friend.dto';
import { Friend, FriendDocument } from './friend.schema';

@Injectable()
export class FriendsService {
    constructor(@InjectModel(Friend.name) private friendModel: Model<FriendDocument>){}

    getFriends(){
        return this.friendModel.find()
    }

    addFriend(createFriendDto: CreateFriendDto){
        return this.friendModel.create(createFriendDto)
    }
}
