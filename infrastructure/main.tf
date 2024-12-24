module "users_table" {
  source                   = "./modules/dynamodb"
  environment              = var.environment
  dynamo_users_table_name  = var.dynamo_users_table_name
}