(async()=>{const a="https://jsonplaceholder.typicode.com",s=await fetch(`${a}/users/1`),t=await fetch(`${a}/users/2`),o=await fetch(`${a}/users/3`),e=await s.json(),c=await t.json(),i=await o.json();console.log(e,c,i)})();
//# sourceMappingURL=index.7844e99e.js.map
