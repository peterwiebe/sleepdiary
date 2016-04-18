import {Injectable} from "angular2/core";
import {User} from "./user.interface";
declare var Firebase: any;

@Injectable()
export class AuthService {
  signupUser(user: User) {
    const firebaseRef = new Firebase('https://sleepdiary.firebaseio.com/users/data.json');
    firebaseRef.createUser({
        email: user.email,
        password: user.password
    }, function(error, userData){
      if (error) {
          console.error(error);
      } else {
          console.log('User creation successful: ' + userData.uid)
      }
    });
  }

  signinUser(user: User) {
    const firebaseRef = new Firebase('https://sleepdiary.firebaseio.com/users/data.json');
    firebaseRef.authWithPassword({
        email: user.email,
        password: user.password
    }, function(error, authData) {
      if (error) {
          console.error(error);
      } else {
          console.log(authData)
      }
    });
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return false;
  }
}
