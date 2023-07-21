import { View } from "./View";
import { User, Userprops } from "../models/User";

export class UserShow extends View<User, Userprops> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>User Name: ${this.model.get("name")}</div>
            <div>User Age: ${this.model.get("age")}</div>
        </div>
        `;
  }
}