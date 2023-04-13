import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
} from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): FindStudentResponseDto[] {
    return this.studentService.getStudent();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  // JSON.stringify(body) 작성하면, json형식으로 결과값을 보여줌
  @Post()
  createStudent(
    @Body() body: CreateStudentDto,
    // : { name: string; grade: number; teacher: string },
    // @Body('name') name: string,
  ): StudentResponseDto {
    return this.studentService.createStudent(body);
  }
  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
