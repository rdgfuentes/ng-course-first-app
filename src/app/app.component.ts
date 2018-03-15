import { Component } from '@angular/core';
import { IProduct } from './product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Velocity Angular Course';
  private _isTitleVisible = true;

  get isTitleVisible(): boolean {
    return this._isTitleVisible;
  }
  set isTitleVisible(visible: boolean) {
    console.log('title visibility changed to ', visible);
    this._isTitleVisible =  visible;
  }

  showAlert() {
    alert('This is alert');
  }

  modifyTitle(newTitle: string) {
    this.title = newTitle;
  }

  toggleTitle() {
    this.isTitleVisible = !this.isTitleVisible;
  }
}
