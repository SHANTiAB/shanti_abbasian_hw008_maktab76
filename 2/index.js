a=JSON.parse((localStorage.getItem("all_users")));
a.push({name: username, password: password});
localStorage.setItem('name',JSON.stringify(a));
for(var i=0; i<a.length; i++)
  {
   var li = document.createElement("li");
   li.innerHTML=a[i]['name'];
   document.getElementById("listuser").appendChild(li);
  }                   