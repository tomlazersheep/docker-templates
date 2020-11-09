FROM ubuntu:12.04

RUN apt-get update && apt-get install -y apache2 && apt-get clean && rm -rf /var/lib/apt/lists

ENV APACHE_RUN_USER www-data

EXPOSE 80

CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"] 
