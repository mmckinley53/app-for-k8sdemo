FROM centos:centos7

LABEL MAINTAINER=mmckinle80@yahoo.com

# Install Node etc...
RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm; yum clean all
RUN yum -y install net-tools; yum clean all
RUN yum -y install bind-utils; yum clean all



# Copy source code to /src in container
COPY . /src

# Install app and dependencies into /src in container
RUN cd /src; npm install

# Document the port the app listens on
EXPOSE 8080

# Run this command (starts the app) when the container starts
CMD cd /src && node ./app.js > stdout.txt 2> stderr.txt
