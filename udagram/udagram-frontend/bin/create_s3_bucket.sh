aws s3api create-bucket --bucket duclt7bucket --acl bucket-owner-full-control
#aws s3 cp www s3://duclt7bucket/ --recursive --include "*"
aws s3api put-bucket-policy --bucket duclt7bucket --policy file://bucket_policy.json
aws s3api put-bucket-cors --bucket duclt7bucket --cors-configuration file://bucket_cors.json
aws s3 website s3://duclt7bucket/ --index-document index.html
