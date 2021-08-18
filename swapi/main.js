let button=document.getElementById('main-btn')
let baseURL="https://swapi.dev/api/planets/2"

function yellString(){
  console.log("STRING")
}

const getResidents = () => axios.get(baseURL).then((res)=>{
  let residentArr=res.data.residents
  for (let i = 0; i<res.data.residents.length;i++){
      axios.get(residentArr[i]).then((res)=>{
        let character=res.data.name
        let item=document.createElement('h2')
        item.textContent=`Character: ${character}`
        document.body.append(item)
    })
  }
}
).catch((e)=>{console.log("error")})


button.addEventListener("click", getResidents)
