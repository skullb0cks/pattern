/**
 * Created by kyungwookmin on 2015-12-07.
 */
describe('memento', function() {
    var user;

    beforeEach(function() {
        user = new Care('skullbocks', 'james');
        user.save();
    });

    it('restore', function() {
        user.prop.id = 'kkkk';
        user.restore();
        expect(user.prop.id).toBe('skullbocks');
    });
});