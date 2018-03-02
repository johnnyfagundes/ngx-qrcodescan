import { Injectable } from '@angular/core';
import * as QRReader from '../lib/qrscan.js';

@Injectable()
export class NgxQrcodescanService {

    constructor() {

    }

    public start() {
        console.log('service scan');
        QRReader.init();
        setTimeout(() => {
            QRReader.scan();
        }, 1000);
    }

    public stop() {
        let track = QRReader.webcam.srcObject.getTracks()[0];
        track.stop();
    }

    public result (): any {
       return QRReader.scan;
    }
}
