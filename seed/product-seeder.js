let dbconfig=require('../dbconfig/db_connect');

dbconfig.connect(function (error) {
    if(error){
        console.log('db connection error');
        process.exit(1);
    }
    else{
        console.log('connected successfully');


dbconfig.get().collection('product').insertMany([{
    imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title:'Gothic video game',
    description:'Awesome game',
    price:'$20'
},{
    imagePath:'https://static.posters.cz/image/750/naptarak/super-mario-i62795.jpg',
    title:'supermario',
    description:'good game',
    price:'$10'
},{
    imagePath:'https://static.posters.cz/image/750/naptarak/super-mario-i62795.jpg',
    title:'PUBG mobile',
    description:'awesome game',
    price:'$22'
},
    {
        imagePath:'https://static.posters.cz/image/750/naptarak/super-mario-i62795.jpg',
        title:'super mario',
        description:'nice game',
        price:'$21'
    },{
        imagePath:'https://static.posters.cz/image/750/naptarak/super-mario-i62795.jpg',
        title:'PUBG mobile',
        description:'awesome game',
        price:'$22'
    },{
        imagePath:'https://static.posters.cz/image/750/naptarak/super-mario-i62795.jpg',
        title:'PUBG mobile',
        description:'awesome game',
        price:'$22'
    }
]}
    }
});