package bsu.fpmi.practice.task9;

import com.google.gson.Gson;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LikeServlet extends HttpServlet {

    public static PostList posts = new PostList();
    public static UserList users = new UserList();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        User currentUser = users.getCurrentUser();
        if(currentUser!=null) {
            String userLogin = currentUser.getLogin();
            posts.setLike(id, userLogin);
        }
        Gson gson = new Gson();
        String likes = gson.toJson(posts.get(id).getLikes());
        response.getOutputStream().print("likes:"+likes);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String id = request.getParameter("id");
        User currentUser = users.getCurrentUser();
        if(currentUser!=null) {
            String userLogin = currentUser.getLogin();
            posts.removeLike(id, userLogin);
        }
        Gson gson = new Gson();
        String likes = gson.toJson(posts.get(id).getLikes());
        response.getOutputStream().print("likes:"+likes);
    }

}
