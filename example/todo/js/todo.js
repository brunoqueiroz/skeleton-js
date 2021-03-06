var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['application', 'router', 'views/todos_header_view'], function(Application, Router, TodosHeaderView) {
  'use strict';
  var TodoApplication, app, appRouter;
  Backbone.sync = function(method, model, options) {
    var def, resp, store;
    def = $.Deferred();
    store = model.localStorage || model.collection.localStorage;
    switch (method) {
      case "read":
        resp = model.id ? store.find(model) : store.findAll();
        break;
      case "create":
        resp = store.create(model);
        break;
      case "update":
        resp = store.update(model);
        break;
      case "delete":
        resp = store.destroy(model);
    }
    if (resp) {
      def.resolve();
      options.success(resp);
    } else {
      def.fail();
      options.error("Record not found");
    }
    return def.promise();
  };
  TodoApplication = (function(_super) {

    __extends(TodoApplication, _super);

    function TodoApplication() {
      TodoApplication.__super__.constructor.call(this, 'TodoApplication');
    }

    TodoApplication.prototype.initializeControllers = function() {
      return new TodosHeaderView();
    };

    return TodoApplication;

  })(Application);
  app = new TodoApplication();
  appRouter = new Router();
  appRouter.match('', 'todo', 'index');
  appRouter.match('dashboard', 'todo', 'dashboard');
  appRouter.start();
});
