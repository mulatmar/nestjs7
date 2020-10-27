import { Controller, Get, Query, Body, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/user/user.service';
import { UserListDto } from 'src/user/dto/list-user.dto';
import { GetUserDto } from 'src/user/dto/get-user.dto';
import { RemoveUserDto } from 'src/user/dto/remove-user.dto';
import { IUser } from './interfaces/user.interface';

@ApiTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/items')
    async getList(@Query() query: UserListDto): Promise<IUser[]> {
        const list = await this.userService.getList();
        return list;
    }

    @Get('/item')
    async getItem(@Query() query: GetUserDto): Promise<IUser> {
        const item = await this.userService.find(query._id);
        return item;
    }

    @Post('/remove')
    async removeItem(@Body() body: RemoveUserDto): Promise<Boolean> {
        const result = await this.userService.remove(body._id);
        return result;
    }
}
