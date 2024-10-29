

let features=document.getElementById("Features")


fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res => res.json())
    .then(res => Features(res));

function Features(res) {
    const data = res.slice(-4);

    let content = `
        <p>SOME QUALITY ITEMS</p>
        <h2>Featured Books</h2>
        <div class="d-flex flex-row flex-wrap  justify-content-center align-items-center gap-1 mt-4">`;

    for (let index = 0; index < data.length; index++) {
        content += `
            <div class="d-flex flex-column justify-content-center align-items-center width">
                <img src='${data[index].simple_thumb}' class="w-50" />
                <h4>${data[index].title}</h4>
                <h6>${data[index].author}</h6>
            </div>`;
    }


    content += `</div>`;

    features.innerHTML = content;
}

fetch ('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
            .then(res2 => res2.json())
            
            .then(res2 => FeaturesBest(res2))
            

 
function FeaturesBest(res2){
    console.log(res2)

    let content2=`
    <div class="d-flex flex-row align-items-center justify-content-center  mt-5 w-50">
				
            <img src='${res2.cover}' class="w-100 "/>
                <div class="d-flex flex-column  align-items-around justify-content-around ">
                    <h3 class="pt-3 pb-5 border1">Best Selling Book</h3>
                    <h6 class="pt-5 pb-1"><span>by </span>${res2.authors[0].name}</h6>
                    <h4 class="pt-1 pb-5">${res2.title}</h4>
                    <p class="pt-5 pb-3">${res2.fragment_data.html}</p>
                
                </div>
    </div>
    `
    features.innerHTML += content2;

}
let popular=document.getElementById("Popular")

fetch('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
            .then(res3 => res3.json())

            .then(res3 => Popular(res3));

      
function Popular(res3)
            {
                const data2=res3.slice(0,8);
            
                let popular1=`
                    <p class="mt-5">SOME QUALITY ITEMS</p>
				<h2>Popular Books</h2>
				<ul class="d-flex flex-row justify-content-between list-unstyled gap-5 m-auto " id="PopularUl">
					<li class="item active">All Genre</li>
					<li class="item">Business</li>
					<li class="item" >Technology</li>
					<li class="item" >Romantic</li>
					<li class="item" >Adventure</li>
					<li class="item" >Fictional</li>

				</ul>

				<div class="d-flex flex-row flex-wrap  justify-content-center align-items-center gap-1 mt-4">
                    `;
                    for (let index2=0; index2 <data2.length ; index2++){
                    popular1 +=`
					<div class="d-flex flex-column justify-content-center align-items-center width">
						<img src='${data2[index2].simple_thumb}' class="w-25  mb-5 mt-4"/>
                    	<h4>${data2[index2].title}</h4>
                    	<h6>${data2[index2].author}</h6>
					</div>
                    `
                };
                   
				popular1 +=`</div>`
                    
                popular.innerHTML =popular1;
                   }

