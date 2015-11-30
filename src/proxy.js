var User = (function() {
    var url = 'data/info/',
        User = function(id) { this.id = id;},
        load = function(target) {
            target._isLoaded = 'loading';
            $.ajax({
                url: url+target.id
            })
                .done(function(v) {
                    var key;
                    for(key in v = JSON.parse(v)) target['_'+key] = v[key];
                    target._isLoaded = 'loaded';
                });
        };
    Object.defineProperties(User.prototype, {
        _nick: {value: '---'},
        _age: {value: '---'},
        _email: {value: '---'},
        _isLoaded: {value: 'ready'},
        nick: {get: function() {
            if(this._isLoaded == 'ready') load(this);
            return this._nick;
        }},
        age: {get: function() {
            if(this._isLoaded == 'ready') load(this);
            return this._age;
        }},
        email: {get: function() {
            if(this._isLoaded == 'ready') load(this);
            return this._email;
        }}
    });
    return User;
})();
