import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Devises } from 'src/app/enums/devise-enum';
import { Periodes } from 'src/app/enums/periode-enum';
import { PaymentRequest } from 'src/app/models/payment-request';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-student-add',
  templateUrl: './payment-student-add.component.html',
  styleUrls: ['./payment-student-add.component.css']
})
export class PaymentStudentAddComponent implements OnInit {

  form: any = {};
  paymentRequest: PaymentRequest;
  periodes: any = {};
  devises: any = {};
  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.periodes = Object.keys(Periodes);
    this.devises = Object.keys(Devises);
  }

  onSubmit(){
    this.paymentRequest = new PaymentRequest(
      this.form.description,
      this.form.montant,
      this.form.taux,
      this.form.devise,
      this.form.periode,
      this.form.telephone,
      this.form.matricule
    );

    this.paymentService.addPayment(this.paymentRequest).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/payments/home']);
      }, error => {
        console.log(error);
      }
    );
  }

}
