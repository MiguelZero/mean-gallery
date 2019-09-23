import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:4000/api/photos/";

  createPhoto(title:string, description: string, photo: File){
  	const fd = new FormData();

  	fd.append('title', title);
  	fd.append('description', description);
  	fd.append('image', photo);

  	return this.http.post(this.url, fd);

  }


  getPhotos(){
  	return this.http.get<Photo[]>(this.url);
  }

  getPhoto(id: string){
  	return this.http.get<Photo>(this.url + id);
  }

  updatePhoto(id: string, title: string, description: string){
  	return this.http.put(this.url + id, {title, description});

  }

  deletePhoto(id: string){
  	return this.http.delete(this.url + id);
  }

}
