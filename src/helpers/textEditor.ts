export class TextEditor {
  private text: string;
  constructor(text: string) {
    this.text = text;
  }

  public removeSpaces() {
    return this.text.replace(/\s+/g, '');
  }
  public toLowerCase() {
    return this.text.toLocaleLowerCase();
  }
  public toUpperCase() {
    return this.text.toUpperCase();
  }
}
