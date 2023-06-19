import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = ['item1', 'item2', 'item3'];
  newItem = '';

  addItem() {
    if (this.newItem) {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
}
