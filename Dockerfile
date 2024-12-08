# Use a lightweight web server for serving static files
FROM httpd:2.4

# Set environment variables (if needed)
ENV NODE_ENV=production

# Copy your static web files into the web server's default directory
COPY ./ /usr/local/apache2/htdocs/

# Expose port 80 for the web server
EXPOSE 80

# Start the server (handled automatically by httpd)
CMD ["httpd-foreground"]
