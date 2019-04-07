let p = (function() {

    return {

        addPost(post) {
            if (postList.add(post)) {
                view.addPost(post);
                return true;
            }
            return false;
        },

        showPosts() {
            if (posts = postList.getPage(0, 10)) {
                posts.reverse().forEach(elem => view.addPost(elem));
            }
        },

        removePost(id) {
            if (postList.remove(id)) {
                view.removePost(id);
                return true;
            }
            return false;
        },

        editPost(id, post) {
            if (postList.edit(id, post)) {
                view.editPost(id, post);
                return true;
            }
            return false;
        },

        updatePosts() {
            view.clearPage();
            postList.getPage().reverse().forEach(elem => view.addPost(elem));

        },

        enter(username) {
            view._setUser(username);
            this.updatePosts();
        },

        exit() {
            view.logOut();
            this.updatePosts();
        }
    }

}());
