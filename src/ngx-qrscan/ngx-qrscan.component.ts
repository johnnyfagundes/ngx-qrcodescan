import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as QRReader from '../lib/qrscan.js';

@Component({
  selector: 'ngx-qrscan',
  template: `<video #video autoplay></video>`,
  styles: [
      `
      `
  ]
})
export class NgxQrscanComponent implements  OnInit{

    @ViewChild('video') private video: ElementRef;
    @Input() public styleClass: string = '';
    @Input() public updateTime: number = 500;
    @Input() public stopAfterScan: boolean = false;
    @Output() public result = new EventEmitter();

    ngOnInit(): void {
        QRReader.init();
        setTimeout(() => {
            this.scan();
        }, 1000);
    }
    public scan() {
        setTimeout(() => {
            QRReader.scan((result) => {
                console.log(result);
                this.result.emit(result);
                if(!this.stopAfterScan) {
                    this.scan();
                }
            });
        }, this.updateTime);
    }

}
