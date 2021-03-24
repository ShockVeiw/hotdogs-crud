import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity({name: 'hot_dogs'})
export class HotDog {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;

  @Column()
  title: string;
 
  @Column()
  description: string;
 
  @Column()
  image: string;
};