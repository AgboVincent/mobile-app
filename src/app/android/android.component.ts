import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.css']
})
export class AndroidComponent implements OnInit {
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
    this.paginator = this.paginator;
  }

}
