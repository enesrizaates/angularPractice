import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-params-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './params-example.component.html',
  styleUrl: './params-example.component.css'
})
export class ParamsExampleComponent implements OnInit{
  urlParam: string = '';
  anotherParam: string = '';
  params: any[] = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.urlParam = this.route.snapshot.params['urlParam'] || '';
    this.anotherParam = this.route.snapshot.params['anotherParam'] || '';
    this.route.queryParams.subscribe(params => {
      this.params = Object.keys(params).map(key => ({name: key, value: params[key]}))});
  }
}
