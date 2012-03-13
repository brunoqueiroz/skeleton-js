define ['subscriber'], (Subscriber) ->

	'use strict'

	###
	Collection Class
	###
	class Collection extends Backbone.Collection

		# Mix with Subscriber
		_(Collection.prototype).defaults Subscriber

		#
		# Properties
		disposed: false

		#
		# Constructor
		constructor: ->
			super

			@initialize()

		#
		# Initialize method
		initialize: ->

		#
		# Dispose method
		dispose: ->
			# Fire an event to notify associated views
			@trigger 'dispose', this

			# Unbind all global event handlers
			@unsubscribeAllEvents()

			# Finished
			@disposed = true

	Collection