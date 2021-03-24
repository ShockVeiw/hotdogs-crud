import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HotDog } from './hotdogs/hotdog.entity';
import { HotDogModule } from './hotdogs/hotdog.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build')
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: false,
      entities: [HotDog]
    }),
    HotDogModule
  ]
})
export class AppModule {}
