
class Ajax {
    constructor(postsRepository) {
        // this.postsRepository = postsRepository
    }

    getDBData() {
        return $.ajax({
            method: 'GET',
            url: '/posts'
        })
          
    }
    addToDB(posts){
        return $.ajax({
            method: 'POST',
            url: '/posts',
            data: posts,
        })
    }
    RemoveFromDB(postId){
        return $.ajax({
            method: 'DELETE',
            url: '/posts/'+postId,
            data: postId,
        })
    }
}

export default Ajax