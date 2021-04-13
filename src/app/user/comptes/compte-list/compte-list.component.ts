import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {

  lists: any = {};
  p: number;
  searchItem: string;

  constructor(private compteServise: CompteService) { }

  ngOnInit(): void {
    this.loadAll();
  }


  loadAll(){
    this.compteServise.getAll().subscribe(
      data => {
        this.lists = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  activer(id){

    this.compteServise.activeCompte(id).subscribe(
      data => {
        console.log('Account has been Activated successfully');
        window.location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
