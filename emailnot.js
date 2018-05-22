var express=require('express');
var app=express();
var bodyParser = require('body-parser');


var smtpTransport = require('nodemailer-smtp-transport');
var nodemailer = require('nodemailer');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


module.exports = function (context, req) {
    
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req.body.commits[0]);
   context.log(req.body.commits[0].author.username);
function mail(mailid,branchname,team,callback){

var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: 'harshitha.sikhakolli@gmail.com', // my mail
        pass: '8985815296'
    }
}));
var mailOptions = {
    from: 'Innovation labs <innovationmss@gmail.com>', // sender address 
    to: mailid, // list of receivers 
    subject: 'Website deployment', // Subject line 
    text:''+ req.body.commits[0].message+' Commit', // plaintext body 
    html: ' You have a '+ req.body.commits[0].message.split('\n\n')[0]+' commit on '+branchname +'branch'+" "+ req.body.commits[0].author.username +' from '+team+' <br><br>'+ req.body.commits[0].message.split('\n\n')[1]+' <br><br> <div id="MAC_OUTLOOK_SIGNATURE" style=""><b style="box-sizing: border-box;"> <table style="box-sizing: border-box; border-collapse: collapse; border-spacing: 0px; max-width: 100%; background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: lato, sans-serif; font-size: 14px;"><tbody style="box-sizing: border-box;"><tr style="box-sizing: border-box;"><td colspan="3" style="box-sizing: border-box; padding: 0px;"><hr style="box-sizing: content-box; height: 0px; margin-top: 20px; margin-bottom: 20px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: solid; border-top-color: rgb(238, 238, 238);"></td></tr><tr><td style="box-sizing: border-box; padding: 0px;" align="left"><img style="box-sizing: border-box; border: 0px none; vertical-align: middle;" src="http://www.miraclesoft.com/images/newsletters/miracle-logo-dark1.png" alt="loseimage" style="width:100px;height:100px;"></td><td style="box-sizing: border-box; padding: 0px;" width="80px"></td><td style="box-sizing: border-box; padding: 0px; font-family: calibri;" align="right"><img style="box-sizing: border-box; border: 0px none; vertical-align: middle;" src="http://www.miraclesoft.com/images/partner/Mlabs.png" alt="loseimage" style="width:100px;height:100px;"></td></tr></tbody></table>'
	
};

transport.sendMail(mailOptions, function(error, response){
		
     if(error){
            context.log(error);
        
     }else{
            context.log("Message sent" );
            callback("message");
      
         }
});


}
	
	if( req.body.commits[0].message.split('\n\n')[0] =='Dev'){
		
		var arr=[];
        var branchname="";
        var team="";
		context.log(req.body.ref.split("/"));
	var str=req.body.ref;
    var arr = str.split("/");
	
	 for(var i=0;i<arr.length;i++){
		 if(arr.length-1){
			 branchname=arr[arr.length-1];
             team='Development Team'
		 }
		 else{
			 context.log("no data");
		 }
		
		
	} 
	var maillist = [
  'gbalipalli@miraclesoft.com',
  'mkorrakuti@miraclesoft.com'
];
maillist.forEach(function (to, i , array) {
		//console.log(i);
	
	mail(to,branchname,team,function(response){
		
					context.log('You have a '+req.body.commits[0].message.split('\n\n')[0]+' commit on '+branchname +' From Marketing Team')
                    context.done();
				})
		
	
	})
	}
    else if(req.body.commits[0].message.split('\n\n')[0] =='Review'){
        
		var arr=[];
        var branchname="";
        var team="";
		context.log(req.body.ref.split("/"));
	var str=req.body.ref;
    var arr = str.split("/");
	
	 for(var i=0;i<arr.length;i++){
		 if(arr.length-1){
			 branchname=arr[arr.length-1];
             team="Marketing Team";
		 }
		 else{
			 context.log("no data");
		 }
		
		
	} 
	
	var maillist1 = [
  'gbalipalli@miraclesoft.com',
  'mkorrakuti@miraclesoft.com'
];
maillist1.forEach(function (to, i , array) {
		console.log(maillist1[i]);
		console.log(to);
	mail(to,branchname,team,function(response){
		
					context.log('You have a '+req.body.commits[0].message.split('\n\n')[0]+' commit on '+branchname +' From Marketing Team')
                    context.done();
				})
    })
}
    else if(req.body.commits[0].message.split('\n\n')[0] =='Final'){
        
		var arr=[];
        var branchname="";
        var team="";
		context.log(req.body.ref.split("/"));
	var str=req.body.ref;
    var arr = str.split("/");
	
	 for(var i=0;i<arr.length;i++){
		 if(arr.length-1){
			 branchname=arr[arr.length-1];
             team="Marketing Team";
		 }
		 else{
			 context.log("no data");
		 }
		
		
	}
var maillist1 = [
  'gbalipalli@miraclesoft.com',
  'mkorrakuti@miraclesoft.com'
];
maillist1.forEach(function (to, i , array) {
		console.log(maillist1[i]);
		console.log(to);
	mail(to,branchname,team,function(response){
		
					context.log('You have a '+req.body.commits[0].message.split('\n\n')[0]+' commit on '+branchname +' From Development Team')
                    context.done();
				})
    })
	
	}
    
};