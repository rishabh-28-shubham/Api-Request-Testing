const requestUrl = 'https://api.github.com/users/rishabh-28-shubham';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
        if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        // console.log(typeof data)
            // console.log(data.name)
        
    }
}
xhr.send()