
function Stack() {
    this.stack = [];
}

Stack.prototype.push = function(data) {
    return this.stack.push(data);
};

Stack.prototype.pop = function() {
    if(this.stack.length>0) {
        return this.stack.pop();
    }
};

//ecma5로 바꾸면 어떻게?
Originator.prototype = new Stack();
Originator.prototype.constructor = Originator;


function Originator(id, nick) {
    this.id = id;
    this.nick = nick;
}

Originator.prototype.save = function() {
    this.stack.push({ id: this.id, nick: this.nick });
};

Originator.prototype.restore = function() {
    var memento = this.stack.pop();
    if(!memento) return;
    this.id = memento.id;
    this.nick = memento.nick;
};
