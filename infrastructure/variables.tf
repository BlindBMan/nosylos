variable "environment" {
  description = "Environment for development"
  type        = string
}

variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
}
variable "aws_endpoint" {
  description = "Endpoint for localstack"
  type        = string
}

variable "dynamo_users_table_name" {
  description = "Name of users tables"
  type        = string
}