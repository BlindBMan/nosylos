resource "aws_dynamodb_table" "users-table" {
  name           = var.dynamo_users_table_name
  billing_mode   = "PROVISIONED"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "UserId"
  range_key      = "Date"

  attribute {
    name         = "UserId"
    type         = "S"
  }

  attribute {
    name         = "Date"
    type         = "S"
  }

  tags = {
    Name         = "dynamodb-users-table"
    Environment  = var.environment
  }
}