const Campground = require('./models/campground')
const mongoose = require('mongoose')

const campgrounds = [{
        title: "Cheney Reservoir",
        price: 299,
        description: "Located in windy central Kansas, the lake offers spectacular sailing opportunities and hosts national sailing regattas It’s a breathtaking sight to see more than 100 multicolored sailboats on the lake at one time. The lake is also known for wind-surfing opportunities. The Ninnescah Sailing Center on the West Shore Area is the 'headquarters' for sailing at Cheney and the marina offers supplies and services for boaters and anglers.",
        location: 'Cheney'
    },
    {
        title: 'Cedar Bluff Reservoir',
        price: 250,
        description: "The more than 14,000 acres of water and wildlife area make the Cedar Bluff State Park an excellent destination for campers, hunters, anglers and year-round explorers. And, they don't call it Cedar Bluff for nothing! For a stunning view of the area, drive to the top of the 150-foot tall, cedar-covered limestone bluffs on the south side of the lake.",
        location: 'Ellis'
    }
]

Campground.insertMany(campgrounds)
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })