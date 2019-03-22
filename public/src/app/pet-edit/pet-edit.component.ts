import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  pet: any = {
    id: '',
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
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.getContentById(params['id']);
    })
  }

  getContentById(id: string){
    this._httpService.getById(id).subscribe(data => {
      this.pet = data[0];
    });
  }

  editPetInfo(){
    console.log(this.pet)
    this._httpService.updateContentById(this.pet._id, this.pet)
      .subscribe(data => {
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
          this._router.navigate(['/pets/', this.pet._id])
        }
      });
  }
}
