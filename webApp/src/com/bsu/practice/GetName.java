package com.bsu.practice;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GetName extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws IOException {
        String str = request.getQueryString();
        if (str.length()<=100) {
            response.getOutputStream().println("Name is " + str);
        }

    }
}
