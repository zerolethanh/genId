var u=t=>crypto.getRandomValues(new Uint8Array(t)),U=(t,n,e)=>{let o=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*o*n/t.length);return(r=n)=>{let i="";for(;;){let c=e(s),l=s;for(;l--;)if(i+=t[c[l]&o]||"",i.length===r)return i}}},p=(t,n=21)=>U(t,n,u);var m="0123456789",C="ABCDEFGHIJKLMNOPQRSTUVWXYZ",T="abcdefghijklmnopqrstuvwxyz",h=`${m}${C}${T}`,f=()=>{let t=new Date,n=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),e=new Date(n),o=`${e.getUTCFullYear()}`.slice(-2),s=a(e.getUTCMonth()+1),r=a(e.getUTCDate()),i=a(e.getUTCHours()),c=a(e.getUTCMinutes()),l=a(e.getUTCSeconds());return`${o+s+r}T${i}${c}${l}`},a=t=>+t>10?`${t}`:`0${t}`,g={size:5,prefix:"",date:!1,randomSet:h},d=t=>{let{size:n,prefix:e,date:o,randomSet:s}={...g,...t},r=p(s,n);return o?`${e}${f()}_${r()}`:`${e}${r()}`},D=t=>{let n={...g,...t,date:!0};return d(n)},M=(t,n)=>{let e={...g,...n,date:!0,prefix:t};return d(e)};export{D as genDateId,M as genDateIdPrefix,d as genId};
