import { ToLowerCaseStream } from './toLowerCase.stream';
export class StreamFactory {
  private streams = {
    toLowerCase: ToLowerCaseStream
  };

  public getStream(name: string) {
    const streamClass = this.streams[name];
    const stream = new streamClass();
    return stream;
  }

  public getStreamsChain(names: string[]) {
    const streams = names.map(streamName => {
      const streamClass = this.streams[streamName];
      const stream = new streamClass();
      return stream;
    });
    return streams;
  }
}
