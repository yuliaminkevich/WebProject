create table USER
(
	USER_ID int auto_increment
		primary key,
	NAME varchar(60) not null,
	PASSWORD varchar(60) not null
);
create table PHOTO_POST
(
	POST_ID int auto_increment
		primary key,
	DESCRIPTION varchar(200) null,
	CREATION_DATE datetime not null,
	PHOTO_LINK varchar(200) not null,
	USER_ID int not null,
	constraint PHOTO_POST_fk
		foreign key (USER_ID) references user (USER_ID)
			on delete cascade
);
create table TAG
(
	TAG_ID int auto_increment
		primary key,
	TAG_NAME varchar(30) not null
);
create table TAG_POST
(
    TAG_ID int not null
		primary key,
	POST_ID int not null,
	constraint POST_TAG__fk
		foreign key (POST_ID) references photo_post (POST_ID)
			on delete cascade,
	constraint TAG_POST_tag_TAG_ID_fk
		foreign key (TAG_ID) references tag (TAG_ID)
			on delete cascade
);
create table LIKES
(
	ID int auto_increment,
	POST_ID int not null
		primary key,
	USER_ID int not null,
	constraint LIKE_PHOTO_POST_ID_fk
		foreign key (POST_ID) references photo_post (POST_ID)
			on delete cascade,
	constraint LIKE_USER_USER_ID_fk
		foreign key (USER_ID) references user (USER_ID)
			on delete cascade
);
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (1, 'yulia', '55555');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (2, 'nattallius','nata');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (3, 'alex','alex');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (4, 'sasha','sasha');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (5, 'nadezhda','11111');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (6, 'maria','maria');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (7, 'dima','dima');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (8, 'oksana','oksana');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (9, 'inga','ingusik');
INSERT INTO USER(USER_ID, NAME, PASSWORD) VALUES (10, 'noname','1010');
INSERT INTO TAG(TAG_NAME) VALUES ('#insta');
INSERT INTO TAG(TAG_NAME) VALUES ('#like');
INSERT INTO TAG(TAG_NAME) VALUES ('#beauty');
INSERT INTO TAG(TAG_NAME) VALUES ('#goodday');
INSERT INTO TAG(TAG_NAME) VALUES ('#follow');
INSERT INTO TAG(TAG_NAME) VALUES ('#me');
INSERT INTO TAG(TAG_NAME) VALUES ('#spring');
INSERT INTO TAG(TAG_NAME) VALUES ('#nature');
INSERT INTO TAG(TAG_NAME) VALUES ('#belarus');
INSERT INTO TAG(TAG_NAME) VALUES ('#love');
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Lorem ipsum', '2019-05-01 23:00:00', '/resources/pictures/image1.jpg', 1);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Positive picture', '2019-04-08 12:56:00', '/resources/pictures/image2.jpg', 2);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Nothing happens', '2019-03-06 16:42:00', '/resources/pictures/image3.jpg', 3);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Good day', '2019-02-24 02:01:00', '/resources/pictures/image4.jpg', 4);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Hello winter', '2019-01-05 10:56:00', '/resources/pictures/winter.jpg', 5);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('cookies', '2018-04-08 12:56:00', '/resources/pictures/cookies.jpg', 1);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Love berries', '2018-04-08 12:56:00', '/resources/pictures/berries.jpg', 1);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Me and sisters', '2018-04-08 12:56:00', '/resources/pictures/donat.jpg', 1);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('Orange', '2018-04-08 12:56:00', '/resources/pictures/orange.jpg', 7);
INSERT INTO PHOTO_POST(DESCRIPTION, CREATION_DATE, PHOTO_LINK, USER_ID) VALUES ('The best icecream', '2018-04-08 12:56:00', '/resources/pictures/italy.jpg', 10);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (1,1);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (2,3);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (3,4);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (4,2);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (5,5);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (6,6);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (7,7);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (8,8);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (9,9);
INSERT INTO TAG_POST(POST_ID, TAG_ID) VALUES (10,10);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (1,1);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (2,3);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (3,4);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (4,2);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (5,5);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (6,6);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (7,7);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (8,8);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (9,9);
INSERT INTO LIKES(POST_ID, USER_ID) VALUES (10,10);
