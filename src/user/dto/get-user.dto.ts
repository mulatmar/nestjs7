import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    _id: string;
}