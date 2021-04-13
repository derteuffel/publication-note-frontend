import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-payment-student-list',
  templateUrl: './payment-student-list.component.html',
  styleUrls: ['./payment-student-list.component.css']
})
export class PaymentStudentListComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;

  constructor(private etudiantService: EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadAll();

  }


  loadAll(){
    this.etudiantService.getAll().subscribe(
      data => {
        this.lists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}
