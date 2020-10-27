import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    _id: string;
}