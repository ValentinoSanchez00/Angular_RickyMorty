import { Component, OnInit } from '@angular/core';
import { ApiAllCharactersService } from 'src/app/api-all-characters.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  characters: any[] = [];
  loading = true;

  // Inyección del servicio
  constructor(private dataService: ApiAllCharactersService) {
    this.loading = true;
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.characters = data.results.slice(0, 10);
      console.log(this.characters);
      this.loading = false;
    });
  }

  

  ngOnInit(): void {
  }
}
