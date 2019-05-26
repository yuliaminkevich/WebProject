package bsu.fpmi.practice.task9;

import com.google.gson.Gson;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserServlet extends HttpServlet {

    public static UserList users = new UserList();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String login = request.getParameter("login");
        String password = request.getParameter("password");
        if (login != null && password != null) {
            User user = new User(login, password);
            if (users.include(user)) {
                users.setCurrentUser(user);
            }
        }
        Gson gson = new Gson();
        String answer = gson.toJson(users.getCurrentUser());
        response.getOutputStream().print(answer);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        User user = users.getCurrentUser();
        users.setCurrentUser(null);
        Gson gson = new Gson();
        String answer = gson.toJson(users.getCurrentUser());
        response.getOutputStream().print(answer);

    }

}
