import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private itemData = new BehaviorSubject("")
  updateEditData = this.itemData.asObservable();


  private localStorageUpdateEvent = new BehaviorSubject(false)
  savedData = this.localStorageUpdateEvent.asObservable();





  private addEvent = new BehaviorSubject(false)
  addEventData = this.addEvent.asObservable();

  private editEvent = new BehaviorSubject(false)
  editEventData = this.editEvent.asObservable();




  constructor() { }

  setEditItemData(data: any) {
    this.itemData.next(data);
  }

  setLocalStorageEvent(data: boolean) {
    this.localStorageUpdateEvent.next(data);
  }








  setEventCreate(data: boolean) {
    this.addEvent.next(data)
  }

  setEventEdit(data: boolean) {
    this.editEvent.next(data)
  }

  setEventDelete() {

  }





  setEventRefresh() {

  }
  setEventAddData() {

  }

}
