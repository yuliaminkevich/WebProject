class View {
    constructor(user) {
        this._user = user;
    }

    _setUser(user) {
        this._user = user;
        postList._user = user;
        document.getElementById("name-user").innerHTML = user;
        let exitButton = document.getElementById("bt-exit");
        exitButton.style.visibility = 'visible';
        exitButton.innerHTML = "Sign Out";
        document.getElementById("bt-add").style.visibility = 'visible';
    }

    _createPost(post) {
        let template = document.getElementById('postTemplate');
        template.content.querySelector('div').setAttribute('id', post.id);
        template.content.querySelector('strong').textContent = post.author;
        template.content.querySelector('span').textContent = this._createDate(post.createdAt);
        template.content.querySelector('img').src = post.photoLink;
        template.content.querySelector('p').textContent = post.description;
        if (post.hashTags && post.hashTags.length !== 0) {
            template.content.querySelector('p.hashTag').textContent = post.hashTags.join(' ');
        }
        let newPost = document.importNode(template.content, true);
        if (post.author === this._user) {
            newPost.querySelector('.bt-edit').style.visibility = 'visible';
            newPost.querySelector('.bt-delete').style.visibility = 'visible';
        }
        if (post.likes.includes(this._user)) {
            newPost.querySelector('.bt-like').style.color = 'red';
        }
        return newPost;
    }

    _createDate(date) {
        date = new Date(date);
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

    _createLoginPage() {
        view.clearPage();
        document.querySelector('main').style.display = 'none';
        document.querySelector('.createPostPage').style.display = 'none';
        document.querySelector('.errorPage').style.display = 'none';

        document.querySelector('footer').style.position = 'fixed';
        document.querySelector('.loginPage').style.display = 'flex';
        document.getElementById('bt-exit').style.visibility = 'hidden';
    }

    _createAddPostPage(id = null) {
        document.getElementById('bt-load').style.visibility = 'hidden';
        document.getElementById('bt-add').style.visibility = 'hidden';
        document.querySelector('footer').style.position = 'fixed';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.loginPage').style.display = 'none';
        document.querySelector('.errorPage').style.display = 'none';
        let content = document.querySelector('.createPostPage');
        content.style.display = 'flex';
        if (id) {
            let post = postList.get(id);
            content.querySelector('strong').textContent = postList._user;
            date = content.querySelector('span').textContent =this._createDate(post.createdAt);
            content.querySelector('img').src = post.photoLink;
            document.getElementsByName('desc')[0].value = post.description;
            document.getElementsByName('hashTag')[1].value = post.hashTags.join(' ');
            document.getElementsByName('createPic')[0].src = post.photoLink;
            return id;
        } else {
            content.querySelector('strong').textContent = postList._user;
            date = content.querySelector('span').textContent = this._createDate(new Date());
            document.getElementsByName('desc')[0].value = '';
            document.getElementsByName('hashTag')[1].value = '';
            document.getElementsByName('pic')[0].value = '';
            document.getElementsByName('createPic')[0].src = '';
            return true;
        }
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

    showPost(post) {
        let postEl = this._createPost(post);
        const container = document.querySelector('.content');
        if (post.isDeleted === 0) {
            container.appendChild(postEl);
        }
    }

    removePost(id) {
        let postEl = document.getElementById(id);
        if (postEl) {
            postEl.remove();
            return true;
        }
        return false;
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
        let exitButton = document.getElementById("bt-exit");
        exitButton.style.visibility = 'visible';
        exitButton.innerHTML = "Sign In";
        let user = document.getElementById("name-user");
        user.style.visibility = 'visible';
        user.innerHTML = '';
        document.getElementById("bt-add").style.visibility = 'hidden';
    }
}

let view = new View();