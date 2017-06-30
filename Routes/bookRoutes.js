var express=require('express');

var routes=function(Book){
    var bookRouter=express.Router();
    bookRouter.route('/Books')
        .post(function (req,res){
            var book=new Book(req.body);

            book.save();
            res.status(201).send(book);
        })

        .delete(function (req,res) {
            Book.find({},function (err,books) {
                books.remove();
            })

            })

        .get(function(req,res) {

            var query={};
            if (req.query.genre){
                query.genre=req.query.genre;
            }
            Book.find(query,function (err, books) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(books);

            });
        });



    bookRouter.use('/Books/:bookId', function(req,res,next){
        Book.findById(req.params.bookId,function (err, book) {
            if (err){
                res.status(500).send(err);
            }

            else if (book){
                req.bookees= book;
                next();
            }

            else{
                res.status(404).send("No book found");
            }


        });
    });
    bookRouter.route('/Books/:bookId')
        .get(function(req,res) {
            res.json(req.bookees);

        })
        .put(function (req,res) {

            req.bookees.title=req.body.title;
            req.bookees.author=req.body.author;
            req.bookees.genre=req.body.genre;
            req.bookees.read=req.body.read;
            req.bookees.save(function(err){
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.bookees);
            });


        })
        .patch(function (req,res) {
            if (req.body._id)
                delete req.body._id;

            for (var g in req.body){
                req.bookees[g]=req.body[g];
            }
            req.bookees.save(function(err){
                if (err)
                    res.status(500).send(err);
                else
                    res.json(req.bookees);
            });
        })
        .delete(function (req,res) {
            req.bookees.remove(function (err) {
                if (err){
                    res.status(500).send(err);
                }
                else{
                    res.status(204).send("Removed");
                }
            })
        });



    return bookRouter;
    };
module.exports=routes;