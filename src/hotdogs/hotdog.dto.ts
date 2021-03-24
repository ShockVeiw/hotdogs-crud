import { IsNotEmpty } from 'class-validator';

export class HotDogDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  title: string;
 
  @IsNotEmpty()
  description: string;
 
  @IsNotEmpty()
  image: string;
};