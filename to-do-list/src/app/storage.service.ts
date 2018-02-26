import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  storageNamespace: string = 'ToDoList';

  save(obj){
    localStorage.setItem(this.storageNamespace, JSON.stringify(obj));
  }

  load(){
    var storage: any;
    var rawStorage: string;
    
    try {
      rawStorage = localStorage.getItem(this.storageNamespace);
      try {
          storage = JSON.parse(rawStorage);
      } catch(err) {
          storage = rawStorage;
      }
    }
    catch(err) {
        storage = []
    }

    return storage;
  }

  constructor() { }

}
