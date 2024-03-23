document.addEventListener("alpine:init", () => 
{
    Alpine.data('app', ()=>
    ({
        res:[],
        async getJoke() 
        {
            let req = await fetch('https://icanhazdadjoke.com/', {headers:{'Accept':'application/json'}})
            let res = await req.json();
            this.res = res
        },
        async init()
        {
            await this.getJoke();
        }
    })
    )
})