import DS from 'ember-data';

var PlaceModel = DS.Model.extend({
    label: DS.attr('string'),
    x: DS.attr('number'),
    y: DS.attr('number'),
    type: DS.attr('string'),
    realm: DS.belongsTo('realm'),
});

PlaceModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            label: 'Place 1',
            x: 10,
            y: 10,
            type: 'place-basic',
        },
        {
            id: 2,
            label: 'Place 2',
            x: 20,
            y: 20,
            type: 'place-dummy',
        }
    ]
});

export default PlaceModel;
