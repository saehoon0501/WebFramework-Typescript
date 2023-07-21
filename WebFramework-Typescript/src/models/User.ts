import { Attributes } from "./Attributes";
import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface Userprops {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<Userprops> {
  static buildUser(attrs: Userprops): User {
    return new User(
      new Attributes<Userprops>(attrs),
      new Eventing(),
      new ApiSync<Userprops>(rootUrl)
    );
  }

  static buildCollection(): Collection<User, Userprops> {
    return new Collection<User, Userprops>(rootUrl, (json: Userprops) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
