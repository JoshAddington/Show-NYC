To set up the local environment for using S3, you must have an AWS account. After signing into AWS, create an [AWS IAM user](https://console.aws.amazon.com/iam/home?#users), making sure to check "Generate an access key for each user". On the next page, make sure to Download Credentials.

Now [create an S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/UG/CreatingaBucket.html), and [edit the bucket permissions](https://docs.aws.amazon.com/AmazonS3/latest/UG/EditingBucketPermissions.html)
Add a bucket policy to set read/write permissions. This is the policy this project uses, substituting the S3 bucket name for BUCKET_NAME and the IAM user ARN for USER_ARN *(to find your IAM user ARN, go to https://console.aws.amazon.com/iam/home?#users, click on your user to go to the user summary, and the User ARN will be right underneath the Summary heading. It will be in the form of arn:aws:iam::xxxxxxxxx:user/user-name.)*
```
{
	"Version": "2008-10-17",
	"Statement": [
		{
			"Sid": "PublicReadForGetBucketObjects",
			"Effect": "Allow",
			"Principal": {
				"AWS": "*"
			},
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::BUCKET_NAME/*"
		},
		{
			"Sid": "",
			"Effect": "Allow",
			"Principal": {
				"AWS": "USER_ARN"
			},
			"Action": "s3:*",
			"Resource": [
				"arn:aws:s3:::BUCKET_NAME",
				"arn:aws:s3:::BUCKET_NAME/*"
			]
		}
	]
}
```

Then add the CORS policy to allow Cross Origin Resource Sharing. This project uses the following policy.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <CORSRule>
        <AllowedOrigin>*</AllowedOrigin>
        <AllowedMethod>GET</AllowedMethod>
        <MaxAgeSeconds>3000</MaxAgeSeconds>
        <AllowedHeader>Authorization</AllowedHeader>
    </CORSRule>
</CORSConfiguration>
```

Now that your bucket is set up, add the following environment variables to your system, replacing the italics with the respective info. The IAM info will be in the credentials file that you downloaded when you created the IAM User.

BUCKET_NAME=*S3 Bucket Name*
AWS_SECRET_ACCESS_KEY=*IAM User Secret Access Key*
AWS_ACCESS_KEY=*IAM User Access Key ID*
