var object = (function() {
    var PhotoPosts = [
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
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
    ];
    var filterHelper = {
        author: function (list, author) {
            return list.filter(function (a) {
                return a.author === author;
            });
        },
        dateFrom: function (list, dateFrom) {
            var date = new Date(dateFrom);
            return list.filter(function (a) {
                return a.createdAt > date;
            });
        },
        dateTo: function (list, dateTo) {
            var date = new Date(dateTo);
            return list.filter(function (a) {
                return a.createdAt < date;
            });
        },
        hashTags: function (list, hashTags) {
            let findHashTag = function (list, hashTag) {
                return list.filter(item => item.hashTags.includes(hashTag));
            };
            hashTags.forEach(function (item) {
                list = findHashTag(list, item);
            });
            return list;
        }
    };

    return {
        getPhotoPost: function (id) {
            return PhotoPosts.find(function (value) {
                if (value.id === id)
                    return true;
            });
        },
        validateDate: function(elem) {
            return elem.getTime();
        },
        validateDescription: function(elem) {
            var MAX_LENGTH = 200;
            var MIN_LENGTH = 1;
            return (elem.length >= MIN_LENGTH || elem.length <= MAX_LENGTH);
        },
        validateHashTags: function(elem) {
            var MAX_LENGTH = 30;
            return elem.length < MAX_LENGTH;
        },
        validatePhotoPost: function (photoPost) {
            if (!photoPost.id)
                return false;
            if (!this.validateDescription(photoPost.description))
                return false;
            if (!photoPost.createdAt || !this.validateDate(photoPost.createdAt))
                return false;
            if (!photoPost.author)
                return false;
            if (!photoPost.photoLink)
                return false;
            if (photoPost.hashTags){
                if (!this.validateHashTags(photoPost.hashTags))
                    return false;
            }
            return true;
        },
        addPhotoPost: function (photoPost) {
            photoPost.id = new Date().getTime().toString();
            photoPost.createdAt = new Date();
            photoPost.author = 'Mr. Snow';
            if (!this.validatePhotoPost(photoPost))
                return false;
            if (this.getPhotoPost(photoPost.id))
                return false;
            PhotoPosts.push(photoPost);
            return true;
        },
        removePhotoPost: function (id) {
            var numEl = PhotoPosts.findIndex(function (elem) {
                if (elem.id === id) {
                    return true;
                }
            });
            PhotoPosts.splice(numEl, 1);
            return true;
        },
        editPhotoPost: function (id, photoPost) {
            var numEl = PhotoPosts.findIndex(function (elem) {
                if (elem.id === id) {
                    return true;
                }
            });
            if (!photoPost.description)
                var description = PhotoPosts[numEl].description ;
            else
                var description = photoPost.description ;
            var photoLink = photoPost.photoLink || PhotoPosts[numEl].photoLink;
            var hashTags = photoPost.hashTags || PhotoPosts[numEl].hashTags;
            if (!this.validateDescription(description))
                return false;
            if (!this.validateHashTags(hashTags))
                return false;
            PhotoPosts.splice(numEl, 1, {
                id: id,
                description: description,
                createdAt: PhotoPosts[numEl].createdAt,
                author: PhotoPosts[numEl].author,
                photoLink: photoLink,
                hashTags: hashTags
            });
            if (!this.validatePhotoPost(PhotoPosts[numEl]))
                return false;
            return true;
        },
        getPhotoPosts: function (skip = 0, top = 10, filterConfig = {}) {
            var filteredPosts = PhotoPosts.sort(function (a, b) {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
            if (filterConfig) {
                Object.keys(filterConfig).forEach(function (value) {
                    filteredPosts = filterHelper[value](filteredPosts, filterConfig[value])
                });
            }
            return filteredPosts.slice(skip, skip + top);
        }
    };

}());