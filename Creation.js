
// Create a class for the Creation model
export class Creation {
    constructor(data) {
      this.user = data.user;
      this.task = data.task;
      this.uri = data.uri;
      this.attributes = data.attributes;
      this.createdAt = data.createdAt;
    }
  }