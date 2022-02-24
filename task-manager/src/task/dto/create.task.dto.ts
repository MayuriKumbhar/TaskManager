import { IsNotEmpty } from 'class-validator';

//this is data transfer object
//which is used to transfer data from one to another
export class CreateTaskDTO {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}