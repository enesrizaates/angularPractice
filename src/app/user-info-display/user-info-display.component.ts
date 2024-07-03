import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-user-info-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info-display.component.html',
  styleUrl: './user-info-display.component.css',
})
export class UserInfoDisplayComponent implements OnInit{
  constructor(
    private userInfo: UserInfoService,
  ) {}

  ngOnInit  (): void {
    this.userInfo.loadData().subscribe(data => {
      console.log(data);
    });
  }
}
