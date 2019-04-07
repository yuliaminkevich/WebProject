class View {
    constructor(user) {
        this._user = user;
        // this._setUser(user);
    }

    _setUser(user) {
        this._user = user;
        postList._user = user;
        document.getElementById("name-user").innerHTML = user;
        document.getElementById("bt-exit").innerHTML = "Sign Out";
        document.getElementById("bt-add").style.visibility = 'visible';
    }

    _createPost (post) {
        let template = document.getElementById('postTemplate');
        template.content.querySelector('div').setAttribute('id', post.id);
        template.content.querySelector('strong').textContent = post.author;
        template.content.querySelector('span').textContent = this._createDate(post.createdAt);
        template.content.querySelector('img').src = post.photoLink;
        template.content.querySelector('p').textContent = post.description;
        if (post.hashTags && post.hashTags.length!==0) {
            template.content.querySelector('p.hashTag').textContent = post.hashTags.join(' ');        }
        let newPost = document.importNode(template.content, true);
        if (post.author === this._user) {
            newPost.querySelector('.bt-edit').style.visibility = 'visible';
            newPost.querySelector('.bt-delete').style.visibility = 'visible';
        }
        return newPost;
    }

    _createDate(date) {
        let dd = date.getDate();
        if (dd < 10) {
            dd = '0' + dd;
        }
        let mm = date.getMonth() + 1;
        if (mm < 10) {
            mm = '0' + mm;
        }
        let yy = date.getFullYear();
        let hh = date.getHours();
        if (hh < 10) {
            hh = '0' + hh;
        }
        let min = date.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        return hh + ':' + min + '  ' + dd + '.' + mm + '.' + yy;
    }

    clearPage() {
        let container = document.querySelector('.content');
        let posts = document.querySelectorAll('.post');
        Array.prototype.forEach.call(posts, (elem) => {
            container.removeChild(elem);
        });

    }

    addPost(post) {
        let postEl = this._createPost(post);
        const container = document.querySelector('.content');
        container.insertBefore(postEl, container.firstElementChild);
    }

    removePost(id) {
        let postEl = document.getElementById(id);
        if (postEl) {
            postEl.remove();
        }
    }

    editPost(id, post) {
        let postEl = document.getElementById(id);
        if (postEl) {
            postEl.querySelector('img').src = post.photoLink;
            postEl.querySelector('p').textContent = post.description;
            postEl.querySelector('p.hashTag').textContent = post.hashTags.join(' ');
            return true;
        }
        return false;
    }

    logOut() {
        this._user = null;
        document.getElementById("name-user").innerHTML = '';
        document.getElementById("bt-exit").innerHTML = "Sign In";
        document.getElementById("bt-add").style.visibility = 'hidden';
    }


}
let view = new View();