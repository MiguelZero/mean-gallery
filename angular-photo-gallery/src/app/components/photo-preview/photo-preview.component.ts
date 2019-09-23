import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../interfaces/photo'; 

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

	id:string;
	photo: Photo;

  constructor(private photoService: PhotoService,
  						private activatedRoute: ActivatedRoute,
  						private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
  		this.id = params['id'];
  		this.photoService.getPhoto(this.id)
  			.subscribe(
  			res => {
  				this.photo = res;
  			},
  			err => {
  				console.error(err);
  			});

  	});
  }

  deletePhoto(id: string){
  	this.photoService.deletePhoto(id)
  		.subscribe(
  			res => {
  				this.router.navigate(['/photos']);
  			},
  			err => {
  				console.error(err);
  			});
  }

  updatePhoto(id: string, title: HTMLInputElement, description: HTMLInputElement): boolean{
  	this.photoService.updatePhoto(id, title.value, description.value)
  	.subscribe(
  		res => {
  			console.log(res);
  			this.photo = res['photo'];
  		},
  		err => {
  			console.log(err);
  	});

  	return false;

  }


}
