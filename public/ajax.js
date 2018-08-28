
class Ajax {
    constructor(postsRepository) {
        this.postsRepository = postsRepository
    }

    getDBData() {
        return $.ajax({
            method: 'GET',
            url: '/posts'
        })
            .then( (data)=> {
                console.log(data)
                this.postsRepository.posts = data
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                return ('something went wrong')
            })
    }
}

export default Ajax