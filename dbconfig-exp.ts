export const mongoConfig = {
  user: "",
  pass: "",
  name: "",
  host: "",
  port: 3000,
  getLink: function() {
    return `mongodb://${this.user}:${this.pass}@${this.host}:${this.port}/${this.name}`;
  }
};
