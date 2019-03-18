class PostList {
    constructor(posts) {
        this._posts = (posts || []);
    }

    static _isValidDate(elem) {
        return elem.getTime();
    }

    static _isValidDescription(elem) {
        const MAX_LENGTH = 200;
        const MIN_LENGTH = 1;
        const len = elem.length;
        return (elem.length >= MIN_LENGTH && elem.length < MAX_LENGTH);
    }

    static _isValidHashTag(elem) {
        const MAX_LENGTH = 40;
        return elem.length < MAX_LENGTH;
    }

    static _validate(photoPost) {
        if (!photoPost.id)
            return false;
        if (!PostList._isValidDescription(photoPost.description))
            return false;
        if (!photoPost.createdAt || !PostList._isValidDate(photoPost.createdAt))
            return false;
        if (!photoPost.author)
            return false;
        if (!photoPost.photoLink)
            return false;
        if (photoPost.hashTags) {
            if (!PostList._isValidHashTag(photoPost.hashTags))
                return false;
        }
        return true;
    }

    setRandomID(post){
        let idObjectArray=[];
        post.id = (Math.floor(Math.random() * 10000000000000001) + new Date().getTime()).toString();
        if (idObjectArray.includes(post.id)) {
            this.setRandomID(post);
        } else {
            idObjectArray.push(post.id);
        }
    };

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let fHelper = new filterHelper();
        let filteredPosts = this._posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        if (filterConfig) {
            Object.keys(filterConfig).forEach(function (value) {
                filteredPosts = fHelper[value](filteredPosts, filterConfig[value])
            });
        }
        return filteredPosts.slice(skip, skip + top);
    }

    get(id) {
        return this._posts.find(value => value.id === id);
    }

    add(photoPost) {
        this.setRandomID(photoPost);
        photoPost.createdAt = new Date();
        photoPost.author = 'Mr. Snow';
        if (!PostList._validate(photoPost))
            return false;
        this._posts.push(photoPost);
        return true;
    }

    addAll(posts){
        let a = this;
        return posts.filter(function (item) {
            if (!a.add(item))
                return true;
        });
    }

    edit(id, photoPost) {
        let numEl = this._posts.findIndex(elem => elem.id === id);
        let description;
        if (!photoPost.description)
            description = this._posts[numEl].description;
        else
            description = photoPost.description;
        let photoLink = photoPost.photoLink || this._posts[numEl].photoLink;
        let hashTags = photoPost.hashTags || this._posts[numEl].hashTags;
        if (!PostList._isValidDescription(description))
            return false;
        if (!PostList._isValidHashTag(hashTags))
            return false;
        this._posts.splice(numEl, 1, {
            id: id,
            description: description,
            createdAt: this._posts[numEl].createdAt,
            author: this._posts[numEl].author,
            photoLink: photoLink,
            hashTags: hashTags
        });
        if (!PostList._validate(this._posts[numEl]))
            return false;
        return true;
    }

    remove(id) {
        let numEl = this._posts.findIndex(elem => elem.id === id);
        this._posts.splice(numEl, 1);
        return true;
    }

    clear() {


    }
}

class filterHelper {
    author(list, author) {
        return list.filter(item => item.author === author);
    }

    dateFrom(list, dateFrom) {
        let date = new Date(dateFrom);
        return list.filter(item => item.createdAt > date);
    }

    dateTo(list, dateTo) {
        let date = new Date(dateTo);
        return list.filter(item => item.createdAt < date);
    }

    hashTags(list, hashTags) {
        let findHashTag = function (list, hashTag) {
            return list.filter(item => item.hashTags.includes(hashTag));
        };
        hashTags.forEach(function (item) {
            list = findHashTag(list, item);
        });
        return list;
    }

}
let posts = new PostList();
let noValidPosts = posts.addAll([
    {
        id: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-12-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1551350663-0c96e5eda5d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        hashTags: ['#me', '#love', '#picoftheday', '#follow4follow', '#tflers', '#fashion', '#like4like', '#follow',
            '#instagood', '#amazing', '#cute', '#bestoftheday', '#happy', '#instatag', '#l4l', '#beautiful', '#likeforlike'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '2',
        description: 'Lorem ipsum nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnndolor sit amet, consectetiytnivcuxde65zawxdrcvgybhnjhbvgfcdxszxrdcvguhnijnmhbgvfrdesrdtyguhijgfcdxdcvguhinubvc6xr6cv8bunjibvcx6cv8yu9h0iuytvcrx6cvyuur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Mr. Snow',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#happy','#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#happy','#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-05-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '13',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '14',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-03-01T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#peach', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '16',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '17',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '18',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-07-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    },
    {
        id: '20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich','Mr. Snow','natallius','lizaKurochkina']
    }
]);
console.log(noValidPosts);
