let plist = [
    new Product(1, "but thien long", 5000, "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQADTWfHB8t8bW9L5TGsCFHcqltBGILqP40c7sy_JB7ToCBqz0uDKX-Ih10ANHickjoR1NnLPp-qTV3FKxSpgO4XWabY-3tMzc&usqp=CAc"),
    new Product(2, "bang", 150000, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT45iGBF_D2CIRBRgjjCdC1T02A3g8X8c3lLeicMZlohUH9xFwUuKEV567ogKjJ-3LCaDMG7oaTGgKInV1Inq0NxT-oD2HoD-jl&usqp=CAc"),
    new Product(3, "Xoa bang", 15000, "data:image/jpeg;base64,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"),
]
//hien thi danh sach
//showListProduct
//lap tao bang hien thi danh sach
//khong co du lieu tra ve

function showListProduct() {
    let content = "";
    for (let i = 0; i < plist.length; i++) {
        content+= `<tr>
            <td>${plist[i].id}</td>
            <td>${plist[i].name}</td>
            <td>${plist[i].price}</td>
            <td><img width="100" src="${plist[i].img}">
</td>
            </tr>
        `
    }
    document.getElementById("products").innerHTML = content;
    let sumPrice = getSumPrice();
    document.getElementById("sumprice").innerText = `Tong tien la ${sumPrice}`
}
showListProduct();

//createNewProduct()
//Khong co tham so
//them moi vao mamg
function createNewProduct() {
    //lay cac thuoc tinh tu the input
    let id = +document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let price = +document.getElementById("price").value;
    let img = document.getElementById("img").value;
    //tao moi doi tuong Product
    let newProduct= new Product(id, name, price, img);
    plist.push(newProduct);
    //Hien thi lai bang
    showListProduct();
}

function getSumPrice() {
    let sum=0;
    for (let i = 0; i < plist.length; i++) {
        sum += plist[i].price;
    }
    return sum;
}
