import DS from 'ember-data';

var RealmModel = DS.Model.extend({
    label: DS.attr('string'),
    width: DS.attr('number'),
    height: DS.attr('number'),
    imageURL: DS.attr('string'),
    places: DS.hasMany('place', {async: true}),
});


RealmModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            label: 'Realm 1',
            width: 931,
            height: 300,
            imageURL: '/ignore/chinese-landscape.jpg',
            places: [1,2],
        },
        {
            id: 2,
            label: 'Realm 2',
            width: 931,
            height: 300,
            imageURL: '/ignore/chinese-landscape.jpg',
            places: [1,2],
        }
    ]
});

export default RealmModel;
