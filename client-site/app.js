const main = document.querySelector('#main');
// main.innerHTML = `<a href="#" class='card bg-light rounded text-decoration-none'>
// <p style="color: white;" class="text-center">Device 1</p>
// </a>`;
console.log(main)
function getData(){
    
    fetch('https://my-all-works-server.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
        console.log();
        main.appendChild(showData(data));
    })
}
getData();

function showData(data){
    console.log(data);
    
    
    const row = document.createElement('div');
    row.className = "row py-4"

    data.forEach(d => {
        const div = document.createElement('div')
        div.className = 'col-lg-4 col-md-6 col-xs-6 my-3';
        div.innerHTML = `<a href="#${d.name}" class='card bg-white text-center p-2 bg-light rounded text-decoration-none text-dark shadow'>
            <h4>${d.name}</h4>
            <img style="height: 200px" class="img-fluid w-100 mx-auto" src="${d.img}" alt=""/>
        </a>`;
        row.appendChild(div);
    });
    console.log(row)
    return row;
}

document.getElementById('year-date').innerHTML = new Date().getFullYear();