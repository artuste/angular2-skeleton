import {User} from './user';
import {USERS} from './mock-users';
import {Injectable} from 'angular2/core';

@Injectable()
export class UserService {
    getUsers() {
        return Promise.resolve(USERS);
    }

    getUsersSlowly() {
        return new Promise<User[]>(resolve =>
            setTimeout(()=>resolve(USERS), 2000)
        );
    }
}