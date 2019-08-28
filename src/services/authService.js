import { BehaviorSubject } from 'rxjs';
import { getFromStorage, removeFromStorage, setInStorage } from '../util/Util';

const USER_STORAGE_KEY = 'tindev_user';

const currentLoggedDeveloper= new BehaviorSubject(
  JSON.parse(getFromStorage(USER_STORAGE_KEY))
);

const login = (user) => {
  setInStorage(USER_STORAGE_KEY, JSON.stringify(user));
  currentLoggedDeveloper.next(user);
}

const logout = () => {
  removeFromStorage(USER_STORAGE_KEY);
  currentLoggedDeveloper.next(null);
};

export const authService = {
  login,
  logout,
  currentUser: currentLoggedDeveloper.asObservable(),
  get currentUserValue() {
    return currentLoggedDeveloper.value
  }
};