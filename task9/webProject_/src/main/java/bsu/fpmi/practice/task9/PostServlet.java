package bsu.fpmi.practice.task9;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;


public class PostServlet extends HttpServlet {

    PostList posts = new PostList();
    UserList users = new UserList();

    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        PostItem post;
        post = posts.get(id);
        response.getOutputStream().println(post.toString());
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        posts.delete(id);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id =new Date().getTime()+"";
        String description = request.getParameter("description");
        Date createdAt = new Date();
        User currentUser = users.getCurrentUser();
        String author = currentUser.getLogin();
        String photoLink = request.getParameter("photoLink");
        List<String> hashTags = new ArrayList<>();
        String hTagString = request.getParameter("hashTags");
        if (hTagString != null && hTagString!="") {
            Collections.addAll(hashTags, hTagString.trim().split(" "));
        }
        List<String> likes = new ArrayList<>();
        PostItem elem = new PostItem(id, description, createdAt, author, photoLink, likes, hashTags);
        posts.add(elem);
        response.getOutputStream().println(elem.toString());
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) {
        String id = request.getParameter("id");
        String description = request.getParameter("description");
        String photoLink = request.getParameter("photoLink");
        List<String> hashTags = new ArrayList<>();
        String hTagString = request.getParameter("hashTags");
        if (hTagString != null) {
            Collections.addAll(hashTags, hTagString.trim().split(" "));
        }
        List<String> likes = new ArrayList<>();
        String curUser = users.getCurrentUser().getLogin();
        posts.edit(id, new PostItem(id, description, new Date(), curUser, photoLink, likes, hashTags));
    }
}
