import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {

    constructor(private readonly friendsService: FriendsService){}

    @Get()
    findFriends(){
        return this.friendsService.getFriends()
    }

    @Post()
    createNewFriend(@Body() createFriendDto: CreateFriendDto){
        return this.friendsService.addFriend(createFriendDto)
    }
}
