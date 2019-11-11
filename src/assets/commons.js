export default{
    jump(id){
        var elementobj=document.querySelector(`#${id}`);
        if(elementobj){ elementobj.scrollIntoView(); }
    },
}