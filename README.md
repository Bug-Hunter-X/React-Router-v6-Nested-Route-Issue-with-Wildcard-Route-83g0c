# React Router v6 Nested Route Issue

This repository demonstrates a bug in React Router v6 involving nested routes and wildcard routes.  When a specific route and a wildcard route share a base path, the wildcard route can prevent the specific route from rendering correctly.

## Bug Description

The bug occurs when using `react-router-dom` v6 with nested routes.  If you have a route such as `/about` and a wildcard route such as `/about/*`, the wildcard route will capture all paths that start with `/about`, including `/about` itself. This effectively prevents the `/about` route from ever being rendered. 

## Solution

The solution is to adjust the routing strategy to avoid route conflicts. Instead of using a wildcard route `/about/*`, consider more specific routes if possible or restructure your routes to avoid the overlapping paths.