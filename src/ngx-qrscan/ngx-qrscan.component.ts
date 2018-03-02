import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as QRReader from '../lib/qrscan.js';

@Component({
  selector: 'app-ngx-qrscan',
  template: `
      <div class="ngx-qrscan">
          <div class="ngx-qrscan-scanner"></div>
          <video height="100%" width="100%" #video autoplay></video>
      </div>
  `,
  styles: [
      `
          .ngx-qrscan {
              position: absolute;
          }

          @-webkit-keyframes scanner {
              0% {
                  bottom: 100%;
              }
              50% {
                  bottom: 0%;
              }
              100% {
                  bottom: 100%;
              }
          }

          @-moz-keyframes scanner {
              0% {
                  bottom: 100%;
              }
              50% {
                  bottom: 0%;
              }
              100% {
                  bottom: 100%;
              }
          }

          @-o-keyframes scanner {
              0% {
                  bottom: 100%;
              }
              50% {
                  bottom: 0%;
              }
              100% {
                  bottom: 100%;
              }
          }

          @keyframes scanner {
              0% {
                  bottom: 100%;
              }
              50% {
                  bottom: 0%;
              }
              100% {
                  bottom: 100%;
              }
          }

          .ngx-qrscan-scanner {
              width: 100%;
              height: 2px;
              background: #404040;
              position: absolute;
              -webkit-transition: all 200ms linear;
              -moz-transition: all 200ms linear;
              transition: all 200ms linear;
              -webkit-animation: scanner 6s infinite linear;
              -moz-animation: scanner 6s infinite linear;
              -o-animation: scanner 6s infinite linear;
              animation: scanner 6s infinite linear;
              box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.4);
              display: block;
          }
      `
  ]
})
export class NgxQrscanComponent implements  OnInit {

    @ViewChild('video') private video: ElementRef;
    @Input() public updateTime = 500;
    @Input() public stopAfterScan = false;
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
                if (!this.stopAfterScan) {
                    this.scan();
                }
            });
        }, this.updateTime);
    }
}
