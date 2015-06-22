# Intern CMS Platform

Initial deployment is at http://intern-cms-dev.elasticbeanstalk.com/

[REST API Endpoints](docs/API_Endpoints.md)

These install instructions are based on running [Postgres.app](http://postgresapp.com/) version 9.4 on Mac OSX Yosemite, so make sure you have it installed 

#### Python Setup
First, get Python's package installer called pip by downloading [get-pip.py](https://bootstrap.pypa.io/get-pip.py) and running with `python get-pip.py`.

Python has a utility called virtualenv that is intended to keep python packages installed for projects separate from other projects and from python packages installed on your system. To set up python's virtualenv, run

```
sudo pip install -r virtual.txt
```


To set up the system for running Python's virtualenv and add Postgres.app to the $PATH, append .bash_profile to your systems .bash_profile with

```
cat .bash_profile >> ~/.bash_profile 
```


Once virtualenv is installed, create a virtualenv called intern-cms by running

```
mkvirtualenv intern-cms
```
We will be installing all our packages in this virtualenv because it keeps these packages from interfering with the rest of our system. Since we're installing our packages in the virtualenv, we'll also need to interact with Django from this virtualenv every time as well.

To deactivate the virtualenv, run 
```
deactivate
```

to enable the virtualenv, run 
```
workon intern-cms
```


then install the project packages by running

```
pip install -r requirements.txt
```

#### Postgres setup

To create the kiosk_cms database in PostGres, from the repo root run

```
bash postgres.sh
```

Then run a DB migration with

```
cd kiosk_cms
python manage.py migrate
```
 
Create your admin user with 
``` 
python manage.py createsuperuser
```

#### AWS S3 Media setup

This project is set up to use an AWS S3 bucket for serving media files.
If you need help setting up your S3 bucketand an IAM user, reference [this file](docs/AWS.md)

With your bucket set up, add the following environment variables to your system, replacing the italics with the respective info. The IAM info will be in the credentials file that you downloaded when you created the IAM User.

BUCKET_NAME=*S3 Bucket Name*

AWS_SECRET_ACCESS_KEY=*IAM User Secret Access Key*

AWS_ACCESS_KEY=*IAM User Access Key ID*


#### Running the local server
Every time you run the local server, make sure that you have the virtualenv running. Your terminal wiil show the currently running virtualenv at the beginning of each command prompt line. In our case, the command prompt will read `(intern-cms)<username>:<current folder> <user>$`.

If the command prompt does not have the virtualenv name at the front, then activate it by running `workon intern-cms`.

First, you'll need to have Django collect the static files(CSS, JS, icons) and put them into the folder that Django will be serving them from. To do this, run 
```
python manage.py collectstatic --no-input
```

To start the deveelopment server run 
```
python manage.py runserver
```
