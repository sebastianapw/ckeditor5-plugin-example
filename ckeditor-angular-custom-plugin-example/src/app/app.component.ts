import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from 'ckeditor5';
import { Test } from '@mediknow/ckeditor5-test';
import 'ckeditor5/ckeditor5.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CKEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ckeditor-angular-custom-plugin-example';

  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo',
      'redo',
      'testButton',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      '|',
      'link',
      'insertTable',
      'mediaEmbed',
      '|',
      'bulletedList',
      'numberedList',
      'indent',
      'outdent',
    ],
    plugins: [
      Bold,
      Essentials,
      Heading,
      Indent,
      IndentBlock,
      Italic,
      Link,
      List,
      MediaEmbed,
      Paragraph,
      Table,
      Undo,
      Test
    ],
  };
}
