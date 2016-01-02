import {User} from './user';

describe('User', () => {
    it('has name given in the constructor', () => {
        let user = new User(1, 'Super Cat');
        expect(user.name).toEqual('Super Cat');
    });
    it('has id given in the constructor', () => {
        let user = new User(1, 'Super Cat');
        expect(user.id).toEqual(1);
    });
});