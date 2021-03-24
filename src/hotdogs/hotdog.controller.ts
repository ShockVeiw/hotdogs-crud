import { Controller, Get, Post, Put, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { HotDogService } from './hotdog.service';
import { HotDog } from './hotdog.entity';
import { HotDogDto } from './hotdog.dto'; 
import { DeleteResult } from 'typeorm';
 
@Controller('api/hot-dogs')
export class HotDogController {
  constructor(private readonly hotDogService: HotDogService) {}

  @Get()
  public async getAll(): Promise<HotDog[]> {
    return await this.hotDogService.findAll();
  };

  @Post()
  @HttpCode(201)
  public async create(@Body() hotDogData: HotDogDto): Promise<HotDog> {
    return await this.hotDogService.create(hotDogData);
  };

  @Put(':id')
  @HttpCode(201)
  public async update(@Param('id') id: number, @Body() hotDogData: HotDogDto): Promise<HotDog> {
    return await this.hotDogService.update(id, hotDogData);
  };

  @Delete(':id')
  @HttpCode(204)
  public async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.hotDogService.delete(id);
  };
};