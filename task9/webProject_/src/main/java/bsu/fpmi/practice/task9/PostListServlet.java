package bsu.fpmi.practice.task9;

import com.google.gson.Gson;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

public class PostListServlet extends HttpServlet {

    public static final String DATE_FORMAT = "yyyy-MM-dd";
    public static PostList posts = new PostList();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String skipString = request.getParameter("skip");
        String topString = request.getParameter("top");
        int skip;
        if (skipString == null || skipString == "") {
            skip = 0;
        } else {
            skip = Integer.parseInt(skipString);
        }
        int top;
        if (topString == null || topString == "") {
            top = 0;
        } else {
            top = Integer.parseInt(skipString);
        }
        List<PostItem> pagePost = posts.getPage(skip, top);
        Gson gson = new Gson();
        String post = gson.toJson(pagePost);
        response.getOutputStream().print(post);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        try {
            String author = request.getParameter("author");
            String dateFromString = request.getParameter("dateFrom");
            String dateToString = request.getParameter("dateTo");
            String hTagString = request.getParameter("hashTags");
            Date dateFrom = null, dateTo = null;
            if (dateFromString != null && dateFromString!="") {
                dateFrom = new SimpleDateFormat(DATE_FORMAT).parse(dateFromString);
            }
            if (dateToString != null && !dateToString.isEmpty()) {
                dateTo = new SimpleDateFormat(DATE_FORMAT).parse(dateToString);
            }
            List<String> hashTags = new ArrayList<>();
            if (hTagString != null && hTagString!="") {
                Collections.addAll(hashTags, hTagString.split(" "));
            }
            List<PostItem> pagePost = posts.filter(author, dateFrom, dateTo, hashTags);
            Gson gson = new Gson();
            String answer = gson.toJson(pagePost);
            response.getOutputStream().print(answer);
        } catch (ParseException e){
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }
}