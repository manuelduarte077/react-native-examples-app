import Realm, { BSON } from "realm";

export class Task extends Realm.Object {
  _id;
  description;
  isComplete;
  createdAt;

  static schema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      createdAt: {
        type: "date",
        default: new Date(),
      },
      isComplete: {
        type: "bool",
        default: false,
        indexed: true,
      },
    },
  };

  constructor(realm, description) {
    console.log("in constructor");
    super(realm, {
      _id: new BSON.ObjectID(),
      description,
    });
  }
}
