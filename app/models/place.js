import DS from 'ember-data';

var PlaceModel = DS.Model.extend({
    label: DS.attr('string'),
    x: DS.attr('number'),
    y: DS.attr('number'),
    type: DS.attr('string'),
    jsonData: DS.attr('string'),
    realm: DS.belongsTo('realm'),

    placeData: function() {
        return JSON.parse(this.get('jsonData'));
    }.property('jsonData')
});

PlaceModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            label: 'Place 1',
            x: 100,
            y: 200,
            type: 'place-training',
            jsonData: JSON.stringify({
                activities: [
                    {
                        label: 'songs'
                    },
                    {
                        label: 'articulation'
                    },
                    {
                        label: 'rhythmic motion'
                    }
                ]
            })
        },
        {
            id: 2,
            label: 'Place 2',
            x: 200,
            y: 200,
            type: 'place-dummy',
        }
    ]
});

export default PlaceModel;
