# Project Structure

### Django

Django is used on the backend, with Django Rest Framework serving the REST API.
The django project is called kiosk_cms.

Django Apps
- Apis: only used for routing /api/ urls to their perspective apps through urls.py.
- Campaigns: handles campaign admin pages, which includes generating the kiosk template


Templates:
- index.html: the base html page for serving the Angular app to the client.
- template.html: the html template for generating the kiosk template.
- kiosk.md: readme for the generated kiosk template.


### Angular