/**
 * Created by kyungwookmin on 2015-12-07.
 */
function Origin() {
    this.prop = {};
}

function clone(obj) {
    if(obj === null && typeof obj !== 'object') return false;
    var key,
        result = {};
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

Origin.prototype.save = function(key) {
    if(!this.prop) return;
    if(!this.stack) this.stack = {};
    this.stack[key] = clone(this.prop);
};

Origin.prototype.restore = function(key) {
    var prop = this.stack && this.stack[key];
    if(!prop) return;
    this.prop = prop;
};

Origin.prototype.delete = function(key) {
    if(this.stack && this.stack[key]) return delete this.stack[key];
};

function Care(id, nick) {
    this.constructor.call(this);
    this.prop.id = id;
    this.prop.nick = nick;
}

Care.prototype = new Origin();
Care.prototype.set = function(id, nick) {
    this.prop.id = id;
    this.prop.nick = nick;
};

//test


