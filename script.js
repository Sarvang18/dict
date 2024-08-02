const input = document.querySelector('input')
const searchBTN = document.querySelector('.searchBox>button')

const nm1=document.querySelector('#nm1')
const nm2=document.querySelector('#nm2')
const vm1=document.querySelector('#vm1')
const vm2=document.querySelector('#vm2')

// input.value update ho rha hai
// par ek baar script run hoo gayi toh ho gayi
// word update nhi hoga


searchBTN.addEventListener('click',(evt) =>{

    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+ input.value

    async function fetchData(url){

        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
    
        let mean = data[0].meanings
        let nounMean1 = mean[0].definitions[0].definition
        let nounMean2 = mean[0].definitions[1].definition

        let verbMean1 = mean[1].definitions[0].definition
        let verbMean2 = mean[1].definitions[1].definition
        console.log(nounMean1);
        console.log(verbMean2);

        nm1.innerText=nounMean1
        nm2.innerText=nounMean2
        vm1.innerText=verbMean1
        vm2.innerText=verbMean2
    }
    
    fetchData(url)
})


