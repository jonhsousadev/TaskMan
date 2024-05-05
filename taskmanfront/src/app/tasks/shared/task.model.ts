export class Task {
  constructor(
    public _id?: string,
    public title?: string,
    public completed?: boolean,
    public assignedToUser?: string,
    public createdByUser?: string,
  ) {
    
  }
}