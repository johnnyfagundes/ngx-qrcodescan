import { Injectable } from '@angular/core';
import * as QRReader from '../lib/qrscan.js';

@Injectable()
export class NgxQrcodescanService {

    constructor() {

    }

    public start() {
        QRReader.init();
    }

    public stop() {
        const track: any = QRReader.webcam.srcObject.getTracks()[0];
        track.stop();
    }

    public getQrReader() {
      return QRReader;
    }
}
