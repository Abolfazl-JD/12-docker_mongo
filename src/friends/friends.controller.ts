import { Body, CacheInterceptor, CacheKey, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {

    constructor(private readonly friendsService: FriendsService){}

    @UseInterceptors(CacheInterceptor)
    @CacheKey('friends_key')
    @Get()
    findFriends(){
        return this.friendsService.getFriends()
    }

    @Get('get-key')
    getKey(@Body('key') key: string){
        return this.friendsService.getKey(key)
    }

    @Post()
    createNewFriend(@Body() createFriendDto: CreateFriendDto){
        return this.friendsService.addFriend(createFriendDto)
    }
}
