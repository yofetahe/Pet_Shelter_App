import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: any = [];
  updatedPets: any = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets(){
    this._httpService.getAll()
      .subscribe(data => {              
        this.pets = data
        var petList = this.pets;
        for(var i = 0; i < petList.length; i++){
          if(petList[i]['name']){
            this.updatedPets.push(petList[i]);
          }
        }
      })
  }

  getEditForm(id: string){
    this._router.navigate(['/pets/' + id + '/edit'])
  }

}
