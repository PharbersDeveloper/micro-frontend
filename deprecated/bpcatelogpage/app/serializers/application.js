import DS from "ember-data"
import { dasherize, camelize } from "@ember/string"
import { pluralize, singularize } from "ember-inflector"
import { inject as service } from "@ember/service"

export default DS.JSONAPISerializer.extend( {
	// meta: service( "meta-management" ),

	modelNameFromPayloadKey( key ) {
		return singularize( dasherize( key ) )
	},
	payloadKeyFromModelName( modelName ) {
		const key = modelName

		return pluralize(  key  )
	},
	keyForAttribute( key ) {
		// return key
		return dasherize(key).toLowerCase()
	},
	keyForRelationship( key ) {
		return key
	}
	// normalizeQueryResponse( store, primaryModelClass, payload, id, requestType ) {
	// 	this.meta.set( "responseMeta", payload["meta"] )
	// 	// console.log("shenqide payload", store, primaryModelClass, payload, id, requestType)
	// 	return this._super( store, primaryModelClass, payload, id, requestType )
	// }
} )
