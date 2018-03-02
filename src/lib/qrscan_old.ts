
export class Qrscan {
    public QRReader = {
        active: false,
        webcam: null,
        canvas: null,
        ctx: null,
        decoder: null
    };

    public setCanvas () {

        this.QRReader.canvas = document.createElement("canvas");
        this.QRReader.ctx = this.QRReader.canvas.getContext("2d");

    }

    public setCanvasProperties() {
        this.QRReader.canvas.width = window.innerWidth;
        this.QRReader.canvas.height = window.innerHeight;
    }

    public startCapture(constraints) {
        navigator.mediaDevices.getUserMedia(constraints)
            .then(function (stream) {
                this.QRReader.webcam.srcObject = stream;
            })
            .catch(function(err) {
                console.log("Error occurred ", err);
                this.showErrorMsg();
            });
    }

    public showErrorMsg() {
        // document.querySelector('.app__overlay').style.display = "none";
        // document.querySelector('.app__header-icon svg').style.fill = '#212121';
        // snackbar.show('Unable to open the camera, provide permission to access the camera', 10000);
    }

    public init(){
        let baseurl = "";
        let streaming = false;

        // Init Webcam + Canvas
        // if (!window.iOS) {
            this.QRReader.webcam = document.querySelector("video");
        // }
        // else {
        //     this.QRReader.webcam = document.querySelector("img");
        // }

        this.setCanvas();
        // this.QRReader.decoder = new Worker(baseurl + "decoder.min.js");

        // if (!window.iOS) {
            // Resize webcam according to input
            this.QRReader.webcam.addEventListener("play", function (ev) {
                console.log(ev);
                if (!streaming) {
                    this.setCanvasProperties();
                    streaming = true;
                }
            }, false);
        // }
        // else {
        //     this.setCanvasProperties();
        // }
        //
        // // if (!window.iOS) {
        //     navigator.mediaDevices.enumerateDevices()
        //         .then(function (devices) {
        //             let device = devices.filter(function(device) {
        //                 let deviceLabel = device.label.split(',')[1];
        //                 if (device.kind == "videoinput") {
        //                     return device;
        //                 }
        //             });
        //
        //             if (device.length > 1) {
        //                 let constraints = {
        //                     video: {
        //                         mandatory: {
        //                             sourceId: device[1].deviceId ? device[1].deviceId : null
        //                         }
        //                     },
        //                     audio: false
        //                 };
        //
        //                 this.startCapture(constraints);
        //             }
        //             else if (device.length) {
        //                 let constraints = {
        //                     video: {
        //                         mandatory: {
        //                             sourceId: device[0].deviceId ? device[0].deviceId : null
        //                         }
        //                     },
        //                     audio: false
        //                 };
        //
        //                 this.startCapture(constraints);
        //             }
        //             else {
        //                 this.startCapture({video:true});
        //             }
        //         })
        //         .catch(function (error) {
        //             this.showErrorMsg();
        //             console.error("Error occurred : ", error);
        //         });
        // }
    }
}