package bsu.fpmi.practice.task9;

import org.json.simple.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

public class PostItem {
    private String id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> likes;
    private List<String> hashTags;

    public PostItem() {
        id = "";
        description = "";
        author = "";
        photoLink = "";
        createdAt = new Date();
        likes = new ArrayList<>();
        hashTags = new ArrayList<>();
    }

    public PostItem(String id, String description, Date createdAt, String author, String photoLink,
                    List<String> likes, List<String> hashTags) {
        this.id = id;
        this.description = description;
        this.createdAt = createdAt;
        this.author = author;
        this.photoLink = photoLink;
        this.likes = likes;
        this.hashTags = hashTags;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getAuthor() {
        return author;
    }

    public String getPhotoLink() {
        return photoLink;
    }

    public List<String> getLikes() {
        return likes;
    }

    public List<String> getHashTags() {
        return hashTags;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPhotoLink(String photoLink) {
        this.photoLink = photoLink;
    }

    public void setLikes(List<String> likes) {
        this.likes = likes;
    }

    public void setHashTags(List<String> hashTags) {
        this.hashTags = hashTags;
    }




    @Override
    public String toString() {
        JSONObject elem = new JSONObject();
        elem.put("id", id);
        elem.put("description", description);
        elem.put("createdAt", createdAt.toString());
        elem.put("author", author);
        elem.put("photoLink", photoLink);
        elem.put("likes", likes.toString());
        elem.put("hashTags", hashTags.toString());
        return elem.toString();
    }
}
