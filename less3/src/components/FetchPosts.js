export default class postsSe {

    url  = 'https://jsonplaceholder.typicode.com/posts'

    async title(){
        return  await fetch(this.url)
            .then(value=>value.json())

    }
}