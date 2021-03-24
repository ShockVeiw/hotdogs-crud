import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotDogController } from './hotdog.controller';
import { HotDog } from './hotdog.entity';
import { HotDogService } from './hotdog.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([HotDog])],
  providers: [HotDogService],
  controllers: [HotDogController],
})
export class HotDogModule {}