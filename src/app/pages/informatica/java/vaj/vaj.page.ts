import { Component, OnInit, ViewChild } from '@angular/core';
import {Storage} from '@ionic/storage'

import { MediaCapture, CaptureVideoOptions, MediaFile } from '@ionic-native/media-capture/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
const MEDIA_FILES_KEY = 'mediaFiles';
@Component({
  selector: 'app-vaj',
  templateUrl: './vaj.page.html',
  styleUrls: ['./vaj.page.scss'],
})
export class VajPage implements OnInit {
@ViewChild('myVideo',{static: false})myVideoany;
mediaFiles = [];

  constructor(private storage: Storage, private mediaCapture: MediaCapture, private media: Media) {
    }





    
  ngOnInit() {
  }

}
