import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { UsersModule } from 'src/users/users.module';
import { Person } from './entities/person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from 'src/teacher/teacher.module';

@Module({
  imports: [TypeOrmModule.forFeature([Person]),
  UsersModule, 
  TeacherModule
],
  controllers: [PersonController],
  providers: [PersonService],
  exports: [PersonService],
})
export class PersonModule {}