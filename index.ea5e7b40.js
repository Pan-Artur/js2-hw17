const e=e=>fetch(`https://api.allorigins.win/get?url=https://pixabay.com/api?key=48225405-5dd56fa809ed0a2375f53541a&q=car&image_type=photo&page=${e}&per_page=12`).then(e=>e.json()).then(e=>(console.log(JSON.parse(e.contents).hits),JSON.parse(e.contents).hits)),t=document.querySelector(".gallery-button");let a=1;const n=e=>{let t=document.querySelector(".gallery");t.innerHTML="",e.forEach(e=>{let a=document.createElement("li");a.innerHTML=`
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></img>
        `,t.append(a)})};t.addEventListener("click",()=>{e(a).then(e=>{n(e),a+=1})}),e(1).then(e=>{n(e)});
//# sourceMappingURL=index.ea5e7b40.js.map
