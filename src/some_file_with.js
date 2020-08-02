const cats = document.querySelector('.cats');
const dogs = document.querySelector('.dogs');
const parrots = document.querySelector('.parrots');

console.log('%O', cats)


const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})

const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')

const ES = new EventSource(url, header)


ES.onerror = error => {
    ES.readyState ? cats.textContent = "Some error" : null;
}

ES.onmessage = message => {
    let data_p=JSON.parse(message.data);
    let l00=data_p.cats+data_p.dogs+data_p.parrots;
    
    // console.log(data_p)
    
    perc_cat=Math.ceil(data_p.cats/l00*100);
    perc_dogs=Math.ceil(data_p.dogs/l00*100);
    perc_parrots=Math.ceil(data_p.dogs/l00*100);


    
  
    cats.style.cssText = `width: ${perc_cat}%;`
    cats.textContent = `cats-${data_p.cats}`

    dogs.style.cssText = `width: ${perc_dogs}%;`
    dogs.textContent = `dogs-${data_p.dogs} `

    parrots.style.cssText = `width: ${perc_parrots}%;`
    parrots.textContent = ` parrots-${data_p.parrots} `
}