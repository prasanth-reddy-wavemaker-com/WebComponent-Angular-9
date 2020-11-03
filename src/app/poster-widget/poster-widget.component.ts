import { Component, OnInit, Injectable, Input, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosterService {
  // UPDATE OMDB API_KEY here
  apiKey = ``;
  movieApiUrl = `https://www.omdbapi.com/?apikey=${this.apiKey}&t=`;
  constructor(private http: HttpClient){
  }
  getPoster(name: string){
      return this.http.get(`${this.movieApiUrl}${name}`);
  }
}


@Component({
  selector: 'app-poster-widget',
  templateUrl: './poster-widget.component.html',
  styleUrls: ['./poster-widget.component.css']
})
export class PosterWidgetComponent implements OnInit, OnChanges {

  constructor(private mvInfoService: PosterService) { }
  @Input()
  title: string;
  public result;

  loadPoster():void {
    this.mvInfoService.getPoster(this.title).subscribe((data)=>{
      if(data['Error']){
        this.title = undefined;
        this.loadPoster();
      }
      this.result = data['Poster'];
    })
  }
  ngOnInit(): void {
    this.loadPoster()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes));
    this.loadPoster();
  }

}
