const fileSystemWrite = text => {
  return new  Promise((resolve,reject)=>
  {
    setTimeout(() => {
      console.log("file is being written");
      console.log(text);
      resolve("sucess");
  });
  });
}
fileSystemWrite("mytext")
.then(status=>{
console.log(`file write operation :${status}!`);
});
