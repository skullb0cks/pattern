/**
 * Created by kyungwookmin on 2015-12-07.
 */
describe('memento', function() {
    var user;

    beforeEach(function() {
        user = new Care('skullbocks', 'james');
        user.save('state1');
        user.set('better', 'butter');
    });

    it('set', function() {
        expect(user.prop.id).toBe('better');
    });

    it('save', function() {
        user.save('state2');
    });

    it('restore', function() {
        user.restore('state2');
        expect(user.prop.id).toBe('better');
    });
});