/**
 * @class Responsible for storing and manipulating Spacebook posts, in-memory
 */

class PostsRepository {
    constructor(ajax) {
        this.posts = [];
        this.ajax = ajax
    }

    addPost(postText) {
        let newPost = ({ text: postText, comments: [] })
        return this.ajax.addToDB(newPost)
            .then((newPost) => {
                this.posts.push(newPost)
                return this.posts
            })
            .catch(function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
                return ('something דwent wrong')
            })
    };



    removePost(index) {
        let postID = this.posts[index]._id;
        this.ajax.RemoveFromDB(postID)
        this.posts.splice(index, 1);
    }

    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
    };
}



export default PostsRepository