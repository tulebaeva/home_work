let users = [];

let userInfo = {
    name: '',
    city: '',
    age: '',
    biography: ''
}

$('#save').click(function () {
    
    let result = confirm("Хотите сохранить ваши данные?")
    
    if (result == true) {
        alert('Данные сохранены')
        users.push({
            name: document.getElementById("name").value,
            age: document.getElementById("age").value,
            city: document.getElementById("city").value,
            biography: document.getElementById("description").value
        })
        console.log(users);
        
    } else {
        alert('Данные не сохранены')
    }
    
});



$('#city, #name, #age, #description').change(function () {
    
    let _this = $(this)
    
    let fieldName = _this.attr('name')
    
    userInfo[fieldName] = _this.val()
});
