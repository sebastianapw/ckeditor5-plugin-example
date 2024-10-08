import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Testplugin } from '@mediknow/ckeditor5-testplugin';

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
import 'ckeditor5/ckeditor5.css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CKEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular';

  public Editor = ClassicEditor;
  public config = {
    toolbar: [
      'undo',
      'redo',
      'testpluginButton',
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
      Testplugin
    ],
  };
}
