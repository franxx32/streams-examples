import { Transform } from 'stream';
import { StringDecoder } from 'string_decoder';
import { TextEditor } from '../helpers/textEditor';

export class TextEditorStream extends Transform {
  private editMethodName: string;
  private utfDecoder = new StringDecoder('utf-8');
  constructor(options, editMethodName: string) {
    super(options);
    this.editMethodName = editMethodName;
  }

  public _transform(chunk, encoding, callback) {
    if (encoding === 'buffer') {
      chunk = this.utfDecoder.write(chunk);
    }
    const textEditor = new TextEditor(chunk);
    chunk = textEditor[this.editMethodName]();
    callback(null, chunk);
  }
}
