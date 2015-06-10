import DS from 'ember-data';

var RealmModel = DS.Model.extend({
    label: DS.attr('string'),
    width: DS.attr('number'),
    height: DS.attr('number'),
    places: DS.hasMany('place', {async: true}),
});


RealmModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            label: 'Realm 1',
            width: 100,
            height: 100,
            places: [1,2],
        },
        {
            id: 2,
            label: 'Realm 2',
            width: 200,
            height: 200,
            places: [1,2],
        }
    ]
});

export default RealmModel;
