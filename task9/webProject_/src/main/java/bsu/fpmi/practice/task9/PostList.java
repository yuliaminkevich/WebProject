package bsu.fpmi.practice.task9;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class PostList {

    private List<PostItem> posts = new ArrayList<>();

    public PostList() {
        List<String> likes = new ArrayList<>();
        likes.add("alex");
        List<String> hashTags = new ArrayList<>();
        hashTags.add("insta");
        hashTags.add("like");
        posts.add(new PostItem("100", "Lorem ipsum", new Date(), "nattallius", "vbhj", likes, hashTags));
        List<String> hashTags1 = new ArrayList<>();
        hashTags1.add("day");
        hashTags1.add("beauty");
        posts.add(new PostItem("28", "New day", new Date(), "alex", "photo", likes, hashTags1));
    }

    public PostItem get(String id) {
        return posts.stream().filter((item) -> item.getId().equals(id)).findFirst().get();
    }

    public void add(PostItem post) {
        if (post != null) {
            posts.add(post);
        }
    }

    public void edit(String id, PostItem post) {
        PostItem curPost = this.get(id);
        post.setCreatedAt(curPost.getCreatedAt());
        post.setLikes(curPost.getLikes());
        this.delete(curPost.getId());
        this.add(post);
    }

    public void delete(String id) {
        PostItem post = this.get(id);
        posts.remove(post);
    }

    public List<PostItem> getPage(int skip, int top) {
        return posts.subList(skip, skip + top);
    }

    public List<PostItem> filter(String author, Date dateFrom, Date dateTo, List<String> hashTags) {
        List<PostItem> filteredPosts = new ArrayList<>();
        filteredPosts.addAll(posts);
        if (author != null && !author.equals("")) {
            filteredPosts = filteredPosts.stream()
                    .filter((post) -> post.getAuthor().equals(author))
                    .collect(Collectors.toList());
        }
        if (dateFrom != null) {
            filteredPosts = filteredPosts.stream()
                    .filter((post) -> dateFrom.before(post.getCreatedAt()))
                    .collect(Collectors.toList());
        }
        if (dateTo != null) {
            filteredPosts = filteredPosts.stream()
                    .filter((post) -> dateTo.after(post.getCreatedAt()))
                    .collect(Collectors.toList());
        }
        final List<PostItem>[] finalFilteredPosts = new List[]{filteredPosts};
        if (hashTags != null && !hashTags.isEmpty()) {
            hashTags.forEach((hashTag) -> {
                finalFilteredPosts[0] = finalFilteredPosts[0].stream()
                        .filter((post) ->  post.getHashTags().contains(hashTag))
                .collect(Collectors.toList());
            });
        }
        filteredPosts = finalFilteredPosts[0];
        int top = 10;
        if (filteredPosts.size() < 10) {
            top = filteredPosts.size();
        }
        return filteredPosts.subList(0, top);
    }

    public void setLike(String id, String user) {
        PostItem post = get(id);
        post.getLikes().add(user);
    }

    public void removeLike(String id, String user) {
        PostItem post = get(id);
        post.getLikes().remove(user);
    }
}
