import { Injectable, HttpException } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HotDog } from './hotdog.entity';
import { HotDogDto } from './hotdog.dto'; 
 
@Injectable()
export class HotDogService {
  constructor(@InjectRepository(HotDog) private hotDogRepo: Repository<HotDog>) {}

  public async findAll(): Promise<HotDog[]> {
    return await this.hotDogRepo.find({ order: { id: "DESC" } });
  };  

  public async findById(id: number): Promise<HotDog> {
    return await this.hotDogRepo.findOne(id);
  };

  public async create(hotDogData: HotDogDto): Promise<HotDog> {
    return await this.hotDogRepo.save(hotDogData);
  };

  public async update(hotDogId: number, hotDogData: HotDogDto): Promise<HotDog> {
    const updateResult = await this.hotDogRepo.update(hotDogId, hotDogData);
    const affectedId = updateResult.affected;

    if (affectedId === 0) throw new HttpException('Hot-dog not found', 404);

    const updatedHotDog = await this.findById(hotDogId);
    return updatedHotDog;
  };

  public async delete(hotDogId: number): Promise<DeleteResult> {
    const hotDog = await this.findById(hotDogId);
    if (!hotDog) throw new HttpException('Hot-dog not found', 404);

    return await this.hotDogRepo.delete(hotDogId);
  };
};