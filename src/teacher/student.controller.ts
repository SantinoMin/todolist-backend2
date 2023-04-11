import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get All Students that Belong To A Teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher';
  }
}
