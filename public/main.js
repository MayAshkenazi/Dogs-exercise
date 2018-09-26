let dogs=[]

const render = function(){
    $('#dogs-container').empty()
    const source = $('#dogs-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({dogs});
    $('#dogs-container').append(newHTML);  
}

$(".showdogs").click(function(){
    $.get("dogs", function(data){
        dogs=data;
        console.log(dogs);
        render();
    })
});

