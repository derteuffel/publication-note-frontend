import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { Periodes } from 'src/app/enums/periode-enum';
import { ActivationRequest } from 'src/app/models/activation-request';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment-student-sent-code',
  templateUrl: './payment-student-sent-code.component.html',
  styleUrls: ['./payment-student-sent-code.component.css']
})
export class PaymentStudentSentCodeComponent implements OnInit {

  form: any = {};
  etudiant: any = {};
  periodes: any = {};
  activationForm: ActivationRequest;
  constructor(private etudiantService: EtudiantService, private paymentService: PaymentService,
    private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.periodes = Object.keys(Periodes);
    this.getEtudiant(this.activatedRoute.snapshot.paramMap.get('id'));
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

  onSubmit(){
    this.activationForm = new ActivationRequest(
      '',
      this.form.periode,
      this.form.telephone
    );
    this.paymentService.sendCode(this.activationForm, this.etudiant.id).subscribe(
      data => {
        console.log('Code has been sent successfuly!')
        this.route.navigateByUrl('payments/student/detail/'+this.etudiant.id);
      },
      error => {
        console.log(error);
      }
    );
  }

}
