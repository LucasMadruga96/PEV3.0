import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {VideoPlayer} from '@ionic-native/video-player/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import{FileOpener} from '@ionic-native/file-opener/ngx';
import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player/ngx';
import {MediaCapture} from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import {File} from '@ionic-native/file/ngx';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot( ), AppRoutingModule,IonicStorageModule.forRoot(),HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
   
    YoutubeVideoPlayer,
    VideoPlayer,
  File,
    FileOpener,
   Media,
    MediaCapture,
   
    

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
   
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
