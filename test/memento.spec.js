describe('memento', function() {
    var user;

    beforeEach(function() {
        user = new Originator('skullbocks', 'james');
    });

    it('make originator', function() {
        expect(user.id).toBe('skullbocks');
        expect(user.nick).toBe('james');
    });

    it('save', function() {
        user.save();
        expect(user.id).toBe('skullbocks');
    });

    it('restore', function() {
        user.id = 'kkkk';
        user.restore();
        expect(user.id).toBe('skullbocks');
    });
});