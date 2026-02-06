import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-dto.item';
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Get all items';
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Description: ${createItemDto.description}`;
  }
}
