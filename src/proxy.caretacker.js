/**
 * Created by kyungwookmin on 2015-12-07.
 */
function Origin() {
    this.prop = {};
}

function clone(obj) {
    var key,
        result = {};
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

Origin.prototype.save = function() {
    if(!this.prop) return;
    if(!this.stack) this.stack = [];
    this.stack.push(clone(this.prop));
};

Origin.prototype.restore = function() {
    var prop = this.stack && this.stack.pop();
    if(!prop) return;
    this.prop = prop;
};

function Care(id, nick) {
    this.constructor.call(this);
    this.prop.id = id;
    this.prop.nick = nick;
}

Care.prototype = new Origin();



