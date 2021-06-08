import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    subTitle: DS.attr('string'),
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    location: DS.attr('string'),
    city: DS.attr('string'),
    activityType: DS.attr('string'),
    contentTitle: DS.attr('string'),
    contentDesc: DS.attr('string'),
    gallery: DS.hasMany('image'),
    attachments: DS.hasMany("report"),
    agendas: DS.hasMany("zone"),
    
    logo: DS.belongsTo('image'),
    logoOnTime: DS.belongsTo('image'),
    partners: DS.hasMany('cooperation'),
    language: DS.attr('number')

});
