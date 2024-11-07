require('dotenv').config();
const server =require('http')
const fs =require('fs')

const port =process.env.PORT || 8080

const readfile=(res,path)=>{
  fs.readFile(path,'utf8',(err,data)=>{
    if(err){
      console.log(err)
    }else{
      res.end(data)
    }
  })
}

server.createServer((req,res)=>{
  const {method,url} =req

res.writeHead(200,{'Content-Type':'application/json',"access-control-allow-origin":'*'})

if(method==='GET' && url==='/ByModel'){
  const path ='./model.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/menu'){
  const path ='./menu.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/ByPrice'){
  const path ='./By Price.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/ByFuelType'){
  const path ='./By Fuel.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/ByCity'){
  const path ='./By City.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/ByBodyType'){
  const path ='./By Body Type.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/Banner'){
  const path ='./Bannerimages.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/RecentlyAdded'){
  const path ='./RecentlyAdded.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/TopRated'){
  const path ='./TopRated.json'
  readfile(res,path)
}
else if(method==='GET' && url==='/Viewall'){
  const path ='./View all.json'
  readfile(res,path)
}
else if(method==='GET'){
 const urlarray =url.split('/')
  const file =urlarray[1]
  const itemtofind = parseInt(urlarray[2])
  let itemtosend
  let object

  fs.readFile(`${file}.json`,'utf8' ,(e,d)=>{
    if(e){
      console.log(e)
    }
    else{
    object =JSON.parse(d)//  object is now object containing list array
    }
    object.list.forEach((i)=>{
      if(i.id==itemtofind){
        itemtosend= JSON.stringify(i)
        res.end(itemtosend)
      }
    })
  })
}
else{
  res.end("page not Found")
}
}).listen(port,()=>{
  console.log(`Server has been started on http://localhost:${port}`)
})

