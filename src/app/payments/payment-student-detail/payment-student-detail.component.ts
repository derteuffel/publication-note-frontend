import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { error } from 'selenium-webdriver';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-student-detail',
  templateUrl: './payment-student-detail.component.html',
  styleUrls: ['./payment-student-detail.component.css']
})
export class PaymentStudentDetailComponent implements OnInit {

  etudiant: any = {};
  lists: any = {};
  isListNull: boolean;


  constructor(private etudiantService: EtudiantService, private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEtudiant(this.activatedRoute.snapshot.paramMap.get('id'));
    this.loadPayments(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getEtudiant(id){
    this.etudiantService.getEtudiant(id).subscribe(
      data => {
        this.etudiant = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadPayments(id){
    this.paymentService.getPaymentByUser(id).subscribe(
      res => {
        this.lists = res;
        if(res === null){
          this.isListNull = true;
        }else{
          this.isListNull = false;
        }
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
