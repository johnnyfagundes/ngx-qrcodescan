import {
    Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
    ViewChild
} from '@angular/core';
import * as QRReader from '../lib/qrscan.js';
import { NgxQrcodescanService } from './ngx-qrcodescan.service';

@Component({
    selector: 'app-ngx-qrcodescan',
    template: `
        <div class="ngx-qrcodescan">
            <div class="ngx-qrcodescan-scanner"></div>
            <video height="100%" width="100%" #video autoplay></video>
        </div>
    `,
    styles: [
            `
            .ngx-qrcodescan {
                position: relative;
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

            .ngx-qrcodescan-scanner {
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
export class NgxQrcodescanComponent implements  OnInit {

    constructor(
        private ngxService : NgxQrcodescanService
    ) {

    }

    @ViewChild('video') private video: ElementRef;
    @Input() public updateTime: number = 500;
    @Input() public stopAfterScan: boolean = false;
    @Input() public destroy: boolean = null;
    @Output() public result = new EventEmitter();

    ngOnInit(): void {
        this.ngxService.start();
    }

    public scan() {
        setTimeout(() => {
            this.ngxService.result((result) => {
                this.result.emit(result);
                if (!this.stopAfterScan) {
                    this.scan();
                }
            });
            // QRReader.scan((result) => {
            //     this.result.emit(result);
            //     if (!this.stopAfterScan) {
            //         this.scan();
            //     }
            // });
        }, this.updateTime);
    }
}