var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/mekan32';

mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', function(){
    console.log('Mongoose' + dbURI + ' adresindeki veritabanına bağlandı\n');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose bağlantı hatası\n: ' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose bağlantısı kesildi\n');
});

kapat = function(msg, callback) {
    mongoose.connection.close(function(){
        console.log('Mongoose kapatıldı\n ' + msg);
        callback();
    });
};

require('./mekansema');