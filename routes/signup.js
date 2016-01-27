var User=require('./dbSchema');

exports.addUser=function(req,res,done){
	
	
	User.findOne({'email' :  req.body.email},function(err,user){
		if(user){
			console.log("User already exists with email "+user.email);
			//done(null,user);
				
		if(err){
			done(err);
		}		
		}else{
			var testUser= new User()
			testUser.first_name=req.body.firstName;
			testUser.last_name= req.body.lastName;
			testUser.email=req.body.email;
				testUser.save(function(err,data){
					if (err) console.log(err);
					else console.log('Saved in database');
				})
		}
			
			//done(err)
		//console.log(user.first_name)
	})
	
	
	
		res.redirect('/');
}