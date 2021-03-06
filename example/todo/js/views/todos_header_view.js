var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['view', 'eventbus'], function(View, EventBus) {
  'use strict';
  var TodosHeaderView;
  TodosHeaderView = (function(_super) {

    __extends(TodosHeaderView, _super);

    function TodosHeaderView() {
      TodosHeaderView.__super__.constructor.apply(this, arguments);
    }

    TodosHeaderView.prototype.el = $("#todoapp header");

    TodosHeaderView.prototype.initialize = function() {
      TodosHeaderView.__super__.initialize.apply(this, arguments);
      this.delegate('keypress', '#new-todo', this.createTodo);
      return this.delegate('focusout', '#new-todo', this.createTodo);
    };

    TodosHeaderView.prototype.createTodo = function(event) {
      var text;
      text = $(event.target).val();
      if (!text || (event.type === 'keypress' && event.keyCode !== 13)) return;
      EventBus.publish('Todo.Create', text);
      return $(event.target).val('');
    };

    return TodosHeaderView;

  })(View);
  return TodosHeaderView;
});
