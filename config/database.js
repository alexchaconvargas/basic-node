module.exports = {
    url : 'mongodb://alex:alex@localhost:27017/express'
};



/*
 -------	CREAR USUARIO EN LA BBDD  -----------

 Recordar antes hacer use <nombreDB> para que el usuario sea de esa BBDD
db.createUser(
   {
     user: "alex",
     pwd: "alex",
     roles:
       [
         { role: "readWrite", db: "express" }
       ]
   }
)*/