fetch("https://fakestoreapi.com/products").then((data)=>{
    //console.log(data);  //json format
    return data.json();   //convert to objects
}).then((objectdata)=>{
    //console.log(objectdata[0].title);
    let tableData="";
    objectdata.map((values)=>{
        tableData+=`
        <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });
    document.getElementById("table-body").innerHTML=tableData;

}).catch((err)=>{
    console.log(err);
})