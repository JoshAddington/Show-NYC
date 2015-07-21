# Project Structure

### Django

Django is used on the backend, with Django Rest Framework serving the REST API.
The django project is called kiosk_cms.

Django Apps
- Apis: only used for routing /api/ urls to their perspective apps through urls.py.
- Campaigns: Handles campaigns to be run on the kiosk.
    - Includes database models; url routes, views, and serializers for the API; and admin pages, which includes generation of the kiosk template.
- Images: Handles images submitted to each campaign.
    - Includes database models; url routes, views, and serializers for the API, fields adds the Base64ImageField to the serializer for REST API image submission; and admin pages.
- Vote_ID: used for limiting users to one vote per image. Creates a relation between a vote_id and an image.


Templates:
- index.html: the base html page for serving the Angular app to the client.
- template.html: the html template for generating the kiosk template.
- kiosk.md: readme for the generated kiosk template.


### Angular