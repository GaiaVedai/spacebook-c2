import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js';
import Ajax from './ajax.js';

let ajax = new Ajax();
let postsRepository = new PostsRepository(ajax);
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();

ajax.getDBData()
    .then( (data) => {
        postsRepository.posts = data
        postsRenderer.renderPosts(data)
    }).catch(function (jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
        return ('something went wrong')
    })