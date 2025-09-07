import { Component } from '@angular/core';

@Component({
  selector: 'app-remote-loader',
  template: `
    <iframe 
      src="http://localhost:4201" 
      frameborder="0"
      style="width: 100%; height: 500px; border: none;">
    </iframe>
  `
})
export class RemoteLoaderComponent { }