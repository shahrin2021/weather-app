// api.openweathermap.org/data/2.5/weather?q={searchCity}&appid=674f56d23ad698925aa628a4b77f8491;
console.log('this is abula marka')
document.getElementById('input-btn').addEventListener('click',function(){
    inputValue()
})

const inputValue= () =>{
    const inputField= document.getElementById('searchInput')
    const searchCity= inputField.value;
    lodedata(searchCity)
    inputField.value="";
}


const lodedata = async searchCity=>{
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=674f56d23ad698925aa628a4b77f8491`;
    const res = await fetch(url);
    const data= await res.json();
    console.log(url)
    showdata(data)
}

const style = [
    'border-2', 'border-white', 'shadow', 'bg-white','p-5','text-center',
]


const showdata= temp=>{
    const showData= document.getElementById('show-tem')
    showData.textContent=""
    const div= document.createElement('div');
    div.classList.add(...style)
    const tempo = Math.round(`${temp.main.temp-273.15}`)
    const iconUrl = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`

  div.innerHTML=`
        <img src="${iconUrl}" >
        <h2> ${tempo}<span> o C</span></h2>
        <h5>Cityname : ${temp.name} </h5>
        <h3>Country name : ${temp.sys.country}</h3>
        <h6>weather : ${temp.weather[0].main} </h6>

  
  `
  showData.appendChild(div)
}