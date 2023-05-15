var m=(...p)=>{
const d=document;
if(p.length===0)return;
const ty=typeof p[0];
let o={};
if(["string","object"].includes(ty)){
  if(ty==="string"){
    o.m=p[0];
  }else{
    o=p[0];
  }
}
if(o===null)return;
if(typeof o.g==="string"){
  try{
    const q=d.querySelectorAll(o.g),
    l=q.length;
    let g=false;
    if(l===0)return g;
    q.forEach((item)=>{
      g=item;
      if(typeof o.i==="string"){
        g.setAttribute("id",String(o.i));
      }
    });
    return g;
  }catch(err){return;}
}
let e;
if(typeof o.m==="string"){
  if(/^[a-z]+$/.test(o.m)!==true)return;
  e=d.createElement(o.m);
}
if(typeof o.i==="string"){
  e.setAttribute("id",String(o.i));
}
if(typeof o.t==="string"){
  e.appendChild(d.createTextNode(String(o.t)));
}
if(typeof o.x==="object"){
  Object.keys(o.x).forEach((key)=>{e.setAttribute(key,o.x[key]);});
}
if(p.length===1)return e;
if(typeof p[1]==="string"){
  try{
    const q=d.querySelectorAll(p[1]),
    l=q.length;
    if(l===0)return false;
    q.forEach((item,key)=>{
      if(key+1===l){
        item.appendChild(e);
      }else{
        item.appendChild(e.cloneNode(true));
      }
    });
  }catch(err){return;}
}
return e;
};
