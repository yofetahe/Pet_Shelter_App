import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  validationMessage: String;

  pet: any = {
    name: '',
    type: '',
    description: '',
    skill_one: '',
    skill_two: '',
    skill_three: ''
  }

  errors: any = {
    name: '',
    type: '',
    description: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.validationMessage = '';
  }

  validatePetInfo(){
      this._httpService.validatePetInfo(this.pet)
      .subscribe(data => {        
        if(data['length'] > 0 ) {    
          this.validationMessage = "This pet already exist";
        } else {
          this.addPetInfo();
        }
      })    
  }

  addPetInfo(){
    
    this.errors = {
        name: '',
        type: '',
        description: ''
      }
      this._httpService.addContent(this.pet)
        .subscribe(data => {
          console.log(data['errors'])                
          if(data['errors']){
            if(data['errors']['name']){
              this.errors.name = data['errors']['name']['message']
            }
            if(data['errors']['type']){
              this.errors.type = data['errors']['type']['message'];
            }
            if(data['errors']['description']){
              this.errors.description = data['errors']['description']['message'];
            }
          } else {
            this._router.navigate(['/pets'])
          }
        })
    }
}
