const server =require('http')
const fs =require('fs')
const path = require('path')

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

res.writeHead(200,{'Content-Type':'application/json',"access-control-allow-origin":'http://localhost:3000'})

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
}).listen(8080,()=>{
  console.log("server has been started on http://localhost:8080")
})

