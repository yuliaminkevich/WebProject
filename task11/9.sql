SELECT PHOTO_POST.POST_ID, PHOTO_POST.CREATION_DATE, USER.NAME FROM PHOTO_POST JOIN USER 
ON USER.USER_ID = PHOTO_POST.USER_ID GROUP BY DESCRIPTION HAVING LENGTH(DESCRIPTION) > 15;