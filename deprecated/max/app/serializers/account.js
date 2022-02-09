import DS from "ember-data";
import { dasherize, camelize } from "@ember/string"

export default DS.JSONAPISerializer.extend({
    //patch方法 把属性名变为驼峰式,只发送修改过的字段
    serialize(snapshot, options) {
        let json = this._super(...arguments);
        //删除attributes的所有字段
        for(let key in json['data']['attributes']){
            delete json['data']['attributes'][key];
        }
        //把修改的字段添加进来
        for(let key in snapshot.changedAttributes()) {
            json['data']['attributes'][key] = snapshot.changedAttributes()[key][1]
        }

        return json
	}
})
