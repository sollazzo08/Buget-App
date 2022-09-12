const tableNames = require('../../src/constants/tableNames');
const { references } = require('../../src/lib/tableUtils');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.transactionType, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('username', 254).notNullable().unique();
    table.string('email').notNullable();
    table.string('password', 127).notNullable();
    table.dateTime('last_login');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable(tableNames.statusType, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable(tableNames.category, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable(tableNames.envelope, (table) => {
    table.increments().notNullable();
    table.integer('amount').notNullable();
    references(table, 'category');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
  await knex.schema.createTable(tableNames.transaction, (table) => {
    table.increments().notNullable();
    references(table, 'user');
    table.string('payee').notNullable();
    table.integer('amount').notNullable();
    table.date('date').notNullable();
    references(table, 'transaction_type');
    references(table, 'status_type');
    references(table, 'envelope');
    table.timestamps(false, true);
    table.datetime('deleted_at');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.transaction);
  await knex.schema.dropTable(tableNames.envelope);
  await knex.schema.dropTable(tableNames.category);
  await knex.schema.dropTable(tableNames.statusType);
  await knex.schema.dropTable(tableNames.user);
  await knex.schema.dropTable(tableNames.transactionType);
};
