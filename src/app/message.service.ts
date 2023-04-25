import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  delete(messageId: string) {
    // find and delete
    this.messages = this.messages.filter((message) => message !== messageId);
  }
}
