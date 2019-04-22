class filterHelper {
    author(list, author) {
        if (author === "" || !author) {
            return list;
        }
        return list.filter(item => item.author.includes(author));
    }

    dateFrom(list, dateFrom) {
        if (dateFrom === "" || !dateFrom) {
            return list;
        }
        return list.filter(item => new Date(item.createdAt) >= new Date(dateFrom));
    }

    dateTo(list, dateTo) {
        if (dateTo === "" || !dateTo) {
            return list;
        }
        return list.filter(item => new Date(item.createdAt) <= new Date(dateTo));
    }

    hashTags(list, hashTags) {
        if (hashTags[0] === "" || !hashTags) {
            return list;
        }
        let findHashTag = function (list, hashTag) {
            return list.filter(item => item.hashTags.includes(hashTag));
        };

        Array.prototype.forEach.call(hashTags, (elem) => {
            list = findHashTag(list, elem);
        });
        return list;
    }

}

class PostList {
    constructor(posts, user) {
        this._posts = posts || [];
        this._user = user || null;
    }

    static _isValidDate(elem) {
        return elem.getTime();
    }

    static _isValidDescription(elem) {
        const MAX_LENGTH = 200;
        const MIN_LENGTH = 1;
        return (elem.length >= MIN_LENGTH && elem.length < MAX_LENGTH);
    }

    static _isValidHashTag(elem) {
        const MAX_LENGTH = 40;
        return elem.length < MAX_LENGTH;
    }

    static _validate(photoPost) {
        if (!PostList._isValidDescription(photoPost.description)) {
            return false;
        }
        if (!photoPost.createdAt || !PostList._isValidDate(photoPost.createdAt)) {
            return false;
        }
        if (!photoPost.author) {
            return false;
        }
        if (!photoPost.photoLink) {
            return false;
        }
        if (!photoPost.hashTags || !PostList._isValidHashTag(photoPost.hashTags)) {
            return false;
        }
        return true;
    }

    _setRandomID(post) {
        let idObjectArray = [];
        post.id = Math.floor(Math.random() * 10000000000000001) + new Date().getTime() + '';
        if (idObjectArray.includes(post.id)) {
            this._setRandomID(post);
        } else {
            idObjectArray.push(post.id);
        }
    };

    static _restore() {
        let countOfPosts = localStorage.getItem("countOfPosts");
        let allPosts = new Array(countOfPosts);
        for (let i = 0; i < countOfPosts; i++) {
            allPosts[i] = JSON.parse(localStorage.getItem("post " + i))
        }
        return new PostList(allPosts);
    }

    save() {
        let a = this;
        Object.keys(this._posts).forEach(function (index) {
            let postString = JSON.stringify(a._posts[index]);
            localStorage.setItem("post " + index, postString);
        });
        localStorage.setItem("countOfPosts", JSON.stringify(this._posts.length));
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let fHelper = new filterHelper();
        let countOfPosts = localStorage.getItem("countOfPosts");
        let filteredPosts = new Array(countOfPosts);
        for (let i = 0; i < countOfPosts; i++) {
            if (this._posts[i].isDeleted === 0)
                filteredPosts[i] = this._posts[i];
        }
        filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (filterConfig) {
            Object.keys(filterConfig).forEach(function (value) {
                filteredPosts = fHelper[value](filteredPosts, filterConfig[value]);
            });
        }
        return filteredPosts.slice(skip, skip + top);
    }

    get(id) {
        return this._posts.find(value => value.id === id);
    }

    add(photoPost) {
        this._setRandomID(photoPost);
        photoPost.createdAt = new Date();
        photoPost.author = this._user;
        photoPost.isDeleted = 0;
        photoPost.likes = [];
        if (!PostList._validate(photoPost)) {
            return false;
        }
        this._posts.push(photoPost);
        return true;
    }

    addAll(posts) {
        let a = this;
        return posts.filter(item => a.add(item));
    }

    edit(id, photoPost) {
        let numEl = this.get(id);
        let description;
        if (!photoPost.description) {
            description = numEl.description;
        } else {
            description = photoPost.description;
        }
        let photoLink = photoPost.photoLink || numEl.photoLink;
        let hashTags = photoPost.hashTags || numEl.hashTags;
        if (!PostList._isValidDescription(description)) {
            return false;
        }
        if (!PostList._isValidHashTag(hashTags)) {
            return false;
        }
        this._posts.splice(this._posts.indexOf(numEl), 1, {
            id: id,
            description: description,
            createdAt: numEl.createdAt,
            author: numEl.author,
            photoLink: photoLink,
            hashTags: hashTags,
            likes: numEl.likes,
            isDeleted: 0
        });
        return true;
    }

    remove(id) {
        let numEl = this.get(id);
        if (numEl !== -1) {
            numEl.isDeleted = 1;
            return true;
        }
        return false;
    }

    like(id) {
        let numEl = this.get(id);
        if (numEl !== -1) {
            if (numEl.likes.includes(this._user)) {
                numEl.likes.splice(numEl.likes.indexOf(this._user), 1);
                return false;
            } else {
                numEl.likes.push(this._user);
                return true;
            }
        }
        return false;
    }
}