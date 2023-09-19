import { Component } from '@angular/core';
import { CustomFileSizePipePipe } from 'src/app/pipes/custom-file-size-pipe.pipe';

interface File {
  name: string,
  size: any,
  type: string
}


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  birthday = new Date(1993,6,28);
  files!: File[];
  mapped!: File[];

  constructor(private customFileSizePipePipe: CustomFileSizePipePipe){}

  ngOnInit(){
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' }
    ];

    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.customFileSizePipePipe.transform(file.size, 'MB')
      };
  });
  }

}
