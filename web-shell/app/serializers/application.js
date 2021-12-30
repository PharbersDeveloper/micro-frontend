import { dasherize, camelize } from "@ember/string"
import { singularize, pluralize } from "ember-inflector"
import JSONAPISerializer from "@ember-data/serializer/json-api"

export default class ApplicationSerializer extends JSONAPISerializer {
	modelNameFromPayloadKey(key) {
		return singularize(dasherize(key))
	}

	payloadKeyFromModelName(modelName) {
		return pluralize(camelize(modelName))
	}

	keyForAttribute(key) {
		return dasherize(key).toLowerCase()
	}

	keyForRelationship(key) {
		return key
	}
	// extractAttributes(modelClass, resourceHash) {
	// 	let keys = Object.keys(resourceHash.attributes)
	// 	let obj = {}

	// 	keys.forEach(ele => {
	// 		let k = camelize(ele)
	// 		obj[k] = resourceHash.attributes[ele]
	// 		if (ele === "start-date" || ele === "end-date" || ele === "date" ) {
	// 			obj[k] = Date.parse(resourceHash.attributes[ele])
	// 		}
	// 	})
	// 	return obj
	// }
}
