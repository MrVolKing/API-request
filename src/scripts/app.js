window.onload = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "b6b5851700821f61558b554177e522b99cdc1f83");
    
    fetch(
        'http://504080.com/api/v1/services/categories', 
        {
            method: 'GET',
            headers: myHeaders,
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log('result', result);

        const blockservices = document.getElementById('blockservices');
        
        result.data.forEach((item) => {
            let elem = document.createElement('div');
            elem.innerHTML = `
            <div class="content-center__services"><div class="content-center__imageservice"><img src="http:${item.icon}" alt=""></div>
            <div class="content-center__titleservice"><span class="content-center__descriptionservice">${item.title}</span></div></div>
            `;
            blockservices.appendChild(elem);
        })
    })
    .catch((err) => conole.error(err));

    fetch(
        'http://504080.com/api/v1/directories/enquiry-types', 
        {
            method: 'GET',
            headers: myHeaders,
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        console.log('result', result);

        const select = document.getElementById('select');
        
        result.data.forEach((item) => {
            let elem = document.createElement('option');
            elem.innerHTML = `
            ${item.name}
            `;
            select.appendChild(elem);
        })
    })
    .catch((err) => conole.error(err));

}





require('./common/post');