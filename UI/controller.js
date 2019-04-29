let postList1 = [
    {
        id: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-03-01T23:00:00'),
        author: 'alex',
        photoLink: 'https://images.unsplash.com/photo-1553782018-0741dfc50155?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        hashTags: ['#peach', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1507273026339-31b655f3752d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage4.jpg?1551712066858',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2019-02-23T23:00:00'),
        author: 'natallius',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage3.jpg?1551712105315',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '5',
        description: 'birds',
        createdAt: new Date('2019-01-15T18:37:00'),
        author: 'alex',
        photoLink: 'https://images.unsplash.com/26/pelican.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
        hashTags: ['#bird', '#nature', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-12-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1551350663-0c96e5eda5d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        hashTags: ['#me', '#love', '#picoftheday', '#follow4follow', '#tflers', '#fashion', '#like4like', '#follow',
            '#instagood', '#amazing', '#cute', '#bestoftheday', '#happy', '#instatag', '#l4l', '#beautiful', '#likeforlike'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-12-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage1.jpg?1551686059451',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-10-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-07-23T23:00:00'),
        author: 'Mr. Snow',
        photoLink: 'https://images.unsplash.com/photo-1551265158-307ed801f15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-05-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1553532070-e2c5714303e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-04-08T12:56:00'),
        author: 'natallius',
        photoLink: 'https://images.unsplash.com/photo-1551446591-142875a901a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '12',
        description: 'The best icecream',
        createdAt: new Date('2018-03-29T15:03:00'),
        author: 'natallius',
        photoLink: 'https://images.unsplash.com/photo-1554521718-e87e96d67ca5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        hashTags: ['icecream', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '13',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-03-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1554345787-ea075012af2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '14',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage1.jpg?1551686059451',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },

    {
        id: '15',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fsky.jpg?1551709519164',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '16',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage3.jpg?1551712105315',
        hashTags: ['#happy', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '17',
        description: 'I love this day',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'natallius',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fdonat.jpg?1551709627059',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '18',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'winter.jpg',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Mr. Snow',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage2.jpg?1551712041713',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '20',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://images.unsplash.com/photo-1551265158-307ed801f15a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1056&q=80',
        hashTags: ['#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    },
    {
        id: '21',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'yuliaminkevich',
        photoLink: 'https://cdn.glitch.com/c6987714-d2b8-4f53-bde5-c7599c30fb77%2Fimage4.jpg?1551712066858',
        hashTags: ['#happy', '#me', '#love', '#instadaily', '#selfie', '#photooftheday', '#fun', '#followme', '#smile', '#summer', '#swag'],
        likes: ['yuliaminkevich', 'Mr. Snow', 'natallius', 'lizaKurochkina'],
        isDeleted: 0
    }
];
let logic = new Logic();


var postList;
var isFiltered = 0;
var author, dateFrom, dateTo, hashTags;
var addOrEdit = 0;
var currentId, currentUser;

class Controller {
    constructor() {
        this.start();
        postList = PostList._restore();
        currentUser = localStorage.getItem("currentUser");
        if (currentUser !== null && currentUser !== "null") {
            logic.enter(currentUser);
        }
        logic.showPosts();
        countP = 10;
        this.mainPageBtn();
        this.addBtn();
        this.loadBtn();
        this.loginBtn();
        this.signBtn();
        this.filterBtn();
        this.addConfirmBtn();
        this.processPostBtn();
    }

    start() {
        if (!localStorage.getItem("countOfPosts")) {
            Object.keys(postList1).forEach(function (index) {
                let postString = JSON.stringify(postList1[index]);
                localStorage.setItem("post " + index, postString);
            });
            localStorage.setItem("countOfPosts", postList1.length);
        }
    }

    mainPage() {
        logic.updatePosts();
    }

    mainPageBtn() {
        let load = document.getElementById('logo');
        load.addEventListener('click', this.mainPage);
    }

    loadPosts() {
        if (isFiltered === 1) {
            logic.loadPosts(author, dateFrom, dateTo, hashTags);
            return true;
        }
        logic.loadPosts();
    }

    loadBtn() {
        let load = document.getElementById('bt-load');
        load.addEventListener('click', this.loadPosts);

    }

    filter(e) {
        e.preventDefault();
        let form = document.forms.filter;
        author = form.usernameFilter.value;
        dateFrom = form.dateFrom.value;
        dateTo = form.dateTo.value;
        hashTags = form.hashTag.value.split(' ');
        logic.updatePosts(author, dateFrom, dateTo, hashTags);
        isFiltered = 1;
    }

    filterBtn() {
        let filterBt = document.forms.filter;
        filterBt.addEventListener('submit', this.filter);
    }

    enterExit() {
        let signIn = document.getElementById('bt-exit');
        let state = signIn.innerHTML;
        if (state === 'Sign In') {
            view._createLoginPage();
        } else {
            logic.exit();
        }
    }

    signBtn() {
        let signIn = document.getElementById('bt-exit');
        signIn.addEventListener('click', this.enterExit);
    }

    authorization(e) {
        e.preventDefault();
        let checkPassword;
        let login = document.getElementsByName("username")[0].value;
        if (login === "") {
            logic.exit();
            return false;
        }
        let password = document.getElementsByName("password")[0].value;
        if (!(checkPassword = localStorage.getItem(login))) {
            localStorage.setItem(login, password);
            logic.enter(login);
            return true;
        }
        if (checkPassword !== password) {
            logic.exit();
            return false;
        }

        logic.enter(login);
    }

    loginBtn() {
        let formLogin = document.forms.login;
        formLogin.addEventListener('submit', this.authorization);
    }

    createAddPostPage() {
        view._createAddPostPage();
    }

    addBtn() {
        addOrEdit = 0;
        let btAddPost = document.getElementById('bt-add');
        btAddPost.addEventListener('click', this.createAddPostPage);
    }

    addPost(e) {
        e.preventDefault();
        let description = document.getElementsByName('desc')[0].value;
        let hashTags = document.getElementsByName('hashTag')[1].value.split(' ');
        let pic = document.getElementsByName('pic')[0].value.substr(12);
        logic.updatePosts();
        if (addOrEdit === 0) {
            logic.addPost({description: description, hashTags: hashTags, photoLink: pic, author: postList._user});
        } else if (addOrEdit === 1) {
            logic.editPost(currentId, {description: description, hashTags: hashTags, photoLink: pic})
        }

    }

    pic() {
        let pic = document.getElementsByName('pic')[0].value.substr(12);
        document.getElementsByName('createPic')[0].src = pic;
    }

    addConfirmBtn() {
        document.getElementsByName('pic')[0].addEventListener('change', this.pic)
        document.forms.description.addEventListener('submit', this.addPost);
    }

    processPostBtn() {
        document.querySelector('.content').addEventListener('click', this.processPost);
    }

    processPost(e) {
        let postId = e.target.parentElement.parentElement.parentElement.getAttribute('id');
        let button = e.target.parentElement.className;
        if (button === 'bt-edit') {
            addOrEdit = 1;
            currentId = postId;
            view._createAddPostPage(postId);
        } else if (button === 'bt-delete') {
            logic.removePost(postId);
        } else if (button === 'bt-like') {
            if (currentUser !== null && currentUser !== "null") {
                if (logic.likePost(postId)) {
                    e.target.style.color = 'red';
                    return;
                } else {
                    e.target.style.color = '#9E9C9C';
                }
            }
        }
    }

}

let work = new Controller();
