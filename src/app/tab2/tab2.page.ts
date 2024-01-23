import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public photoService:PhotoService) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  async ngOnInit(): Promise<void> {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
