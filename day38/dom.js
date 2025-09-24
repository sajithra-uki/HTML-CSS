function scriptMain(){
    const x=document.getElementById("main").innerHTML;
            const y=x.getElementsByTagName("p").innerHTML;

            document.getElementById("demo").innerHTML='good';
            document.getElementById("demo").
            innerHTML='the first paragraph (index 0) inside the "hi" is:'+ y[0].
            innerHTML;
}