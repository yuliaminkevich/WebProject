SELECT DATEDIFF(NOW(), CREATION_DATE) AS DIFFERENCE FROM PHOTO_POST WHERE CREATION_DATE = 
(SELECT CREATION_DATE FROM PHOTO_POST ORDER BY CREATION_DATE LIMIT 1) ORDER BY DIFFERENCE DESC LIMIT 1;