import { Component } from '@angular/core';
import { X86SurferComponent } from 'x86-surfer-component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  imports: [X86SurferComponent, DragDropModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'x86-surfer-test-app';
}
