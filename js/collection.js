var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['subscriber'], function(Subscriber) {
  'use strict';
  /*
  	Collection Class
  */
  var Collection;
  Collection = (function(_super) {

    __extends(Collection, _super);

    _(Collection.prototype).defaults(Subscriber);

    Collection.prototype.disposed = false;

    function Collection() {
      Collection.__super__.constructor.apply(this, arguments);
    }

    Collection.prototype.dispose = function() {
      this.trigger('dispose', this);
      this.unsubscribeAllEvents();
      return this.disposed = true;
    };

    return Collection;

  })(Backbone.Collection);
  return Collection;
});
