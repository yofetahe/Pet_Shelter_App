import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.css']
})
export class PetViewComponent implements OnInit {

  likeButtonActive: Boolean;
  likeButtonInactive: Boolean;

  pet: any = {
    id: '',
    name: '',
    type: '',
    description: '',
    skill_one: '',
    skill_two: '',
    skill_three: '',
    likes: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.likeButtonActive = true;
    this.likeButtonInactive = false;
    this._route.params.subscribe((params:Params) => {
      this.getContentById(params['id']);
    })
  }

  getContentById(id: string){
    this._httpService.getById(id).subscribe(data => {
      this.pet = data[0];
    });
  }

  deletePetInfo(){
    this._httpService.deleteContentById(this.pet._id)
      .subscribe(data => {
        this._router.navigate(['/pets']);
      })
  }

  likePet(){
    this.likeButtonActive = false;
    this.likeButtonInactive = true;
    this.pet.likes = this.pet.likes + 1;
    this._httpService.updateContentById(this.pet._id, this.pet)
      .subscribe(() => {
        this.getContentById(this.pet._id);
      })    
  }
}
