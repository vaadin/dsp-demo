package com.vaadin.demo;

import java.io.IOException;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebFilter("/*")
public class ResourcesFilter implements Filter {
  private FilterConfig filterConfig;

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
      this.filterConfig = filterConfig;
  }

  public void doFilter(ServletRequest req, ServletResponse res,
                         FilterChain chain)
            throws ServletException, IOException {

        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        if (!request.getRequestURI().contains("connect")) {
          String uri = request.getRequestURI();
          if (uri.endsWith("/")) {
            uri = uri + "index.html";
          } else if (!uri.contains(".")) {
            uri = uri + "/index.html";
          }
          filterConfig.getServletContext().getRequestDispatcher(uri).forward(request, response);
        } else {
          chain.doFilter(request, response);
        }

    }
}
