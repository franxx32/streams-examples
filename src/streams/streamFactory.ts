import { TextEditorStream } from './textEditor.stream';
export class StreamFactory {
  private streams = {
    toLowerCase: {
      stream: TextEditorStream,
      args: ['toLowerCase']
    },
    toUpperCase: {
      stream: TextEditorStream,
      args: ['toUpperCase']
    },
    removeSpaces: {
      stream: TextEditorStream,
      args: ['removeSpaces']
    }
  };

  public getStream(name: string) {
    const streamObj = this.streams[name];
    const streamClass = streamObj.stream;
    const stream = new streamClass({}, ...streamObj.args);
    return stream;
  }

  public getStreamsChain(names: string[]) {
    const streams = names.map(streamName => this.getStream(streamName));
    return streams;
  }
}
