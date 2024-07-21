import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddExamService } from '../service/addExam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {

  exam: any = [];
  AddExamForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
    private as: AddExamService // Add this line to inject the service
  ) {}

  ngOnInit(): void {
    this.AddExamForm = this.fb.group({
      courseName: ['', Validators.required],
      topicName: ['', Validators.required],
      examType: ['', Validators.required],
      totalQuestions: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  createExam(): void {
    console.log(this.AddExamForm.value);
    this.as.addExamService(this.AddExamForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  gotToView(): void {
    this.router.navigate(['/home']);
  }
}
