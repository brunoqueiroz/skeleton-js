var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['model'], function(Model) {
  var TodoModel;
  TodoModel = (function(_super) {

    __extends(TodoModel, _super);

    function TodoModel() {
      TodoModel.__super__.constructor.apply(this, arguments);
    }

    TodoModel.prototype.defaults = {
      text: null,
      dateCreated: null,
      done: false
    };

    return TodoModel;

  })(Model);
  return TodoModel;
});
