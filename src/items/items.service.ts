import { Injectable } from '@nestjs/common';
import { Item } from './dto/interfaces/item.interface';

@Injectable()
export class ItemsService {
  readonly items: Item[] = [
    {
      id: '32135132452',
      name: 'Item one',
      qty: 300,
      description: 'This is item One',
    },
    {
      id: '32135132452',
      name: 'Item one',
      qty: 200,
      description: 'This is item One',
    },
  ];
  findAll(): Item[] {
    return this.items;
  }
}
