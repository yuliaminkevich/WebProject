SELECT USER.NAME, PHOTO_POST.CREATION_DATE, PHOTO_POST.DESCRIPTION FROM PHOTO_POST JOIN USER 
ON USER.USER_ID = PHOTO_POST.USER_ID WHERE NAME = 'yulia' ORDER BY CREATION_DATE;