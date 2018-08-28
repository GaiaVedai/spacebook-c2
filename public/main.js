import PostsRepository from './posts-repository.js';
import PostsRenderer from './posts-renderer.js';
import EventsHandler from './events-handler.js'; 
import Ajax from './ajax.js'; 

let postsRepository = new PostsRepository();
let postsRenderer = new PostsRenderer();
let eventsHandler = new EventsHandler(postsRepository, postsRenderer);
let ajax = new Ajax(postsRepository);

eventsHandler.registerAddPost();
eventsHandler.registerRemovePost();
eventsHandler.registerToggleComments();
eventsHandler.registerAddComment();
eventsHandler.registerRemoveComment();

ajax.getDBData().then( () => {postsRenderer.renderPosts()})