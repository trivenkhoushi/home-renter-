exports.handler404=(req,res)=>{
res.status(404).render('404',{Pagetitle:'page not found'})}