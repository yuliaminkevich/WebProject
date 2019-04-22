let countP;

class Logic {
    addPost(post) {
        if (postList.add(post)) {
            view.addPost(post);
            postList.save();
            return true;
        }
        return false;
    }

    showPosts() {
        document.querySelector('footer').style.position = 'static';
        let posts = postList.getPage();
        if (posts) {
            posts.forEach(elem => view.showPost(elem));
        }
    }

    likePost(id) {
        if (postList.like(id)) {
            postList.save();
            return true;
        }
        postList.save();
        return false;
    }

    removePost(id) {
        if (postList.remove(id)) {
            view.removePost(id);
            postList.save();
            return true;
        }
        return false;
    }

    editPost(id, post) {
        if (postList.edit(id, post)) {
            view.editPost(id, post);
            postList.save();
            return true;
        }
        return false;
    }

    updatePosts(author = null, dateFrom = null, dateTo = null, hashTags = [], skip = 0) {
        if (skip === 0) {
            view.clearPage();
        }
        let posts = postList.getPage(skip, 10, {
            author: author,
            dateFrom: dateFrom,
            dateTo: dateTo,
            hashTags: hashTags
        });
        document.getElementById('bt-load').style.visibility = 'visible';

        if (posts.length == 0){
            document.getElementById('bt-load').style.visibility = 'hidden';
            document.querySelector('footer').style.position = 'fixed';
            document.querySelector('.not-found').style.display = 'inline';
            return false;
        }
        if (posts.length<10) {
            document.getElementById('bt-load').style.visibility = 'hidden';
        }
        posts.forEach(elem => view.showPost(elem));
        // countP = 10;
        document.querySelector('footer').style.position = 'static';
        document.querySelector('main').style.display = 'inline';
        document.querySelector('.createPostPage').style.display = 'none';
        document.querySelector('.errorPage').style.display = 'none';
        document.querySelector('.loginPage').style.display = 'none';
        document.querySelector('.not-found').style.display = 'none';
        document.getElementById('bt-add').style.visibility = 'visible';

    }

    loadPosts(author = null, dateFrom = null, dateTo = null, hashTags = []) {
        this.updatePosts(author, dateFrom, dateTo, hashTags, countP)
        countP += 10;
    }

    enter(username) {
        currentUser = username;
        localStorage.setItem("currentUser", username);
        view._setUser(username);
        this.updatePosts();
    }

    exit() {
        currentUser = null;
        localStorage.setItem("currentUser", null);
        view.logOut();
        this.updatePosts();
    }

}

var date;