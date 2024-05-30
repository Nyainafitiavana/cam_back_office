import {Injectable} from "@angular/core";
import {ILogin} from "./login.interface";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  postLogin(loginData: ILogin) {
    console.log(loginData);
  }
}
