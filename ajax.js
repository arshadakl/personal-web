$("#contact-fm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwNYtSccW1VihFI_j6Z0jrUe6VUwYmEZsKzqrJu7w/exec",
        data:$("#contact-fm").serialize(),
        method:"post",
        success:function (response){
            alert("Thank you for Messaging...")
            window.location.reload()
            //window.location.href=""
        },
        error:function (err){
            alert("Something wrong, check your Network")

        }
    })
})