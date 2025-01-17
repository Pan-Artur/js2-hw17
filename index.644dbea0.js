const e=e=>fetch(`https://pixabay.com/api?key=48225405-5dd56fa809ed0a2375f53541a&q=car&image_type=photo&page=${e}&per_page=12`).then(e=>e.json()).then(e=>e.hits),t=document.querySelector(".gallery-button");let a=1;const l=e=>{let t=document.querySelector(".gallery");t.innerHTML="",console.log(e),e.forEach(e=>{let a=document.createElement("li");a.innerHTML=`
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></img>
        `,t.append(a)})};t.addEventListener("click",()=>{l(e(a)),a+=1});
//# sourceMappingURL=index.644dbea0.js.map
